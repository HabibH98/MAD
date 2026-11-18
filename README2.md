# Sprint 2 – Programmeren van de applicatie

### Project: Restaurant Reserveringsapp

**Keuzedeel:** Mobile Application Development

---

## Sprintinformatie

| **Onderdeel** | **Informatie** |
|---|---|
| **Sprint** | 2 |
| **Onderwerp** | Programmeren van de applicatie |
| **Begindatum** | 18-11-2026 |
| **Einddatum** | 25-11-2026 |

---

## 1. Sprintdoel

Het doel van Sprint 2 is om mijn restaurant-reserveringsapp verder te ontwikkelen met React Native en Expo.

Tijdens deze sprint wil ik werken aan de volgende onderdelen:

Home-scherm: een welkomstpagina waarop gebruikers informatie over het restaurant kunnen bekijken.

Menukaart: een pagina waarop gebruikers gerechten met beschrijvingen en prijzen kunnen bekijken.

Reserveringsformulier: een pagina waarop gebruikers hun naam, e-mailadres, datum, tijd en aantal personen kunnen invullen.

Navigatie: ervoor zorgen dat gebruikers gemakkelijk tussen de verschillende schermen kunnen wisselen.

Invoercontrole: controleren of alle velden correct zijn ingevuld, bijvoorbeeld of het e-mailadres geldig is en het aantal personen klopt.

Testen: de app regelmatig op mijn iPhone testen met Expo Go om fouten te ontdekken en op te lossen.

---

## 2. Takenlijst

### Al uitgevoerd

- [x] React Native en Expo instellen.
- [x] Een nieuw Expo-project aanmaken.
- [x] De projectstructuur bekijken.
- [x] De app starten op mijn iPhone met Expo Go.
- [x] Het Home-scherm programmeren.
- [x] De menukaart met gerechten programmeren.
- [x] Navigatie tussen de schermen toevoegen.
- [x] Een reserveringsformulier maken.
- [x] Controleren of alle invoervelden zijn ingevuld.
- [x] Een bevestigingsmelding tonen na het invullen van het formulier.

### Nog te doen

- [ ] **E-mailadres controleren:** controleren of de gebruiker een geldig e-mailadres invult, bijvoorbeeld `naam@gmail.com`. Als het e-mailadres niet klopt, moet er een foutmelding verschijnen.

- [ ] **Datum controleren:** controleren of de gebruiker een geldige datum invult en geen datum in het verleden kan gebruiken voor een reservering.

- [ ] **Tijd controleren:** controleren of de gebruiker een geldige tijd invult, bijvoorbeeld `18:30`, en of deze binnen de openingstijden van het restaurant valt.

- [ ] **Aantal personen controleren:** ervoor zorgen dat gebruikers alleen een aantal tussen 1 en 10 personen kunnen invullen.

- [ ] **Bevestigingsscherm maken:** een apart scherm maken waarop de gebruiker na het invullen van het formulier de reserveringsgegevens kan bekijken.

- [ ] **Nieuwsscherm maken:** een pagina toevoegen waarop gebruikers nieuws, aanbiedingen en updates van het restaurant kunnen bekijken.

- [ ] **Contactscherm maken:** een pagina toevoegen met het adres, telefoonnummer, e-mailadres en de locatie van het restaurant.

- [ ] **Vormgeving verbeteren:** zorgen dat alle schermen dezelfde kleuren, knoppen en tekststijlen gebruiken, zodat de app er netjes en overzichtelijk uitziet.

- [ ] **App testen:** alle schermen, knoppen en invoervelden op mijn iPhone testen en eventuele fouten oplossen.

- [ ] **Sprint 2 afronden:** controleren welke taken klaar zijn, mijn Trello-board en README bijwerken en een retrospectief schrijven in `RETRO2.md`.

---

## 3. Gebruikte technieken en hulpmiddelen

| **Techniek / hulpmiddel** | **Gebruik** |
|---|---|
| React Native | Mobiele schermen en onderdelen bouwen |
| Expo | De applicatie starten en testen |
| Expo Go | De app testen op mijn iPhone |
| Expo Router | Navigatie tussen schermen |
| TypeScript / TSX | Code schrijven voor de schermen |
| VS Code | Programmeren |
| Trello | Taken en voortgang bijhouden |

---

## 4. Opbouw van de applicatie

De applicatie bestaat momenteel uit drie werkende schermen.

