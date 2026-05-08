# Starter Template React + Vite

Questo repository è uno starter template per creare nuovi progetti React con Vite in modo veloce, ordinato e coerente. L'idea è semplice: invece di rifare ogni volta scaffolding, pulizia del boilerplate e organizzazione iniziale, si parte da una base già pronta.

## Come usare il template

Per creare un nuovo progetto a partire da questo repository usa questo comando:

```bash
pnpm dlx tiged classe154/react-starter-template nuovo-progetto
```

Poi entra nella cartella del progetto, installa le dipendenze e avvia il server di sviluppo:

```bash
cd nuovo-progetto
pnpm install
pnpm dev
```

## Perché usare uno starter template

Uno starter template aiuta a:

- partire più velocemente;
- avere sempre la stessa struttura iniziale;
- evitare di cancellare ogni volta i file demo di Vite;
- lavorare in modo più ordinato durante esercizi e progetti.

## Bootstrap già incluso

Nel template è già installato e configurato **Bootstrap 5.3.8**. Sia il CSS sia il bundle JS (con Popper) sono importati in `src/main.jsx`, quindi tutte le classi e i componenti di Bootstrap sono disponibili da subito senza dover aggiungere nulla.

## Struttura di base consigliata

```txt
src/
├── assets/
├── components/
├── utils/
├── styles/
├── App.jsx
└── main.jsx
```

Questa struttura è abbastanza semplice per iniziare, ma anche abbastanza ordinata da poter crescere insieme al progetto.

## Perché lasciare `React.StrictMode`

In questo starter `React.StrictMode` resta attivo di default.

La ragione principale è che aiuta React a scovare componenti non puri, cioè componenti che durante il rendering fanno cose che non dovrebbero fare. Inoltre aiuta anche a far emergere errori di cleanup che vedremo più avanti quando studieremo `useEffect`.

Quindi, anche se all'inizio può sembrare un dettaglio in più, in realtà è utile perché ci abitua da subito a scrivere componenti più corretti e più sicuri.

## Esempio di `main.jsx`

```jsx
// src/main.jsx
// Questo è il punto di ingresso dell'app React.
// StrictMode resta attivo perché aiuta a trovare
// componenti non puri e problemi che saranno utili da capire meglio più avanti.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./styles/index.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

## Nota didattica

Per ora non è necessario conoscere tutti i dettagli tecnici di `StrictMode`. In questa fase basta sapere che è uno strumento utile di controllo durante lo sviluppo e che ci aiuterà a capire meglio alcuni concetti React quando affronteremo argomenti più avanzati.