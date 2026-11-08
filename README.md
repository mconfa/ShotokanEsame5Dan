<p align="center">
  <img src="image/logo.png" alt="Palestra Club KB - Cambiago" width="180">
</p>

# ShotokanEsame5Dan 🥋

Schede interattive per la preparazione dell'esame di **Karate Shotokan 5° Dan** (programma FIKTA 2022).

L'app mostra una domanda alla volta: tocca la scheda per vedere la risposta, poi pesca una nuova
domanda a caso. Pensata per il ripasso di **Kihon** e **Kata** di tutti i passaggi di grado
precedenti al 5° Dan.

🔗 **Sito online:** https://mconfa.github.io/ShotokanEsame5Dan/

---

## Come si usa

- **Tocca la scheda** (o il bottone *Mostra risposta*) per rivelare la soluzione.
- **🎲 Nuova domanda casuale** per passare a un'altra scheda (non ripete mai la stessa due volte di fila).
- **Filtri**: per passaggio di grado (es. *dal 2° al 3° Dan*) e per tipo (*Kihon* / *Kata*).
- **Tastiera**: `Spazio` / `Invio` = mostra risposta · `→` oppure `N` = nuova domanda.

Funziona anche **offline**: basta aprire `index.html` con un doppio clic, senza installare nulla.

## Contenuto

- **42 schede** in totale:
  - **25 Kihon** — per ogni passaggio, tutte le combinazioni del passaggio numerato.
  - **17 Kata** — tutti con **video dimostrativo** incorporato.
- Passaggi coperti:
  - da cintura marrone (1° kyu) al 1° Dan
  - dal 1° al 2° Dan
  - dal 2° al 3° Dan
  - dal 3° al 4° Dan
  - dal 4° al 5° Dan

### Tipi di domanda

- **Kihon** → *"Del passaggio **dal 2° al 3° Dan**, dimmi il **4°** passaggio del Kihon."* → la risposta elenca tutte le combinazioni di quel passaggio.
- **Kata** → *"Del passaggio ..., esegui il kata **bassaidai**."* → la risposta mostra il video dimostrativo.

## File del progetto

| File | Descrizione |
|------|-------------|
| `index.html` | L'applicazione (interfaccia + logica). |
| `domande.js` | Tutti i dati delle schede (domande, risposte, video). Modificabile a mano. |
| `PROGRAMMA_ESAMI_DAN AGGIORNATO 2022.pdf` | Programma d'esame FIKTA di riferimento. |

## Aggiungere o modificare le domande

Apri `domande.js` e copia un blocco `{ ... }`, modificandolo (mantieni la virgola finale).

Campi disponibili per ogni scheda:

| Campo | Uso |
|-------|-----|
| `esame` | Passaggio di grado (i numeri *"N°"* vengono messi in grassetto). |
| `categoria` | `"Kihon"` oppure `"Kata"`. |
| `numero` | *(solo Kihon)* Numero del passaggio. |
| `partenza` | *(opzionale)* Nome del passaggio e/o posizione di partenza, es. `"shihogeri - shizentai heisoku dachi"`. |
| `soluzione` | Kihon: array di righe (le combinazioni) · Kata: stringa (vuota da riempire). |
| `nome` | *(solo Kata)* Nome del kata. |
| `video` | *(opzionale)* Link YouTube: viene incorporato nella risposta. |
| `domanda` | *(opzionale)* Testo della domanda già pronto (sovrascrive quello generato). |

Il campo `video` riconosce qualsiasi formato di link YouTube (`watch?v=`, `youtu.be/`,
`embed/`, `shorts/`).

---

## Crediti

<p align="center">
  <img src="image/logo.png" alt="Palestra Club KB - Cambiago" width="120">
</p>

I **video dimostrativi** e i **contenuti tecnici** sono a cura della
**Palestra Club KB di Cambiago** — 📷 Instagram: https://www.instagram.com/palestra_clubkb/

Questo progetto è solo uno strumento di ripasso personale che li raccoglie e organizza
secondo il programma d'esame FIKTA.
