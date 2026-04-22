/* ─── IMPRESSION / SAUVEGARDE PDF NATIVE ─────────────────── */
async function printCV() {
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  }
  window.print();
}

/* ─── SCALING RESPONSIVE ─────────────────────────────────── */
function scaleCv() {
  const wrapper = document.getElementById('cv-wrapper');
  const cv = document.getElementById('cv');
  const hPad = window.innerWidth <= 480 ? 24 : window.innerWidth <= 840 ? 32 : 48;
  const available = Math.min(window.innerWidth - hPad, 794);
  if (available < 794) {
    const s = available / 794;
    cv.style.transform = `scale(${s})`;
    cv.style.transformOrigin = 'top left';
    wrapper.style.height = Math.round(1122 * s) + 'px';
  } else {
    cv.style.transform = '';
    cv.style.transformOrigin = '';
    wrapper.style.height = '';
  }
}
scaleCv();
window.addEventListener('resize', scaleCv);

/* ─── RENDU DEPUIS data.js ─────────────────────────────────── */
document.getElementById('cv-profile').innerHTML = DATA.profile;

document.getElementById('cv-experiences').innerHTML = DATA.experiences.map(e => `
  <div class="cv-tl-entry">
    <div class="cv-tl-date">${e.date}</div>
    <div class="cv-tl-title">${e.role}</div>
    <div class="cv-tl-org">${e.org} · ${e.location}</div>
    ${e.desc ? `<div class="cv-tl-desc">${e.desc}</div>` : ''}
  </div>
`).join('');

document.getElementById('cv-formation').innerHTML = DATA.formation.map(e => `
  <div class="cv-tl-entry">
    <div class="cv-tl-date">${e.date}</div>
    <div class="cv-tl-title">${e.role}</div>
    <div class="cv-tl-org">${e.org} · ${e.location}</div>
    ${e.desc ? `<div class="cv-tl-desc">${e.desc}</div>` : ''}
  </div>
`).join('');

const renderCVSkillGroup = g => `
  <div class="skill-group">
    <div class="skill-group-label">${g.label}</div>
    <div class="skill-tags">
      ${g.items.map(t => `<span class="skill-tag">${t}</span>`).join('')}
    </div>
  </div>`;

document.getElementById('cv-skills').innerHTML     = DATA.skillsCV.map(renderCVSkillGroup).join('');
document.getElementById('cv-skills-env').innerHTML = DATA.skillsCVEnv.map(renderCVSkillGroup).join('');

document.getElementById('cv-projects').innerHTML = DATA.cvProjects.map(p => `
  <div class="cv-project">
    <div class="cv-project-name">${p.name}</div>
    <div class="cv-project-desc">${p.desc}</div>
    <div class="cv-project-tags">
      ${p.tags.map(t => `<span class="cv-project-tag">${t}</span>`).join('')}
    </div>
  </div>
`).join('');
