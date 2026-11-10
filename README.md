# appar

Peters appar – https://peter.ekvardt.se

## Så jobbar vi

**Startsidan** (`index.html`) läser allt om apparna från `appar.json`: namn, beskrivning, version, kategori och raderna i Senaste nytt. En ny app eller ny version ändras där, inte i sidans kod.

**`/ny/` är utvecklingsversionen.** Den har egen `ny/index.html` och `ny/appar.json`, en gul rad överst och är dold för sökmotorer. När den är klar kopieras den till huvudsidan, utan den gula raden och utan `noindex`.

**`/spelbordet/` är ett prov av ny förstasida ("verkstaden").** En kopia av startsidan där toppen är en arbetsbänk med ett föremål per app; föremålen ritas i `SAKER` i sidans skript, namn och texter läses från `/appar.json`. En app utan eget föremål visas med sin ikon. Dold för sökmotorer. Tas bort eller flyttas till startsidan när Peter bestämt sig.

### Småfix eller större ändring?

**Småfix – direkt i drift:**
- rätta fel: stavning, en felaktig uppgift, ett land som inte fungerar
- justera färger, texter och beskrivningar
- lägga till eller ta bort enstaka poster i ett spel
- uppdatera `appar.json` (versioner, Senaste nytt)

Gemensamt: ändrar inte hur man spelar och går att ångra på en minut.

**Större ändring – via `/ny/` först:**
- ny app eller nytt spel
- ny design eller ny struktur på startsidan
- ändrade spelregler, poängräkning eller nya funktioner
- allt som rör det som sparas i telefonen (t.ex. Americanos resultat)

För ett spel görs en provkopia, t.ex. `/ny/huvudstaden/`, som provspelas innan den ersätter originalet.

**Alltid:** versionsnumret räknas upp. Är Claude osäker på om något är ett småfix eller en större ändring frågar Claude Peter innan.

## Versioner

### Musikquiz 70–90 (`ny/musikquiz/`, provkopia)
- **1.0 (prov)** – 8 november 2026. Första versionen: alla spelar tillsammans. Spotify spelar spellistan "Musikquiz 70-90 Talets Hits" på telefonen som ligger med skärmen nedåt; musiken styrs med Siri, "Hey Google" på en Google-högtalare eller högtalarens knappar. På paddan bockar man av Rätt artist och Rätt titel, poängen räknas gemensamt ("14 av 20") och varje låt visas som en ruta. Facit: vänd på telefonen. Förberett för inbyggt facit via listan `TRACKS` i spelordning.

### Sant eller falskt (`sant/`)
- **1.0** – 8 november 2026. Första versionen, direkt i drift efter provspelning hemma: dragkamp för två lag på en skärm. Vänster lag låser sitt svar dolt, sedan svarar höger lag. Repet flyttas ett steg mot laget som hade rätt när det andra hade fel; tre steg vinner. 87 påståenden (40 sanna, 47 falska) med förklaring, varav 17 vanliga myter.

### Glenn läser Göteborgsvitsar (`ny/glenn/`, provkopia)
- **1.0 (prov)** – 5 november 2026. Första versionen: en vits i taget läses upp med telefonens svenska röst – frågan, kort paus, poängen (eller gissa först och tryck fram poängen). Stönmätare (Haha/Hmm/Åh nej), favoriter, egna vitsar och möjlighet att gömma vitsar, allt sparat i telefonen. 80 vitsar. Förberedd för inspelningar: lägg `ljud/<id>-f.mp3` och `ljud/<id>-s.mp3` och skriv id:t i `INSPELADE`.

### Floder och sjöar (`floder/`)
- **1.0** – 3 november 2026. Flyttad från `/ny/floder/` till huvudsidan.
- **1.0 (prov)** – 3 november 2026. Första versionen: en flod, älv eller sjö lyses upp på kartan och man säger eller skriver namnet. 143 floder och sjöar (Natural Earth 1:10m, förenklade): Sverige 40, Europa 38, Afrika 16, Asien och Oceanien 24, Amerika 25. Kortlekar Sverige, Hela världen (utom Sverige) och världsdelar, filter för bara floder eller bara sjöar, nivåerna Lätt och Svår. Tio kort per omgång, ledtråd som visar en bokstav i taget, röstinmatning som i Huvudstaden. Data byggs med ett Python-skript från Natural Earth och ligger inbäddad i sidan.

