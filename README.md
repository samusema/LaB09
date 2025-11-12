# Pizzeria B09 - Sito Informativo

Sito statico moderno e responsive per la pizzeria "La B09" (ITI Othoca).

## 🍕 Descrizione

Sito web informativo completo per presentare la pizzeria, il menu, i piatti speciali e le informazioni di contatto. Il progetto è realizzato con HTML5, CSS3 e JavaScript vanilla (ES6+), senza dipendenze da framework esterni, seguendo le best practices di design e accessibilità.

## ✨ Caratteristiche

- **Hero Section Full Screen**: Immagine di sfondo a tutto schermo con logo e slogan
- **Scroll Fluido**: Animazioni smooth e transizioni moderne
- **Pagine Dettaglio Piatti**: Template dedicato per ogni portata del menu
- **Design Responsive**: Ottimizzato per desktop, tablet e mobile
- **Footer Informativo**: Mappa sito, contatti, orari e social links
- **CSS Consolidato**: Un unico file CSS per tutto il sito
- **Navigazione Intuitiva**: Top navbar con link alle sezioni principali

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
├── index.html                      # Homepage con hero e info boxes
├── assets/
│   ├── css/
│   │   └── style.css              # Stili globali consolidati (BEM)
│   ├── js/
│   │   └── script.js              # JavaScript principale
│   └── img/
│       ├── hero-bg.jpg            # Immagine hero background
│       ├── logo-icon.svg          # Logo pizzeria
│       ├── pizza-margherita.svg   # Immagine pizza Margherita
│       ├── pizza-funghi.svg       # Immagine pizza Funghi
│       └── user-avatar.svg        # Avatar icona
├── Pizze/
│   ├── pizzaMargherita.html       # Dettaglio Pizza Margherita
│   └── pizzaFunghi.html           # Dettaglio Pizza Funghi
├── Bevande/
│   └── portata.html               # Template bevande
├── Dolci/
│   └── portata.html               # Template dolci
├── Portate/
│   ├── Primi/
│   │   └── portata.html           # Template primi piatti
│   └── Secondi/
│       └── portata.html           # Template secondi piatti
└── README.md
```

## 🚀 Installazione e Utilizzo

### Requisiti
- Browser moderno (Chrome, Firefox, Safari, Edge)
- Server web locale (consigliato per path corretti)

### Installazione

1. **Clona il repository**
   ```bash
   git clone <repository-url>
   cd PizzeriaLa09
   ```

2. **Avvia un server locale**
   ```bash
   # Con Python
   python3 -m http.server 8000
   
   # Con Node.js e http-server
   npx http-server
   
   # Con PHP
   php -S localhost:8000
   ```

3. **Apri nel browser**
   - Vai su `http://localhost:8000`
   - Naviga tra le sezioni e le pagine dettaglio

## 🎯 Funzionalità

### Homepage (index.html)
- **Hero Section**: Full-screen con logo, slogan "PIZZA PERFECTION, PAZZI STYLE!" e bottone scroll
- **Info Boxes**: 4 box informativi modificabili (in linea singola)
- **Top Navbar**: Navigazione rapida (Home, Menu, Chi Siamo)
- **Footer Completo**: Site map, Find Us, Orari, Social Links

### Pagine Dettaglio Piatti
Ogni pagina piatto include:
- **Header Portata**: Nome piatto + prezzo
- **Immagine**: SVG personalizzata per ogni piatto
- **Descrizione Completa**: Storia e caratteristiche del piatto
- **Ingredienti**: Lista completa con icone
- **Allergeni**: Badge visuali per allergeni
- **Info Cards**: 3 box (Forno a Legna, Lievitazione 24h, Ingredienti Freschi)
- **Footer**: Identico alla homepage per coerenza

## 🛠️ Tecnologie Utilizzate

- **HTML5**: Markup semantico e accessibile
- **CSS3**: 
  - CSS Variables per temi
  - Flexbox e Grid Layout
  - Animazioni e transizioni fluide
  - BEM Methodology con prefissi per pagina
- **JavaScript ES6+**:
  - Vanilla JS (nessun framework)
  - Event Listeners
  - Intersection Observer API
  - Scroll Events smooth

## 📱 Responsive Design

Il design è completamente responsive e si adatta a:
- **Desktop (>1024px)**: Layout completo con elementi affiancati
- **Tablet (768-1024px)**: Layout adattivo con grid a 2 colonne
- **Mobile (<768px)**: Layout verticale ottimizzato

### Breakpoints Principali
```css
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px)  { /* Mobile */ }
@media (max-width: 480px)  { /* Small Mobile */ }
```

## 🎨 Convenzioni di Naming

### HTML/CSS
- **BEM (Block Element Modifier)**: `.block__element--modifier`
- **Prefissi per Pagina**: `.portata-nomeclasse`, `.homepage-nomeclasse`
- Esempi:
  - `.portata-header__title`
  - `.portata-details__container`
  - `.portata-extra-card__icon`
  - `.navbar__link`
  - `.footer__section`

