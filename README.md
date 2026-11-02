# appar

Peters appar – https://appar.elisabethnorlanderkeramik.se

## Versioner

### Närmast vinner (`narmast/`)
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

Vid ny version: ändra versionsraden i `index.html` (kortet), `narmast/index.html` (startskärmen) och cachenamnet i `narmast/sw.js`, och lägg till en rad här.
