# appar

Peters appar – https://peter.ekvardt.se

## Versioner

### I gränslandet (`granslandet/`)
- **1.0** – 3 november 2026. Första versionen: kortlek med konturen av ett land, län eller en delstat. Vänd kortet så zoomar kartan ut och grannarna fylls i ett i taget med namn och antal. Lägen: hela världen (102 länder), en världsdel, Sveriges 21 län och USA:s 50 delstater. Bara landgränser räknas, med förklarande noter för specialfall. Startmeny med Byt spel och rätt/fel-räkning per omgång.

Vid ny version: ändra versionsraden i `index.html` (kortet), `granslandet/index.html` (startmenyn) och cachenamnet i `granslandet/sw.js`, och lägg till en rad här.

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

Vid ny version: ändra versionsraden i `index.html` (kortet), `narmast/index.html` (startskärmen) och cachenamnet i `narmast/sw.js`, och lägg till en rad här.

### Huvudstaden (`huvudstaden/`)
- **1.1** – 3 november 2026. Mikrofonknappen ligger kvar på varje kort även om taligenkänningen nekas en gång.
- **1.0** – 3 november 2026. Första versionen: ett land visas på kartan, spelaren säger (svensk taligenkänning) eller skriver huvudstaden och sätter en nål där den ligger. 50 poäng för rätt namn (små stavfel godkänns), upp till 50 för nålen räknat efter landets storlek. 165 länder, hela världen eller en världsdel. Länder med flera huvudstäder godkänner alla, med förklarande noter.

Vid ny version: ändra versionsraden i `index.html` (kortet), `huvudstaden/index.html` (startmenyn) och cachenamnet i `huvudstaden/sw.js`, och lägg till en rad här.