### JavaScript
- **camelCase** per variabili: `isHeroScrolled`, `mainContent`
- **Prefisso verbale** per funzioni: `handleScroll()`, `scrollToContent()`
- **Costanti in UPPERCASE**: quando necessario

### File e Cartelle
- **PascalCase per categorie**: `Pizze/`, `Bevande/`, `Dolci/`
- **camelCase per file HTML**: `pizzaFunghi.html`, `pizzaMargherita.html`
- **kebab-case per assets**: `hero-bg.jpg`, `pizza-funghi.svg`

## 🔧 Personalizzazione

### Cambiare i Colori Brand
Modifica le CSS Variables in `assets/css/style.css`:

```css
:root {
    --color-primary: #d62828;      /* Rosso pizza */
    --color-secondary: #f77f00;    /* Arancio forno */
    --color-dark: #003049;         /* Blu scuro */
    --color-light: #fefae0;        /* Bianco panna */
}
```

### Aggiungere un Nuovo Piatto

1. **Crea il file HTML** nella cartella appropriata:
   ```bash
   # Esempio per una nuova pizza
   cp Pizze/pizzaFunghi.html Pizze/pizzaDiavola.html
   ```

2. **Modifica i contenuti**:
   - Nome piatto nel `<title>` e `.portata-header__title`
   - Prezzo in `.portata-header__price`
   - Descrizione in `.portata-details__text`
   - Lista ingredienti in `.portata-details__ingredients`
   - Allergeni in `.portata-details__allergens`

3. **Crea l'immagine SVG** (opzionale):
   ```bash
   # Salva in assets/img/
   assets/img/pizza-diavola.svg
   ```

4. **Collega l'immagine**:
   ```html
   <img src="../assets/img/pizza-diavola.svg" alt="Pizza Diavola">
   ```

### Modificare gli Info Boxes Homepage

In `index.html`, cerca la sezione `.info__boxes`:

```html
<div class="info-box">
    <div class="info-box__icon">
        <i class="fas fa-pizza-slice"></i> <!-- Cambia icona -->
    </div>
    <h3 class="info-box__title">Titolo Box</h3> <!-- Cambia titolo -->
    <p class="info-box__text">Descrizione...</p> <!-- Cambia testo -->
</div>
```

### Modificare Footer

In qualsiasi pagina HTML, modifica la sezione `<footer class="footer">`:

```html
<div class="footer__section">
    <h3 class="footer__heading">FIND US</h3>
    <ul class="footer__info">
        <li>Indirizzo Pizzeria</li>
        <li><a href="tel:+39...">Telefono</a></li>
        <li><a href="mailto:...">Email</a></li>
    </ul>
</div>
```

## 📝 Best Practices Seguite

### HTML
- ✅ Markup semantico (`<main>`, `<section>`, `<nav>`, `<footer>`)
- ✅ Meta tags per SEO e responsive
- ✅ Alt text per tutte le immagini
- ✅ Nessun CSS o JS inline

### CSS
- ✅ Un unico file consolidato (`style.css`)
- ✅ BEM methodology con prefissi per pagina
- ✅ CSS Variables per coerenza
- ✅ Mobile-first approach
- ✅ Commenti chiari per ogni sezione

### JavaScript
- ✅ Vanilla JS (no framework)
- ✅ Event delegation dove possibile
- ✅ Funzioni modulari e riutilizzabili
- ✅ Commenti descrittivi

### Accessibilità
- ✅ Contrasto minimo 4.5:1 (WCAG AA)
- ✅ Navigazione da tastiera funzionante
- ✅ Attributi ARIA dove necessario
- ✅ Focus visibile su elementi interattivi

## 🌐 Browser Support

- ✅ Chrome (ultime 2 versioni)
- ✅ Firefox (ultime 2 versioni)
- ✅ Safari (ultime 2 versioni)
- ✅ Edge (ultime 2 versioni)

## 🐛 Troubleshooting

### Le immagini non si vedono
- Verifica che il server locale sia attivo
- Controlla che i path siano corretti (es. `../assets/img/` per pagine in sottocartelle)
- Assicurati che i file SVG/JPG esistano nella cartella `assets/img/`

### Il CSS non viene applicato
- Verifica che `style.css` sia linkato correttamente
- Controlla la console del browser per errori 404
- Usa path relativi corretti in base alla posizione della pagina

### Gli scroll smooth non funzionano
- Verifica che il browser supporti `scroll-behavior: smooth`
- Controlla che `script.js` sia caricato correttamente
- Apri la console e cerca errori JavaScript

## 📄 Licenza

Questo progetto è proprietario di **Pizzeria B09 - ITI Othoca**.

## 👥 Autore

**La B09** - Pizzeria - 2025

---

**Made with ❤️ and 🍕 by ITI Othoca**

## 📞 Contatti

- **Indirizzo**: 154, avenue Montaigne, Paris
- **Telefono**: +39 07 98 89 09
- **Email**: contact@pizzab09.com

---

*"PIZZA PERFECTION, PAZZI STYLE!"* 🍕✨
