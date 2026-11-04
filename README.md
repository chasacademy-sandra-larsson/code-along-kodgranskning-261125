# Kodgranskning: AI:ns lösning på exempelprov 2

En AI har löst exempelprov 2. Lösningen ligger i en pull request. Din uppgift är att granska den, som om en kollega hade skickat den till dig.

Gör exempelprovet själv först, om du inte redan har gjort det: [fjs25-javascript-exempelprov-2](https://github.com/chasacademy-sandra-larsson/fjs25-javascript-exempelprov-2). Då vet du vad lösningen borde göra.

## Kom igång

1. Klicka på **Use this template**, kryssa i **Include all branches** och skapa ett repo på ditt eget konto. Utan krysset följer inte branchen `ai-losning` med.
2. Skapa en pull request från `ai-losning` till `main` i ditt repo.
3. Klona repot, checka ut `ai-losning` och kör koden: avmarkera en fråga i taget i `index.html` och öppna sidan med Live Server.

Det här är samma upplägg som på u05 den 10 december, så det är bra att ha gjort det en gång.

## Granska

Skriv kommentarer **på de rader det gäller** i pull requesten, med samma format som på workshoppen i v46: en etikett, och sedan vad, varför och hur.

```
issue (blocking): car2 = car kopierar inte objektet, båda pekar på samma.
När car2.speed ändras ändras car.speed också, så destructuringen i 2.2 ger 200 i stället för 100.
Använd spread: const car2 = { ...car, speed: 200 };
```

Etiketter: `praise`, `question`, `suggestion`, `issue` och `nitpick`, med `(blocking)` eller `(non-blocking)`.

## Särskilt för AI-genererad kod

- **Gröna bockar betyder ingenting.** Kommentarer som "✅ Robust lösning" är påståenden, inte bevis. Kör koden.
- **Testet räcker inte.** Koden kan logga rätt svar och ändå inte göra det uppgiften säger. Läs uppgiften igen, ord för ord.
- **Leta efter mutation.** Ändras något som skickas in, eller något utanför funktionen?
- **Kolla felhanteringen.** Vad händer om servern svarar 404? Får användaren veta något?
- **Kolla att det går att köra.** Importer, `type="module"`, och att det som importeras faktiskt exporteras.

## Avsluta

Skriv en **sammanfattande kommentar** på hela pull requesten: hur många poäng tror du att lösningen skulle få av 30, och vilka tre saker är viktigast att rätta?
