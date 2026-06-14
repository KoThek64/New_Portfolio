/* ─── CURSOR ─────────────────────────────────────────────────── */
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
});

(function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
})();

/* ─── SCROLL BAR ─────────────────────────────────────────────── */
const bar = document.getElementById('scroll-bar');
window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    bar.style.width = pct + '%';
}, {passive: true});

/* ─── NAV ACTIVE ─────────────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            navLinks.forEach(l => l.classList.remove('active'));
            const active = document.querySelector(`nav a[href="#${e.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, {threshold: 0.4});
sections.forEach(s => io.observe(s));

/* ─── REVEAL ON SCROLL ───────────────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');
window.revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            window.revealObs.unobserve(e.target);
        }
    });
}, {threshold: 0.1, rootMargin: '0px 0px -60px 0px'});
revealEls.forEach(el => window.revealObs.observe(el));

/* ─── SMOOTH NAV CLICK ───────────────────────────────────────── */
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({behavior: 'smooth'});
    });
});

/* ─── HAMBURGER MENU ─────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a');

function toggleMenu(force) {
    const isOpen = hamburger.classList.toggle('open', force);
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

hamburger.addEventListener('click', () => toggleMenu());

mobileLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        toggleMenu(false);
        const target = document.querySelector(link.getAttribute('href'));
        setTimeout(() => {
            if (target) target.scrollIntoView({behavior: 'smooth'});
        }, 300);
    });
});

/* ─── CARD TILT ──────────────────────────────────────────────── */
document.querySelectorAll('.project-card, .project-card-small').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)';
        setTimeout(() => card.style.transition = '', 500);
    });
});

/* ─── RENDU DEPUIS data.js ──────────────────────────────────── */
/* Expériences : on détaille les expériences principales (dev) et on condense
   les expériences secondaires (commerce, vente, production) en une seule ligne. */
const mainExp = DATA.experiences.filter(e => !e.secondary);
const otherExp = DATA.experiences.filter(e => e.secondary);

let expHtml = mainExp.map(e => `
  <div class="timeline-entry ${e.highlight ? 'highlight' : ''}">
    <div class="timeline-year">${e.date}</div>
    <div>
      <div class="timeline-role">${e.role}</div>
      <div class="timeline-place">${e.org} · ${e.location}</div>
    </div>
  </div>
`).join('');

if (otherExp.length) {
    const otherHtml = otherExp.map(e => `
    <div class="timeline-entry">
      <div class="timeline-year">${e.date}</div>
      <div>
        <div class="timeline-role">${e.role}</div>
        <div class="timeline-place">${e.org} · ${e.location}</div>
      </div>
    </div>
  `).join('');

    expHtml += `
  <button type="button" class="timeline-entry timeline-entry-more" id="exp-toggle" aria-expanded="false" aria-controls="exp-extra">
    <div class="timeline-year">2023 → 2026</div>
    <div>
      <div class="timeline-role">+ ${otherExp.length} expériences en commerce, vente &amp; production <span class="exp-chevron">▾</span></div>
      <div class="timeline-place exp-toggle-hint">Cliquer pour afficher</div>
    </div>
  </button>
  <div class="timeline-extra" id="exp-extra"><div class="timeline-extra-inner">${otherHtml}</div></div>
`;
}

document.getElementById('index-experiences').innerHTML = expHtml;

const expToggle = document.getElementById('exp-toggle');
if (expToggle) {
    const expExtra = document.getElementById('exp-extra');
    const expHint = expToggle.querySelector('.exp-toggle-hint');
    expToggle.addEventListener('click', () => {
        const open = expExtra.classList.toggle('open');
        expToggle.classList.toggle('open', open);
        expToggle.setAttribute('aria-expanded', open);
        if (expHint) expHint.textContent = open ? 'Cliquer pour masquer' : 'Cliquer pour afficher';
    });
}

function renderChip(name) {
    var m = DATA.skillsMeta[name] || {};
    var icon = m.svg ? m.svg : m.icon ? '<i class="' + m.icon + '" style="color:' + m.color + '"></i>' : '';
    return '<div class="skill-chip" style="--chip-color:' + (m.color || 'var(--accent)') + '">' + icon + '<span>' + name + '</span></div>';
}

document.getElementById('index-skills').innerHTML = DATA.skillsIndex.map(function (group, i) {
    var delay = i > 0 ? ' reveal-delay-' + i : '';
    return '<div class="skill-category-block reveal' + delay + '">'
        + '<div class="skill-cat-label">' + group.label + '</div>'
        + '<div class="skills-row">' + group.items.map(renderChip).join('') + '</div>'
        + '</div>';
}).join('');
document.querySelectorAll('#index-skills .reveal').forEach(el => window.revealObs.observe(el));

document.getElementById('index-formation').innerHTML = DATA.formation.map(e => `
  <div class="timeline-entry ${e.highlight ? 'highlight' : ''}">
    <div class="timeline-year">${e.date}</div>
    <div>
      <div class="timeline-role">${e.role}</div>
      <div class="timeline-place">${e.org}, ${e.location}</div>
    </div>
  </div>
`).join('');
