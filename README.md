# Portfolio — Mattys Lachaise

Portfolio personnel. Étudiant en BUT Informatique à l'IUT de Nantes.

**[→ Voir le portfolio](https://portfolio-mattys.netlify.app)**

## Stack

- HTML5 / CSS3 / JavaScript — vanilla, aucun framework
- [Devicon](https://devicon.dev) — icônes des technologies
- [html2pdf.js](https://ekoopmans.github.io/html2pdf.js/) — génération du CV en PDF
- Google Fonts — Unbounded, DM Mono, Outfit

## Structure

```
New_Portfolio/
├── index.html      # Portfolio (hero, à propos, skills, projets, homelab, contact)
├── index.css       # Styles du portfolio
├── index.js        # Interactions (cursor, scroll, nav, reveal, hamburger, tilt)
├── cv.html         # CV téléchargeable en PDF
├── cv.css          # Styles du CV
├── cv.js           # Génération PDF + rendu des données
├── data.js         # Source de vérité : expériences, formation, compétences, projets
├── images/         # Photos et captures
└── documents/      # Fichiers PDF
```

## Fonctionnement

`data.js` est la source unique pour toutes les données — expériences, formation, compétences et projets. Modifier ce fichier met à jour automatiquement le portfolio et le CV.

## Licence

© 2026 Mattys Lachaise. Tous droits réservés.
