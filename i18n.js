// ─────────────────────────────────────────────
//  Mule Digital — i18n translation engine
//  Supports: en (English), fr (French), nl (Dutch)
//  Persists via localStorage key: "mule_lang"
//  "Mule" brand name is never translated.
// ─────────────────────────────────────────────

const TRANSLATIONS = {
  en: {
    // Nav
    "nav.about":    "About",
    "nav.services": "Services",
    "nav.pricing":  "Pricing",
    "nav.contact":  "Contact",
    "nav.cta":      "Start a project",
    // Hero
    "hero.sub":     "Digital solutions for real communities.<br>We build your presence. We tell your story.",
    "hero.learn":   "Learn more",
    "hero.students":"Students",
    "hero.scroll":  "Scroll",
    // Stats
    "stats.price":    "Website starting price",
    "stats.tiers":    "Subscription tiers",
    "stats.monthly":  "Monthly plan from",
    "stats.community":"Community focused",
    // About
    "about.tag":     "Who we are",
    "about.heading": "Every business has a story.<br>We make sure it&#39;s <em>heard.</em>",
    // Services
    "services.tag":     "What we do",
    "services.heading": "Everything your business needs to own the web.",
    // Clients
    "clients.tag": "Previous work",
    // Quote
    "quote.text": "We don&#39;t just build brands.<br>We build <em>voices.</em>",
    // Pricing
    "pricing.heading":    "Simple. Transparent.<br>Built for real budgets.",
    "pricing.onetime":    "One-time projects",
    "pricing.monthly":    "Monthly subscriptions",
    "pricing.ot1label":   "Standard Website",
    "pricing.ot2label":   "Advanced Build",
    "pricing.getstarted": "Get started",
    // Contact
    "contact.tag":     "Let's talk",
    "contact.heading": "Ready to be<br><em style=\"font-style:italic;color:var(--accent)\">heard?</em>",
    "contact.note":    "Drop us a line for a free 30-minute discovery call. No pressure. Just a real conversation about your business and your story.",
    "contact.loc":     "Available Worldwide",
  },

  fr: {
    // Nav
    "nav.about":    "À propos",
    "nav.services": "Services",
    "nav.pricing":  "Tarifs",
    "nav.contact":  "Contact",
    "nav.cta":      "Démarrer un projet",
    // Hero
    "hero.sub":     "Solutions numériques pour les vraies communautés.<br>On bâtit votre présence. On raconte votre histoire.",
    "hero.learn":   "En savoir plus",
    "hero.students":"Étudiants",
    "hero.scroll":  "Défiler",
    // Stats
    "stats.price":    "Prix de départ site web",
    "stats.tiers":    "Forfaits d'abonnement",
    "stats.monthly":  "Forfait mensuel à partir de",
    "stats.community":"Axé sur la communauté",
    // About
    "about.tag":     "Qui sommes-nous",
    "about.heading": "Chaque entreprise a une histoire.<br>On s&#39;assure qu&#39;elle soit <em>entendue.</em>",
    // Services
    "services.tag":     "Ce que nous faisons",
    "services.heading": "Tout ce dont votre entreprise a besoin pour dominer le web.",
    // Clients
    "clients.tag": "Travaux précédents",
    // Quote
    "quote.text": "On ne construit pas seulement des marques.<br>On construit des <em>voix.</em>",
    // Pricing
    "pricing.heading":    "Simple. Transparent.<br>Conçu pour de vrais budgets.",
    "pricing.onetime":    "Projets ponctuels",
    "pricing.monthly":    "Abonnements mensuels",
    "pricing.ot1label":   "Site Web Standard",
    "pricing.ot2label":   "Développement Avancé",
    "pricing.getstarted": "Commencer",
    // Contact
    "contact.tag":     "Parlons-en",
    "contact.heading": "Prêt à être<br><em style=\"font-style:italic;color:var(--accent)\">entendu&#160;?</em>",
    "contact.note":    "Envoyez-nous un message pour un appel découverte gratuit de 30 minutes. Sans pression. Juste une vraie conversation sur votre entreprise et votre histoire.",
    "contact.loc":     "Disponible dans le monde entier",
  },

  nl: {
    // Nav
    "nav.about":    "Over ons",
    "nav.services": "Diensten",
    "nav.pricing":  "Prijzen",
    "nav.contact":  "Contact",
    "nav.cta":      "Start een project",
    // Hero
    "hero.sub":     "Digitale oplossingen voor echte gemeenschappen.<br>Wij bouwen uw aanwezigheid. Wij vertellen uw verhaal.",
    "hero.learn":   "Meer weten",
    "hero.students":"Studenten",
    "hero.scroll":  "Scrollen",
    // Stats
    "stats.price":    "Startprijs website",
    "stats.tiers":    "Abonnementen",
    "stats.monthly":  "Maandplan vanaf",
    "stats.community":"Gemeenschapsgericht",
    // About
    "about.tag":     "Wie wij zijn",
    "about.heading": "Elk bedrijf heeft een verhaal.<br>Wij zorgen dat het <em>gehoord</em> wordt.",
    // Services
    "services.tag":     "Wat wij doen",
    "services.heading": "Alles wat uw bedrijf nodig heeft om het web te domineren.",
    // Clients
    "clients.tag": "Eerder werk",
    // Quote
    "quote.text": "Wij bouwen niet alleen merken.<br>Wij bouwen <em>stemmen.</em>",
    // Pricing
    "pricing.heading":    "Eenvoudig. Transparant.<br>Gebouwd voor echte budgetten.",
    "pricing.onetime":    "Eenmalige projecten",
    "pricing.monthly":    "Maandelijkse abonnementen",
    "pricing.ot1label":   "Standaard Website",
    "pricing.ot2label":   "Geavanceerde Ontwikkeling",
    "pricing.getstarted": "Aan de slag",
    // Contact
    "contact.tag":     "Laten we praten",
    "contact.heading": "Klaar om<br><em style=\"font-style:italic;color:var(--accent)\">gehoord</em> te worden?",
    "contact.note":    "Stuur ons een bericht voor een gratis ontdekkingsgesprek van 30 minuten. Geen druk. Gewoon een echt gesprek over uw bedrijf en uw verhaal.",
    "contact.loc":     "Wereldwijd beschikbaar",
  }
};

// ─── Engine ───────────────────────────────────
(function () {
  const STORAGE_KEY = 'mule_lang';
  const SUPPORTED = ['en', 'fr', 'nl'];
  const LABELS = { en: 'EN', fr: 'FR', nl: 'NL' };

  function getSavedLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(saved) ? saved : 'en';
  }

  function applyLang(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;

    // Plain text nodes (data-i18n)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // HTML content (data-i18n-html) — for markup like <em>, <br>
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Update lang button label
    const btn = document.getElementById('langBtn');
    if (btn) btn.textContent = LABELS[lang];

    // Mark active option
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // Set html lang attribute
    document.documentElement.lang = lang;
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
    // Close dropdown
    const dd = document.getElementById('langDropdown');
    if (dd) dd.classList.remove('open');
  }

  function initSwitcher() {
    const btn = document.getElementById('langBtn');
    const dropdown = document.getElementById('langDropdown');
    if (!btn || !dropdown) return;

    // Toggle dropdown
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });

    // Option click
    dropdown.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', () => setLang(opt.dataset.lang));
    });

    // Close on outside click
    document.addEventListener('click', () => dropdown.classList.remove('open'));
    dropdown.addEventListener('click', e => e.stopPropagation());
  }

  // Run on DOM ready
  function init() {
    initSwitcher();
    applyLang(getSavedLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