| **Scherm** | **Bestand** | **Functie** |
|---|---|---|
| Home | `src/app/index.tsx` | Welkomstpagina met een knop naar de menukaart |
| Menukaart | `src/app/menu.tsx` | Gerechten met beschrijvingen en prijzen tonen |
| Reserveren | `src/app/reserveren.tsx` | Reserveringsgegevens invullen en controleren |

De navigatie is ingesteld in `src/components/app-tabs.tsx`.

---

## 5. Wat heb ik geprogrammeerd?

### Home-scherm

Ik heb een Home-scherm gemaakt met een welkomsttekst en een knop waarmee de gebruiker naar de menukaart kan gaan.

### Menukaart

Ik heb drie gerechten toegevoegd met een naam, beschrijving en prijs.

De gerechten staan in een array. Met `.map()` worden ze automatisch op het scherm weergegeven.

### Reserveringsformulier

Ik heb een formulier gemaakt waarin gebruikers hun naam, e-mailadres, datum, tijd en aantal personen kunnen invullen.

Met `useState` worden de ingevulde gegevens bijgehouden.

Wanneer iemand op de bevestigingsknop drukt, controleert de app of alle velden zijn ingevuld.

Als een veld leeg is, verschijnt een waarschuwing. Als alle velden zijn ingevuld, verschijnt een bevestigingsmelding.

De reserveringen worden op dit moment nog niet opgeslagen in een database.

### Navigatie

Ik heb de navigatie ingesteld met Expo Router en NativeTabs.

Hierdoor kunnen gebruikers wisselen tussen Home, Menukaart en Reserveren.

---

## 6. Problemen en oplossingen

Tijdens het programmeren ben ik verschillende problemen tegengekomen.

| **Probleem** | **Oplossing** |
|---|---|
| Expo startte niet goed | Ik heb gecontroleerd of ik in de juiste projectmap stond |
| De app laadde soms niet op mijn iPhone | Ik heb Expo opnieuw gestart |
| De menukaart werd niet geopend | Ik heb het tabblad toegevoegd aan `app-tabs.tsx` |
| Ik kende de projectstructuur nog niet goed | Ik heb onderzocht waarvoor de verschillende bestanden dienen |

---

## 7. Testen van de applicatie

Ik test mijn applicatie met Expo Go op mijn iPhone.

De volgende onderdelen heb ik al getest:

- [x] De app opent op mijn iPhone.
- [x] Het Home-scherm wordt weergegeven.
- [x] De menukaart toont drie gerechten.
- [x] De navigatie tussen de schermen werkt.
- [x] Het reserveringsformulier wordt weergegeven.
- [x] Bij lege invoervelden verschijnt een waarschuwing.
- [x] Bij ingevulde velden verschijnt een bevestigingsmelding.

Tijdens deze sprint ga ik ook controleren of gebruikers geldige gegevens invoeren.

---

## 8. Wat wil ik leren?

Tijdens Sprint 2 wil ik beter begrijpen:

- Hoe React Native-componenten werken.
- Hoe ik gegevens kan bewaren met `useState`.
- Hoe ik invoervelden kan controleren.
- Hoe navigatie met Expo Router werkt.
- Hoe ik fouten kan vinden en oplossen.
- Hoe ik mijn app kan verbeteren met een duidelijke vormgeving.

---

## 9. Verwacht resultaat

Aan het einde van Sprint 2 wil ik een werkende basisversie van mijn restaurant-reserveringsapp hebben.

De gebruiker moet door de verschillende schermen kunnen navigeren, gerechten kunnen bekijken en een reserveringsformulier kunnen invullen.

Ook wil ik dat het formulier controleert of de gegevens correct zijn ingevoerd.

---

## 10. Vooruitblik Sprint 3

In Sprint 3 wil ik mij richten op het verder testen en verbeteren van de applicatie.

Ik wil controleren of de functionaliteiten goed werken, fouten oplossen en onderzoeken hoe ik reserveringen daadwerkelijk kan opslaan.

Ook wil ik bekijken hoe ik de hardwarefuncties uit mijn Plan van Aanpak kan toevoegen, zoals de locatievoorziening van de telefoon.

---

## 11. Conclusie

Ik heb al een begin gemaakt met het programmeren van mijn restaurant-reserveringsapp.

De basis van de applicatie werkt op mijn iPhone. Het Home-scherm, de menukaart en het reserveringsformulier zijn gemaakt.

Tijdens Sprint 2 ga ik deze onderdelen verder verbeteren en nieuwe functionaliteiten toevoegen.

Mijn doel is om aan het einde van de sprint een stabiele en gebruiksvriendelijke basisversie te hebben.