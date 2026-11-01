# Gastronomia Lusso

Astro-website voor Gastronomia Lusso, Italiaanse delicatessenzaak met twee
vestigingen in Den Haag (Vos in Tuinstraat en Theresiastraat). Gebouwd als
statische site op basis van de content en huisstijl van de bestaande
WordPress-site.

## Projectstructuur

```text
/
├── public/
│   ├── images/          # Logo, categorie- en locatiefoto's
│   └── videos/           # TikTok-video "top 25 lekkerste broodjes"
├── src/
│   ├── components/       # Herbruikbare secties (Header, Footer, Hero, ...)
│   ├── data/              # Menu's (menus.ts) en locaties (locations.ts)
│   ├── layouts/           # Layout.astro (basis HTML-skelet, fonts, meta)
│   ├── pages/
│   │   ├── index.astro               # Homepage
│   │   ├── menu/                     # Menu Vos in Tuinstraat
│   │   ├── menu-theresiastraat/      # Menu Theresiastraat
│   │   ├── over-ons/                 # Ons verhaal
│   │   └── contact/                  # Contactgegevens & locaties
│   └── styles/global.css  # Kleuren, typografie, basisstijlen
├── astro.config.mjs
└── package.json
```

Menu-items (prijzen, ingrediënten) staan centraal in `src/data/menus.ts`,
locatie- en openingstijdengegevens in `src/data/locations.ts`. Pas je iets
in het menu of de contactgegevens aan, dan hoeft dat maar op één plek.

## Commando's

Alle commando's worden uitgevoerd vanuit de projectmap:

| Commando                  | Actie                                              |
| :------------------------- | :-------------------------------------------------- |
| `npm install`               | Installeert dependencies                            |
| `npm run dev`                | Start lokale dev-server op `localhost:4321`          |
| `npm run build`              | Bouwt de productiesite naar `./dist/`                |
| `npm run preview`            | Bekijk de build lokaal, vóór deployen                |
| `npx astro check`            | Type-/diagnostiekcontrole van alle `.astro`-bestanden |

## Stijl & configuratie

- **Kleuren & fonts**: `src/styles/global.css` (CSS-variabelen), gebaseerd op
  de huisstijl van de bestaande site (goudgeel `#f5c61c`, Open Sans voor
  koppen, Work Sans voor body-tekst).
- **URL's**: `trailingSlash: 'always'` in `astro.config.mjs` — interne links
  eindigen altijd op `/`.
- **Build-output**: gebundelde assets komen in `dist/assets/` (ingesteld via
  `build.assets` in `astro.config.mjs`, in plaats van Astro's standaard
  `dist/_astro/`).

## Content-bronnen

Teksten, menu's, reviews en FAQ zijn overgenomen van de bestaande website
(traiteurlusso.nl). Social-links (Facebook, Instagram, TripAdvisor) en het
logo zijn eveneens van de live site afkomstig.
