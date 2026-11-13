// Växeln för "Vem tänker du på? AI" – körs som en Cloudflare Worker.
// Tar emot spelets frågor och svar, kontrollerar kodordet och skickar vidare till Claude.
// Hemligheter läggs in i Cloudflare (Settings → Variables and Secrets), aldrig här:
//   ANTHROPIC_KEY  API-nyckeln från platform.claude.com
//   KODORD         kodordet familjen och vännerna skriver in
// Valfritt:
//   MODELL         t.ex. claude-sonnet-5-5 (annars claude-haiku-5-5)
//   DAGSTAK        max antal anrop per dygn (kräver KV-bindningen RAKNARE), standard 600

const TILLATNA = ["https://peter.ekvardt.se"];
const MAX_SVAR = 40;

const REGLER = `Du spelar gissningsleken "Vem tänker du på?" på svenska.
Spelaren tänker på en känd person – levande eller död, från vilket land som helst. Det kan vara en världskändis, en svensk idrottare, artist, politiker eller tv-profil, en historisk person eller en fiktiv figur om svaren pekar dit.

Du ställer EN ja/nej-fråga i taget och försöker gissa vem det är på så få frågor som möjligt.
- Svaren kan vara Ja, Nej, Troligen, Troligen inte eller Vet inte. Spelaren kan ha fel ibland – låt inte ett enstaka svar utesluta något helt.
- Börja brett (kön, levande, land, område) och smalna av. Fråga sådant som delar de kvarvarande kandidaterna ungefär på mitten.
- Upprepa aldrig en fråga och fråga inte om sådant som redan är besvarat.
- Frågorna ska vara korta, tydliga och gå att besvara med ja eller nej av en vanlig svensk som känner till personen.
- Fråga BARA om sådant som en vanlig svensk vet om en känd person: vad hen är känd för, i vilket sammanhang man ser eller hör hen, kända verk eller bedrifter, ungefär vilket årtionde hen var som mest känd, ungefärlig ålder (ung, medelålders, äldre), vilken stad eller trakt man förknippar hen med.
- Fråga ALDRIG om exakt födelseår eller födelsedatum, födelseort, längd, utbildning eller familjedetaljer – sådant vet man sällan. Fråga hellre "Förknippar man personen med Göteborg?" än "Är personen född i Göteborg?" och "Var personen känd redan på 80-talet?" än "Är personen född före 1960?".
- Gissa inte på måfå. Efter en felgissning, tänk om ordentligt och ställ hellre ett par frågor till innan nästa gissning.
- Gissa när du är ganska säker (omkring 70 procent), annars senast efter 20 frågor. Gissa aldrig på någon som redan gissats fel.
- Efter 30 frågor eller 4 felgissningar ger du upp.
- Du får ibland lägga till en kort, glad kommentar (högst 8 ord), till exempel "Aha, en idrottare!". Inte varje gång.

Svara ENDAST med JSON, ingen annan text:
{"typ":"fraga","text":"…","kommentar":"…"}
{"typ":"gissning","namn":"…","beskrivning":"vem personen är på 3–8 ord","kommentar":"…"}
{"typ":"ger_upp","text":"…"}
"kommentar" är valfri.`;

const FACIT = `Du har just spelat gissningsleken "Vem tänker du på?" på svenska. Spelaren avslöjar nu vem det var.
Gå igenom spelarens svar och jämför med vad du säkert vet om personen.
- Om något svar verkar fel, säg vänligt vilket (högst två) och varför – men bara om du är säker, och bara om sådant en vanlig svensk kan förväntas veta.
- Om svaren stämde, säg kort och glatt vilken fråga som var avgörande eller vad som gjorde det svårt.
- Om du inte lyckades gissa, erkänn dig besegrad med glimten i ögat.
Högst 40 ord, på svenska. Svara ENDAST med JSON: {"typ":"facit","text":"…"}`;

const SVARSORD = { ja: "Ja", nej: "Nej", troligen: "Troligen", troligeninte: "Troligen inte", vetinte: "Vet inte" };

function cors(origin) {
  const ok = TILLATNA.includes(origin) || /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
  return {
    "Access-Control-Allow-Origin": ok ? origin : TILLATNA[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}
function svar(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...cors(origin) },
  });
}
const kort = (s, n = 200) => String(s ?? "").slice(0, n);

function bygg(body) {
  const rader = (Array.isArray(body.svar) ? body.svar : []).slice(0, MAX_SVAR)
    .map((x, i) => `${i + 1}. ${kort(x.fraga)} – ${SVARSORD[x.svar] || "Vet inte"}`);
  const fel = (Array.isArray(body.fel) ? body.fel : []).slice(0, 10).map(n => kort(n, 80));
  let text = rader.length ? `Frågor och svar hittills:\n${rader.join("\n")}` : "Spelet har precis börjat. Ställ första frågan.";
  if (fel.length) text += `\n\nFelgissningar (gissa inte på dessa igen): ${fel.join(", ")}`;
  if (body.lage === "facit") text += `\n\nSpelet är slut. ${body.vann ? "Du gissade rätt till slut." : "Du lyckades inte gissa."} Spelaren tänkte på: ${kort(body.facit, 80)}`;
  else text += `\n\nDet här blir fråga nummer ${rader.length + 1}. Vad gör du nu?`;
  return text;
}

function tolka(text) {
  const m = text.match(/\{[\s\S]*\}/);
  if (!m) throw new Error("inget JSON");
  const d = JSON.parse(m[0]);
  if (!["fraga", "gissning", "ger_upp", "facit"].includes(d.typ)) throw new Error("okänd typ");
  return d;
}

async function raknaUpp(env) {
  if (!env.RAKNARE) return true;
  const dag = new Date().toISOString().slice(0, 10);
  const n = parseInt((await env.RAKNARE.get(dag)) || "0", 10);
  if (n >= parseInt(env.DAGSTAK || "600", 10)) return false;
  await env.RAKNARE.put(dag, String(n + 1), { expirationTtl: 60 * 60 * 48 });
  return true;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(origin) });
    if (request.method !== "POST") return svar({ fel: "Här bor växeln till Vem tänker du på? AI." }, 200, origin);

    let body;
    try { body = await request.json(); } catch { return svar({ fel: "Trasig förfrågan" }, 400, origin); }

    if (!env.KODORD || kort(body.kod, 100).trim().toLowerCase() !== env.KODORD.trim().toLowerCase())
      return svar({ fel: "kodord" }, 401, origin);
    if (body.lage === "prova") return svar({ ok: true }, 200, origin);
    if (!env.ANTHROPIC_KEY) return svar({ fel: "API-nyckeln saknas i växeln" }, 500, origin);
    if (!(await raknaUpp(env))) return svar({ fel: "dagstak" }, 429, origin);

    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": env.ANTHROPIC_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: env.MODELL || "claude-haiku-5-5",
        max_tokens: 2000,
        system: body.lage === "facit" ? FACIT : REGLER,
        messages: [{ role: "user", content: bygg(body) }],
      }),
    });
    if (!r.ok) {
      const t = await r.text();
      return svar({ fel: "claude", status: r.status, detalj: t.slice(0, 300) }, 502, origin);
    }
    const data = await r.json();
    const text = (data.content || []).filter(c => c.type === "text").map(c => c.text).join("");
    try {
      return svar(tolka(text), 200, origin);
    } catch {
      const typer = (data.content || []).map(c => c.type).join(",");
      return svar({ fel: "oväntat svar", detalj: text.slice(0, 300), stopp: data.stop_reason, typer }, 502, origin);
    }
  },
};
