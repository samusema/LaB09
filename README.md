<<<<<<< HEAD
# Pizzeria B09 - Dashboard Amministrativa

Dashboard moderna e responsive per la gestione della pizzeria "Pizzeria B09".

## 🍕 Descrizione

Dashboard amministrativa completa per gestire ordini, menu, clienti e statistiche di vendita. Il progetto è realizzato con HTML5, CSS3 e JavaScript vanilla (ES6+), senza dipendenze da framework esterni.

## ✨ Caratteristiche

- **Hero Section Full Screen**: Immagine di sfondo a tutto schermo che si sposta verso l'alto con lo scroll
- **Dashboard Completa**: Panoramica con statistiche in tempo reale
- **Gestione Ordini**: Visualizza e filtra gli ordini per stato
- **Gestione Menu**: Aggiungi, modifica ed elimina prodotti dal menu
- **Design Responsive**: Ottimizzato per desktop, tablet e mobile
- **Animazioni Fluide**: Transizioni e animazioni moderne
- **Sidebar Navigabile**: Menu laterale con navigazione tra sezioni

## 🎨 Design

### Colori Brand
- **Rosso Pizza**: `#d62828`
- **Arancio Forno**: `#f77f00`
- **Blu Scuro**: `#003049`
- **Bianco Panna**: `#fefae0`

### Tipografia
- Font principale: **Poppins** (400, 500, 700)
- Icone: **Font Awesome 6.4.0**

## 📁 Struttura del Progetto

```
PizzeriaLa09/
├── index.html                 # File HTML principale
├── assets/
│   ├── css/
│   │   └── style.css         # Stili globali (BEM methodology)
│   ├── js/
│   │   └── script.js         # JavaScript principale
│   └── img/
│       ├── hero-bg.jpg       # Immagine hero (da sostituire con la tua)
│       ├── logo-icon.svg     # Logo pizzeria
│       ├── user-avatar.svg   # Avatar utente
│       └── pizza-margherita.svg # Immagine pizza esempio
└── README.md
```

## 🚀 Installazione e Utilizzo

### Requisiti
- Browser moderno (Chrome, Firefox, Safari, Edge)
- Server web locale (opzionale, ma consigliato)

### Installazione

1. **Clona il repository**
   ```bash
   git clone <repository-url>
   cd PizzeriaLa09
   ```

2. **Sostituisci l'immagine hero**
   - Sostituisci il file `assets/img/hero-bg.jpg` con la tua immagine
   - Dimensioni consigliate: 1920x1080px o superiori
   - Formato: JPG, PNG o WebP

3. **Avvia un server locale** (opzionale ma consigliato)
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js e http-server
   npx http-server
   
   # Con PHP
   php -S localhost:8000
   ```

4. **Apri nel browser**
   - Vai su `http://localhost:8000`
   - Oppure apri direttamente `index.html` nel browser

## 🎯 Funzionalità

### Hero Section
- **Scroll to Content**: Clicca sul bottone con la freccia per scorrere alla dashboard
- **Effetto Parallax**: L'immagine di sfondo si muove con lo scroll

### Dashboard
- **Statistiche in Tempo Reale**: Visualizza incassi, ordini, pizze vendute
- **Ordini Recenti**: Vedi gli ultimi ordini con stato e importo
- **Pizze Più Vendute**: Classifica delle pizze più popolari

### Gestione Ordini
- **Filtri**: Filtra per tutti, in preparazione, pronti, consegnati
- **Ricerca**: Cerca ordini per ID o cliente
- **Tabella Interattiva**: Visualizza tutti i dettagli degli ordini

### Gestione Menu
- **Visualizza Prodotti**: Vedi tutti i prodotti del menu
- **Aggiungi**: Aggiungi nuovi prodotti (UI mock)
- **Modifica/Elimina**: Modifica o rimuovi prodotti (UI mock)

### Sidebar Navigation
- **Navigazione Veloce**: Passa rapidamente tra le sezioni
- **Mobile Friendly**: Menu a scomparsa su dispositivi mobili
- **Indicatore Attivo**: Mostra la sezione corrente

## 🛠️ Tecnologie Utilizzate

- **HTML5**: Markup semantico e accessibile
- **CSS3**: 
  - CSS Variables per temi
  - Flexbox e Grid Layout
  - Animazioni e transizioni
  - BEM Methodology
- **JavaScript ES6+**:
  - Vanilla JS (nessun framework)
  - Event Listeners
  - Intersection Observer API
  - Scroll Events

## 📱 Responsive Design

Il design è completamente responsive e si adatta a:
- **Desktop**: Layout completo con sidebar fissa
- **Tablet**: Layout adattivo con sidebar a scomparsa
- **Mobile**: Layout ottimizzato con menu hamburger

## 🎨 Convenzioni di Naming

### HTML/CSS
- **BEM (Block Element Modifier)**: `.block__element--modifier`
- Esempi:
  - `.sidebar__item--active`
  - `.stat-card__icon`
  - `.order-item__status--preparing`

### JavaScript
- **camelCase** per variabili: `isHeroScrolled`, `mainContent`
- **Prefisso verbale** per funzioni: `toggleSidebar()`, `handleScroll()`
- **Costanti in UPPERCASE**: (quando necessario)

## 🔧 Personalizzazione

### Cambiare i Colori
Modifica le CSS Variables in `assets/css/style.css`:

```css
:root {
    --color-primary: #d62828;
    --color-secondary: #f77f00;
    --color-dark: #003049;
    --color-light: #fefae0;
}
```

### Aggiungere Nuove Sezioni
1. Aggiungi la sezione nell'HTML con classe `.content-section`
2. Aggiungi il link nella sidebar con `data-section="nome-sezione"`
3. Il JavaScript gestirà automaticamente la navigazione

### Modificare le Animazioni
Modifica i timing in `assets/css/style.css`:

```css
:root {
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
}
```

## 📝 Note per lo Sviluppo

- **Nessun CSS inline**: Tutti gli stili sono nel file CSS
- **Nessun JS inline**: Tutto il JavaScript è nel file JS
- **Commenti chiari**: Ogni sezione è ben commentata
- **Codice modulare**: Funzioni separate per ogni responsabilità
- **Accessibilità**: Testo alternativo, navigazione da tastiera, contrasto ottimale

## 🌐 Browser Support

- Chrome (ultime 2 versioni)
- Firefox (ultime 2 versioni)
- Safari (ultime 2 versioni)
- Edge (ultime 2 versioni)

## 📄 Licenza

Questo progetto è proprietario di Pizzeria B09.

## 👥 Autore

Pizzeria B09 Dashboard - 2023

---

**Made with ❤️ and 🍕 by Pizzeria B09**
=======
# La B09
>>>>>>> 96014a89a36efb177944dd21a130e4ea988b95be
