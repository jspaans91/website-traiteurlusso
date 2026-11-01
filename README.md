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

## Content-Security-Policy

De site laadt geen inline scripts of stijlen: Astro-componentscripts en
scoped CSS worden via `astro.config.mjs` (`build.inlineStylesheets: 'never'`
en `vite.build.assetsInlineLimit: 0`) altijd als losse bestanden gebundeld in
plaats van inline in de HTML. Daardoor kan de CSP zonder `'unsafe-inline'`
voor `script-src` en `style-src`.

```
Content-Security-Policy: default-src 'none'; base-uri 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self'; media-src 'self'; connect-src 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'; upgrade-insecure-requests
```

Toelichting per directive:

| Directive          | Waarde(n)                          | Waarom                                                        |
| :------------------ | :----------------------------------- | :--------------------------------------------------------------- |
| `default-src`        | `'none'`                             | Alles dicht; elke andere directive staat expliciet open wat nodig is. |
| `script-src`          | `'self'`                             | Alle JS komt uit `dist/assets/`, zelfde origin. Geen inline/`unsafe-inline`. |
| `style-src`           | `'self' fonts.googleapis.com`        | Eigen CSS-bestanden + de Google Fonts-stylesheet uit `Layout.astro`. |
| `font-src`            | `'self' fonts.gstatic.com`           | Lettertypebestanden die de Google Fonts-stylesheet ophaalt.      |
| `img-src`             | `'self'`                             | Alle afbeeldingen zijn lokale, geoptimaliseerde assets.          |
| `media-src`           | `'self'`                             | De video in `VideoHighlight.astro`.                               |
| `connect-src`         | `'self'`                             | Geen externe API's/analytics; alleen same-origin reserveren.     |
| `form-action`         | `'self'`                             | Geen formulieren die naar een extern domein posten.               |
| `frame-ancestors`     | `'none'`                             | Voorkomt dat de site in een `<iframe>` elders wordt ingeladen (clickjacking). |
| `object-src`          | `'none'`                             | Blokkeert `<object>`/`<embed>` (Flash-achtige vectoren), niet gebruikt. |
| `upgrade-insecure-requests` | —                              | Dwingt `http:`-verzoeken naar `https:`.                            |

**Toepassen op Bunny.net**: Storage Zones serveren statische bestanden zonder
dat je zelf response-headers kunt meegeven. Stel de header daarom in op de
**Pull Zone** die ervoor staat, via *Edge Rules → Add Edge Rule → Set Response
Header* (naam `Content-Security-Policy`, waarde zoals hierboven, als één
regel zonder newlines). Een `<meta http-equiv="Content-Security-Policy">` in
`Layout.astro` werkt als fallback, maar negeert directives als
`frame-ancestors` — gebruik die daarom alleen als de Edge Rule (nog) niet is
ingesteld.

Voeg je later een nieuwe externe bron toe (bijv. een analytics-script of een
ingesloten kaart), breid dan de bijbehorende directive uit in plaats van
`'unsafe-inline'` of `'unsafe-eval'` toe te voegen.

## Content-bronnen

Teksten, menu's, reviews en FAQ zijn overgenomen van de bestaande website
(traiteurlusso.nl). Social-links (Facebook, Instagram, TripAdvisor) en het
logo zijn eveneens van de live site afkomstig.
