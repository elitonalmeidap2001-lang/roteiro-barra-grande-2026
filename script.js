const tabs = [...document.querySelectorAll('.tab')];
const panels = [...document.querySelectorAll('.day-panel')];

function showDay(day) {
  tabs.forEach(tab => {
    const selected = tab.dataset.day === day;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', selected);
  });
  panels.forEach(panel => {
    const selected = panel.id === `day-${day}`;
    panel.classList.toggle('active', selected);
    panel.hidden = !selected;
  });
}

tabs.forEach(tab => tab.addEventListener('click', () => showDay(tab.dataset.day)));
tabs.forEach((tab, index) => tab.addEventListener('keydown', event => {
  if (!['ArrowRight', 'ArrowLeft'].includes(event.key)) return;
  event.preventDefault();
  const next = (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
  tabs[next].focus();
  showDay(tabs[next].dataset.day);
}));

const sectionTabs = [...document.querySelectorAll('.section-tab')];
const contentPanels = [...document.querySelectorAll('.content-panel')];

function showSection(section) {
  sectionTabs.forEach(tab => {
    const selected = tab.dataset.section === section;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-pressed', selected);
  });
  contentPanels.forEach(panel => { panel.hidden = panel.dataset.panel !== section; });
  document.querySelector(`[data-panel="${section}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

sectionTabs.forEach(tab => tab.addEventListener('click', () => showSection(tab.dataset.section)));

