/* ─── TÉLÉCHARGEMENT PDF ─────────────────────────────────────────── */
async function downloadPDF() {
  const btn = document.getElementById('btn-dl');
  btn.disabled = true;
  btn.innerHTML = `
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
      style="animation: spin 1s linear infinite">
      <path d="M21 12a9 9 0 11-6.219-8.56"/>
    </svg>
    Génération en cours…`;

  const el = document.getElementById('cv');

  const opt = {
    margin: 0,
    filename: 'CV_Mattys_Lachaise.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
      onclone: function(clonedDoc) {
        const body = clonedDoc.body;
        body.style.cssText = 'margin:0;padding:0;background:#ffffff;display:block;min-height:auto;';
        const controls = clonedDoc.querySelector('.page-controls');
        if (controls) controls.style.display = 'none';
        const wrapper = clonedDoc.getElementById('cv-wrapper');
        if (wrapper) {
          wrapper.style.cssText = 'width:794px;margin:0;border:none;border-radius:0;box-shadow:none;';
        }
      }
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    }
  };

  try {
    await html2pdf().set(opt).from(el).save();
  } catch(e) {
    console.error(e);
  }

  btn.disabled = false;
  btn.innerHTML = `
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
    PDF téléchargé !`;

  setTimeout(() => {
    btn.innerHTML = `
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      Télécharger le PDF`;
  }, 3000);
}

const style = document.createElement('style');
style.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
document.head.appendChild(style);

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