### Människokroppen (`ny/manniskokroppen/`, provkopia)
- **1.0 (prov)** – 3 november 2026. Första versionen: ett latinskt namn visas och man trycker där delen sitter på en kropp framifrån. System: skelett, muskler, organ och blodkärl (bara det aktuella systemet visas). Nivåer: Lätt, Svår och Supersvår (anatomiska punkter som Spina iliaca anterior superior). Läget Lär dig. Ska provas av någon medicinskt kunnig innan den flyttas till `/manniskokroppen/`.

### I gränslandet (`granslandet/`)
- **1.0** – 3 november 2026. Första versionen: kortlek med konturen av ett land, län eller en delstat. Vänd kortet så zoomar kartan ut och grannarna fylls i ett i taget med namn och antal. Lägen: hela världen (102 länder), en världsdel, Sveriges 21 län och USA:s 50 delstater. Bara landgränser räknas, med förklarande noter för specialfall. Startmeny med Byt spel och rätt/fel-räkning per omgång.

Vid ny version: ändra versionen i `appar.json` och `ny/appar.json`, `granslandet/index.html` (startmenyn) och cachenamnet i `granslandet/sw.js`, och lägg till en rad här.

### Närmast vinner (`narmast/`)
- **2.8** – 3 november 2026. Antal frågor 3, 5 eller 10 (5 förvalt). Röd börjar alltid varje fråga när man delar en telefon.
- **2.7** – 2 november 2026. Sverigekartan utökad från 51 till 160 platser (alla residensstäder, mellanstora orter, Gotland, Öland, fjäll, skärgård och kända platser). Bildläget för Sverige har nu 65 platser.
- **2.6** – 2 november 2026. Ljus karta är nu standard, den mörka är borttagen. Länsgränser (prickade) på Sverigekartan, bara gränserna mellan län, inte kusten.
- **2.5** – 2 november 2026. Nytt val Kartstil: Mörk karta eller Ljus karta (atlasstil med beige land, ljusblått vatten och tydliga gränser). Väljs på startskärmen eller med ◐-knappen på kartan; sparas per telefon. Den gula ringen för rätt svar har fått mörk kant så att den syns på båda.
- **2.4** – 2 november 2026. Ljusare land och mörka, lite tjockare streckade landsgränser för bättre kontrast. Älvarna en aning ljusare så att de syns lika bra på det ljusare landet.
- **2.3** – 2 november 2026. Gemensamt väntrum: bara en telefon skapar spelet och styr. Karta, ledtråd och antal frågor väljs i väntrummet och syns live på den andra telefonen, som inte kan ändra något. Spelet startar när den som styr trycker Starta spelet. Efter en match går båda tillbaka till väntrummet.
- **2.2** – 2 november 2026. Tvåtelefonsläget omgjort: telefonen som startar bestämmer över spelet och skickar hela läget till den andra efter varje händelse och var fjärde sekund, så telefonerna kan inte glida isär. Kontrollampa "Kopplad/Ingen kontakt" och koden visas i resultattavlan. Versionskontroll mellan telefonerna. Gamla kopplingar stängs när man startar eller går med på nytt.
- **2.1** – 2 november 2026. Platser upprepas inte mellan omgångar: spelet minns vilka platser som spelats (per karta) och tar osedda först. Knappen "Skicka inbjudan" skickar en länk med koden via sms/WhatsApp; den som öppnar länken har koden ifylld och trycker bara Gå med.
- **2.0** – 2 november 2026. Spelsätt "Två telefoner": den ena startar och får en fyrställig kod, den andra går med via koden. Båda gissar samtidigt på sin egen skärm, resultat och poäng visas på båda. Kopplingen går direkt mellan telefonerna (PeerJS). Tappas kontakten kan man ansluta igen och fortsätta. Bara telefonen som startade läser upp resultatet.
- **1.7** – 2 november 2026. Namnrutorna töms när man trycker i dem. Skriver man inget kommer det gamla namnet tillbaka.
- **1.6** – 2 november 2026. Rösten säger bara vem som var närmast och hur långt ifrån. Val av röst på startskärmen med testknapp; spelet väljer automatiskt den bästa svenska rösten (Premium/Förbättrad) om den finns i telefonen.
- **1.5** – 2 november 2026. Speakerröst (telefonens svenska talsyntes) som läser upp vem som var närmast och hur många kilometer det skilde, med lagens namn. Kan stängas av på startskärmen eller med högtalarknappen på kartan.
- **1.4** – 2 november 2026. Symbolerna ersatta med symboliska bilder (en byggnad, staty eller sak per ort, inga översiktsbilder) från Wikipedia, svenska Wikipedia för svenska orter. Nya platser: Stockholm, Göteborg, Malmö, Uppsala, Lund, Helsingborg, Gävle, Örebro, Läckö slott, Trollhättan, Varberg, Ölands södra udde, Bergs slussar, Drottningholm, Mariefred, Kebnekaise, Paris, London, Rom, Pisa, Barcelona, Berlin, Köpenhamn, Oslo, Bryssel, Moskva, Wien, New York, Sydney, Agra, Peking, San Francisco.
- **1.3** – 2 november 2026. Bildledtrådarna ersatta med symboler (emojis) som är typiska för orten, med förklaring när svaret visas. Kartan har nu sjöar, älvar, landgränser och mer detaljerade kuster (Natural Earth). I Europa och Sverige laddas även mindre sjöar.
- **1.2** – 2 november 2026. Nytt val "Ledtråd": Namn, Bild eller Blandat. I bildläget visas en bild från Wikipedia på något typiskt för platsen i stället för namnet. Hittas ingen bild visas namnet.
- **1.1** – 2 november 2026. Kan zooma mycket närmare (ca 9 ggr mer). Avstånden visas i en ruta i hörnet i stället för vid pilarna, pilarna har en prick i spetsen och lagen märks 1 och 2 om namnen börjar på samma bokstav.
- **1.0** – 2 november 2026. Första versionen: två lag, kartor för Europa, Sverige och Världen, 5/10/15 frågor, dold pil vid delad telefon.

