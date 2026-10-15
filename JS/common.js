/* Comportements communs à toutes les pages du portfolio (index + fiches projets) :
   préférences utilisateur, curseur custom, barre de progression, reveal, tilt.
   Chargé avant index.js / projet.js, qui réutilisent finePointer, reducedMotion,
   scrollBehavior et window.revealObs. */

/* ─── PRÉFÉRENCES ────────────────────────────────────────────── */
// Souris précise (pas tactile) et animations autorisées par le système
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const scrollBehavior = reducedMotion ? 'auto' : 'smooth';

/* ─── CURSOR ─────────────────────────────────────────────────── */
// Le CSS masque le curseur custom sur tactile / mouvement réduit : on ne lance rien.
if (finePointer && !reducedMotion) {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;
    let ringRunning = false;

    // L'anneau rattrape la souris puis s'arrête : pas de boucle infinie à l'arrêt
    const animRing = () => {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
        if (Math.abs(mx - rx) > 0.1 || Math.abs(my - ry) > 0.1) {
            requestAnimationFrame(animRing);
        } else {
            ringRunning = false;
        }
    };

    document.addEventListener('mousemove', e => {
        mx = e.clientX;
        my = e.clientY;
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
        if (!ringRunning) {
            ringRunning = true;
            requestAnimationFrame(animRing);
        }
    });
}

/* ─── SCROLL BAR ─────────────────────────────────────────────── */
const bar = document.getElementById('scroll-bar');
window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    bar.style.width = pct + '%';
}, {passive: true});

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

/* ─── CARD TILT ──────────────────────────────────────────────── */
// Uniquement à la souris, et pas si l'utilisateur a demandé moins d'animations
const tiltCards = finePointer && !reducedMotion
    ? document.querySelectorAll('.project-card, .project-card-small')
    : [];
tiltCards.forEach(card => {
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
