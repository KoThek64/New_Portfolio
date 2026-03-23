const DATA = {

  profile: `Étudiant en <strong>BUT Informatique à l'IUT de Nantes</strong>, passionné de développement
    et d'infrastructure. Orienté backend (<strong>PHP, Kotlin</strong>), avec des notions frontend
    (<strong>TypeScript, Tailwind</strong>). Curieux, autonome, et toujours en train d'apprendre.`,

  experiences: [
    {
      date:      'Avr. → Juil. 2026',
      role:      "Stagiaire développeur d'application web",
      org:       'Enedis Lab',
      location:  'Nantes',
      desc:      "Développement de fonctionnalités et maintenance d'applications web (Symfony/PHP, Node.js, PostgreSQL, TypeScript, AWS)",
      highlight: true
    },
    {
      date:     'Sep. 2025 → Mar. 2026',
      role:     'Employé commercial',
      org:      'Super U Dalby',
      location: 'Nantes',
      desc:     "Mise en rayon des produits frais, accueil client et respect des normes d'hygiène"
    },
    {
      date:     'Juil. → Août 2025',
      role:     'Vendeur en boulangerie',
      org:      'Super U',
      location: 'Saint-Palais-sur-Mer',
      desc:     'Accueil clients, vente et conseil en boulangerie-pâtisserie'
    },
    {
      date:     'Juil. → Août 2024',
      role:     'Opérateur de production',
      org:      'Schneider les Agriers',
      location: 'Angoulême',
      desc:     'Assemblage de pièces de produits finis, brasage et débrasage de pièces, conditionnement'
    },
    {
      date:     'Juin → Juil. 2023',
      role:     'Manutentionnaire saisonnier',
      org:      'Viticulteur',
      location: 'Fouquebrune',
      desc:     'Désherbage autour de jeunes pousses de vignes, entretien des grandes vignes, attachage des pousses'
    }
  ],

  formation: [
    {
      date:      '2024 → 2027',
      role:      'BUT Informatique',
      org:       'IUT de Nantes',
      location:  'Nantes',
      desc:      "Parcours A — Réalisation d'applications : conception, développement, validation",
      highlight: true
    },
    {
      date:     '2020 → 2024',
      role:     'Baccalauréat STI2D',
      org:      'Lycée Charles Augustin Coulomb',
      location: 'Angoulême',
      desc:     'Option SIN — Systèmes d\'Information et Numérique'
    }
  ],

  // ── Compétences ─────────────────────────────────────────────────────────────
  // Métadonnées (icône devicon + couleur) pour les skills affichés dans index.html
  skillsMeta: {
    'PHP':          { icon: 'devicon-php-plain',              color: '#777BB4' },
    'Kotlin':       { icon: 'devicon-kotlin-plain',           color: '#7F52FF' },
    'Python':       { icon: 'devicon-python-plain',           color: '#3776AB' },
    'JavaScript':   { icon: 'devicon-javascript-plain',       color: '#F7DF1E' },
    'TypeScript':   { icon: 'devicon-typescript-plain',       color: '#3178C6' },
    'Go':           { icon: 'devicon-go-plain',               color: '#00ADD8' },
    'Dart':         { icon: 'devicon-dart-plain',             color: '#0175C2' },
    'HTML':         { icon: 'devicon-html5-plain',            color: '#E34F26' },
    'CSS':          { icon: 'devicon-css3-plain',             color: '#1572B6' },
    'SQL':          { icon: 'devicon-postgresql-plain',       color: '#4479A1' },
    'Bash':         { icon: 'devicon-bash-plain',             color: '#4EAA25' },
    'Symfony':      { icon: 'devicon-symfony-original',       color: '#8B5CF6' },
    'Flutter':      { icon: 'devicon-flutter-plain',          color: '#0175C2' },
    'CodeIgniter':  { icon: 'devicon-codeigniter-plain',      color: '#EF4223' },
    'Ktor':         { icon: 'devicon-ktor-plain',             color: '#7F52FF' },
    'Tailwind CSS': { icon: 'devicon-tailwindcss-original',   color: '#06B6D4' },
    'Node.js':      { icon: 'devicon-nodejs-plain',           color: '#339933' },
    'JUnit 5':      { icon: 'devicon-junit-plain',            color: '#25A162' },
    'JavaFX':       { icon: 'devicon-java-plain',             color: '#ea8220' },
    'Git':          { icon: 'devicon-git-plain',              color: '#F05032' },
    'GitHub':       { icon: 'devicon-github-original',        color: '#6e7681' },
    'GitLab':       { icon: 'devicon-gitlab-plain',           color: '#FC6D26' },
    'Docker':       { icon: 'devicon-docker-plain',           color: '#2496ED' },
    'Railway':      { icon: 'devicon-railway-original',       color: '#a855f7' },
    'Netlify':      { icon: 'devicon-netlify-plain',          color: '#00C7B7' },
    'Linux':        { icon: 'devicon-linux-plain',            color: '#FCC624' },
    'EndeavourOS':  { icon: 'devicon-archlinux-plain',        color: '#7F3FBF' },
    'Fedora':       { icon: 'devicon-fedora-plain',           color: '#51A2DA' },
    'Ubuntu Server':{ icon: 'devicon-ubuntu-plain',           color: '#E95420' },
    'Windows':      { icon: 'devicon-windows11-original',     color: '#0078D4' },
    'ProxmoxVE':    { color: '#E57000', svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E57000" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>` },
    'OPNsense':     { color: '#D94F00', svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D94F00" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>` },
  },

  // Groupes de compétences pour index.html (avec icônes devicon)
  skillsIndex: [
    { label: 'Langages',               items: ['Kotlin', 'PHP', 'Python', 'JavaScript', 'TypeScript', 'Go', 'Dart', 'HTML', 'CSS', 'SQL', 'Bash'] },
    { label: 'Frameworks & Librairies',items: ['Symfony', 'Flutter', 'CodeIgniter', 'Ktor', 'Tailwind CSS', 'Node.js', 'JUnit 5', 'JavaFX'] },
    { label: 'Outils & Déploiement',   items: ['Git', 'GitHub', 'GitLab', 'Docker', 'Railway', 'Netlify'] },
    { label: 'Systèmes',               items: ['Linux', 'EndeavourOS', 'Fedora', 'Ubuntu Server', 'ProxmoxVE', 'OPNsense', 'Windows'] },
  ],

  // Groupes de compétences pour cv.html (tags simples, structure différente)
  skillsCV: [
    { label: 'Langages',               items: ['PHP', 'Kotlin', 'Python', 'JavaScript', 'TypeScript', 'Dart', 'Go', 'SQL', 'HTML/CSS', 'Markdown', 'Bash'] },
    { label: 'Frameworks & Librairies',items: ['Symfony', 'Node.js', 'Ktor', 'Flutter', 'Tailwind CSS', 'CodeIgniter', 'JUnit', 'JavaFX'] },
    { label: 'Outils',                 items: ['Git', 'GitHub', 'GitLab', 'Gitea', 'Docker', 'DBeaver', 'Tailscale'] },
    { label: 'Systèmes & Déploiement', items: ['Linux', 'ProxmoxVE', 'OPNsense', 'Ubuntu Server', 'Railway', 'Netlify'] },
  ],

  // Section Environnement du CV uniquement
  skillsCVEnv: [
    { label: 'IDE',    items: ['VS Code', 'IntelliJ', 'PHPStorm', 'PyCharm', 'WebStorm'] },
    { label: 'Design', items: ['Canva'] },
  ],

  // Projets affichés dans le CV (3 max)
  cvProjects: [
    {
      name: 'Fait Maison',
      desc: "Réseau social de partage de recettes — publication, notation, commentaires, abonnements, fil d'actualité.",
      tags: ['Symfony', 'PHP 8.4', 'PostgreSQL', 'Tailwind CSS', 'Doctrine ORM']
    },
    {
      name: 'HomeLab',
      desc: 'Infrastructure auto-hébergée — Proxmox + OPNsense, 8 services isolés en conteneurs LXC, reliés via Tailscale.',
      tags: ['Proxmox', 'OPNsense', 'Docker', 'Tailscale', 'Ubuntu Server']
    },
    {
      name: 'Jeu Pokémon CLI',
      desc: '151 Pokémon importés depuis PokéAPI, combats au tour par tour, tests unitaires JUnit 5.',
      tags: ['Kotlin', 'Ktor', 'PostgreSQL', 'JUnit 5', 'Exposed ORM']
    }
  ]

};