Vid ny version: ändra versionen i `appar.json` och `ny/appar.json`, `narmast/index.html` (startskärmen) och cachenamnet i `narmast/sw.js`, och lägg till en rad här.

### Huvudstaden (`huvudstaden/`)
- **1.4 (prov, i `/ny/huvudstaden/`)** – 3 november 2026. Liggande layout: kartan till vänster, frågan och svaret till höger, större text. För telefon på tvären, iPad, dator och tv via skärmdelning. Stående läge oförändrat.
- **1.3** – 3 november 2026. Liechtenstein, Andorra och Malta borttagna – för små för att träffa med nålen. 162 länder.
- **1.2** – 3 november 2026. Havet på kartan är ljusblått i stället för vitt, och landet lite ljusare så att land och hav skiljer sig tydligt.
- **1.1** – 3 november 2026. Mikrofonknappen ligger kvar på varje kort även om taligenkänningen nekas en gång.
- **1.0** – 3 november 2026. Första versionen: ett land visas på kartan, spelaren säger (svensk taligenkänning) eller skriver huvudstaden och sätter en nål där den ligger. 50 poäng för rätt namn (små stavfel godkänns), upp till 50 för nålen räknat efter landets storlek. 165 länder, hela världen eller en världsdel. Länder med flera huvudstäder godkänner alla, med förklarande noter.

Vid ny version: ändra versionen i `appar.json` och `ny/appar.json`, `huvudstaden/index.html` (startmenyn) och cachenamnet i `huvudstaden/sw.js`, och lägg till en rad här.
