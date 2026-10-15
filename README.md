# Portfolio — Mattys Lachaise

Portfolio personnel. Développeur web full-stack en alternance chez Luneos, étudiant en 3ème année de BUT Informatique à l'IUT de Nantes.

**[→ mattys-lachaise.fr](https://mattys-lachaise.fr)**

## Stack

- HTML5 / CSS3 / JavaScript — vanilla, aucun framework, aucun build
- [Devicon](https://devicon.dev) 2.17.0 — icônes des technologies (version figée)
- Polices auto-hébergées (`fonts/`) — Unbounded, Outfit, DM Mono
- Hébergement Netlify, domaine OVH

## Structure

```
New_Portfolio/
├── index.html      # Portfolio (hero, à propos, skills, projets, homelab, contact)
├── cv.html         # CV A4, exporté en PDF via l'impression du navigateur
├── projets/        # Une fiche détaillée par projet (contexte, contribution, code, bilan)
├── CSS/
│   ├── index.css   # Styles du portfolio
│   ├── projet.css  # Composants des fiches projets (s'ajoute à index.css)
│   ├── cv.css      # Styles du CV (écran + impression)
│   └── fonts.css   # @font-face des polices auto-hébergées
├── JS/
│   ├── data.js     # Source de vérité : expériences, formation, compétences, homelab, projets du CV
│   ├── common.js   # Interactions partagées : curseur, barre de scroll, reveal, tilt
│   ├── index.js    # Nav active, défilement, menu mobile + rendu depuis data.js
│   └── cv.js       # Mise à l'échelle du CV + rendu depuis data.js + impression PDF
├── fonts/          # Polices .woff2
├── images/         # Photo, captures de projets (WebP, dont images/projets/ pour les fiches), og-image.png
├── _headers        # En-têtes HTTP Netlify (noindex sur le CV)
├── robots.txt
└── sitemap.xml
```

## Fonctionnement

`JS/data.js` est la source unique des données : expériences, formation, compétences, homelab et projets du CV. Le modifier met à jour à la fois le portfolio et le CV.

Les fiches de `projets/` sont des pages statiques qui réutilisent `index.css` et `common.js`. Les extraits de code y sont copiés tels quels depuis les dépôts, coloration par [Prism](https://prismjs.com) 1.29.0.

Le CV (`cv.html`) n'est pas indexé par les moteurs de recherche (`X-Robots-Tag: noindex` dans `_headers`) car il contient des coordonnées personnelles.

## Accessibilité

- Respect de `prefers-reduced-motion` (pas de reveal, de tilt, de curseur animé ni de défilement animé)
- Curseur custom désactivé sur les écrans tactiles
- Contenu des sections visible même sans JavaScript (sauf les blocs générés depuis `data.js`)
- Menu mobile utilisable au clavier (Échap pour fermer)

## Licence

© 2026 Mattys Lachaise. Tous droits réservés.
