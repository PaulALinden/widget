# Widget — Vite + React kassawidget

En liten, lättvikts React-widget byggd med Vite. Projektet innehåller en enkel kassaflödes-komponent (widget) med API-klient, komponenter för kort/checkout, state-hantering med `zustand` och Stripe-integration för betalningar.

## Snabb överblick

- Tech: React, Vite, TailwindCSS (installerad men konfiguration kan behövas), Zustand, Axios, Stripe
- Build: Vite
- Plats: projektets källkod ligger i `src/` med komponenter i `src/components/` och API-klient i `src/api/`.

## Komma igång (lokalt)

1. Installera beroenden:

   ```cmd
   npm install
   ```

2. Starta dev-servern:

   ```cmd
   npm run dev
   ```

3. Öppna webbläsaren på den URL Vite skriver ut (ofta <http://localhost:5173>).

4. Testa den verkliga widgeten (preview)

   ```cmd
   npm run build
   npm run preview
   ```
Kör en lokal preview av byggd produktion.
Använd detta för att testa widgeten exakt som den skulle köras i produktion.

## Viktiga scripts

I `package.json` finns dessa scripts:

- `dev` — startar Vite-devserver
- `build` — bygger produktionen med Vite
- `preview` — kör en lokal preview av byggutdata
- `lint` — kör ESLint över projektet

Kör dem med:

```cmd
npm run dev
npm run build
npm run preview
npm run lint
```

## Projektstruktur (viktigaste filer)

- `index.html` — root HTML för dev/build
- `src/main.jsx` — appens entry
- `src/App.jsx` — toppnivå-komponenten
- `src/widget.jsx` — widgetens huvudfil
- `src/components/` — återanvändbara komponenter (Card, PriceBar, Spinner, m.fl.)
- `src/api/` — klient och API-hantering (`client.js`, `productsApi.js`)
- `src/store/` — Zustand-store och konfiguration
- `src/utils/translations.js` — enkla hjälpfunktioner / översättningar
- `public/` — statiska filer (om några)

Använd dessa som utgångspunkt när du utökar funktionalitet.

## Miljö & integrationer

- Stripe är installerat via `@stripe/react-stripe-js` och `@stripe/stripe-js`. Se `src` för hur integrationen används.
- Axios används i `src/api` för att anropa backenden.
- Tailwind och FontAwesome finns i beroenden — kontrollera att du har Tailwind-konfigurationen om du planerar att använda dess utilities.

## Utvecklings- och kvalitetskontroller

- ESLint finns konfigurerat (kör `npm run lint`).
- Lägg till tester och CI om du vill säkerställa återkommande kvalitet.

## Deployment

1. Bygg för produktion:

   ```cmd
   npm run build
   ```

2. Servera innehållet i `dist/` med valfri statisk-server eller deploy-tjänst (Netlify, Vercel, Azure Static Web Apps, GitHub Pages med lämplig setup).

## Förbättringsförslag

### UI/UX

- Bättre feedback vid laddning och fel (ex. filuppladdning).
- Konsekvent färgtema, marginaler och typografi (globalt).
- Möjlighet att gå tillbaka och ändra tidigare val.
- Tydligare summering innan köp.

### Dataflöde

- Optimera state-hantering och async-funktioner.
- Lägg till `cart: []` i store och funktion för att spara val i varukorg.
- Spara varukorgen i localStorage.

### Övrigt

- Lägg till enhetstester för kritiska funktioner.
- Förbättra tillgänglighet (tabb-ordning, aria-labels).
- Säkerställ responsiv design för mobil och surfplatta.
- Dokumentera komponenter och dataflöde.

## Exempel på .env-fil

```env
VITE_API_URL=http://localhost:3001/api
VITE_CHECKOUT_URL=http://localhost:3001/api/checkout/create-session
VITE_STORE_ID=store_malmo
VITE_LANGUAGE=sv
```
