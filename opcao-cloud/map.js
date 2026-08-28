/* Mapa interativo — maré mansa · Barra Grande */
(function () {
  let leafletMap = null;
  let markers = {};
  let activeDay = 'all';
  let activeCats = new Set(Object.keys(MAP_CATEGORIES));
  let initialized = false;

  function pinSvg(color, glyph, big) {
    const size = big ? 40 : 32;
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg" class="map-pin-svg">
        <path d="M16 0C7.16 0 0 7.16 0 16c0 11 16 24 16 24s16-13 16-24C32 7.16 24.84 0 16 0z" fill="${color}"/>
        <circle cx="16" cy="16" r="10.5" fill="#fffdf9"/>
        <g fill="${color}">${glyph}</g>
      </svg>`;
  }

  const GLYPHS = {
    base: '<path d="M16 9.5l7 6v9.2h-4.6v-5.7h-4.8v5.7H9V15.5z"/>',
    comer: '<path d="M12 9v6.2a1.6 1.6 0 003.2 0V9h1.2v6.2a1.6 1.6 0 003.2 0V9h1.2v6.4c0 1.5-1 2.6-2.4 2.9V23h-1.2v-4.7c-.4-.05-.8-.15-1.2-.3-.4.15-.8.25-1.2.3V23H14.6v-4.7c-1.4-.3-2.4-1.4-2.4-2.9V9z"/><path d="M21.5 9c-1.4 0-2.5 1.6-2.5 4.2 0 2 .7 3.5 1.9 4v6.3h1.2V9.05c-.2-.03-.4-.05-.6-.05z"/>',
    natureza: '<path d="M8 18c1.4-1.4 2.8-1.4 4.2 0s2.8 1.4 4.2 0 2.8-1.4 4.2 0 2.8 1.4 4.2 0v1.6c-1.4 1.4-2.8 1.4-4.2 0s-2.8-1.4-4.2 0-2.8 1.4-4.2 0-2.8-1.4-4.2 0z"/><path d="M8 13c1.4-1.4 2.8-1.4 4.2 0s2.8 1.4 4.2 0 2.8-1.4 4.2 0 2.8 1.4 4.2 0v1.6c-1.4 1.4-2.8 1.4-4.2 0s-2.8-1.4-4.2 0-2.8 1.4-4.2 0-2.8-1.4-4.2 0z"/>',
    transporte: '<path d="M9 20.5v-6.8L11 9h10l2 4.7v6.8h-2v-1.6H11v1.6zm2-3.2h10v-3.4H11z"/><circle cx="12" cy="21.5" r="1.3"/><circle cx="20" cy="21.5" r="1.3"/>',
    longe: '<path d="M16 9c-2.6 0-4.5 2-4.5 4.5 0 3.3 4.5 8.5 4.5 8.5s4.5-5.2 4.5-8.5C20.5 11 18.6 9 16 9zm0 6.2a1.7 1.7 0 110-3.4 1.7 1.7 0 010 3.4z"/>'
  };

  function buildIcon(point) {
    const color = MAP_CATEGORIES[point.cat].color;
    const big = point.cat === 'base';
    return L.divIcon({
      className: 'map-pin' + (big ? ' map-pin--base' : ''),
      html: pinSvg(color, GLYPHS[point.cat] || '', big),
      iconSize: big ? [40, 40] : [32, 32],
      iconAnchor: big ? [20, 40] : [16, 32],
      popupAnchor: [0, -30]
    });
  }

  function openPanel(point) {
    const panel = document.getElementById('map-panel');
    const body = panel.querySelector('.map-panel-body');
    const cat = MAP_CATEGORIES[point.cat];
    body.innerHTML = `
      <span class="map-panel-cat" style="color:${cat.color}">${cat.label}</span>
      <h3>${point.name}</h3>
      <p class="map-panel-tag">${point.tag}</p>
      <p class="map-panel-desc">${point.desc}</p>
      <p class="map-panel-meta">${point.meta}</p>
      <a href="${point.link}" target="_blank" rel="noopener" class="map-panel-link">${point.linkLabel} ↗</a>
    `;
    panel.hidden = false;
    requestAnimationFrame(() => panel.classList.add('open'));
  }

  function closePanel() {
    const panel = document.getElementById('map-panel');
    panel.classList.remove('open');
    setTimeout(() => { panel.hidden = true; }, 220);
  }

  function applyFilters() {
    const visibleLatLngs = [];
    MAP_POINTS.forEach((point) => {
      const marker = markers[point.id];
      const dayOk = activeDay === 'all' || point.days.includes(Number(activeDay));
      const catOk = activeCats.has(point.cat);
      const visible = dayOk && catOk;
      const el = marker.getElement();
      if (el) el.classList.toggle('map-pin--dim', !visible);
      if (visible) visibleLatLngs.push([point.lat, point.lng]);
    });
    if (visibleLatLngs.length > 1) {
      leafletMap.flyToBounds(visibleLatLngs, { padding: [48, 48], maxZoom: 16, duration: 0.6 });
    } else if (visibleLatLngs.length === 1) {
      leafletMap.flyTo(visibleLatLngs[0], 16, { duration: 0.6 });
    }
  }

  function setActiveDayChip(day) {
    document.querySelectorAll('.map-day-chip').forEach((chip) => {
      chip.classList.toggle('active', chip.dataset.day === String(day));
    });
  }

  function initMap() {
    if (initialized) return;
    initialized = true;

    leafletMap = L.map('leaflet-map', {
      scrollWheelZoom: false,
      zoomControl: false
    }).setView([-2.9098, -41.4055], 15);

    L.control.zoom({ position: 'bottomright' }).addTo(leafletMap);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; OpenStreetMap'
    }).addTo(leafletMap);

    MAP_POINTS.forEach((point) => {
      const marker = L.marker([point.lat, point.lng], { icon: buildIcon(point) }).addTo(leafletMap);
      marker.on('click', () => {
        document.querySelectorAll('.map-pin').forEach((el) => el.classList.remove('map-pin--active'));
        const el = marker.getElement();
        if (el) el.classList.add('map-pin--active');
        leafletMap.panTo([point.lat, point.lng]);
        openPanel(point);
      });
      markers[point.id] = marker;
    });

    document.getElementById('map-panel-close').addEventListener('click', closePanel);

    document.querySelectorAll('.map-day-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        activeDay = chip.dataset.day;
        setActiveDayChip(activeDay);
        applyFilters();
      });
    });

    document.querySelectorAll('.map-cat-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        const cat = chip.dataset.cat;
        if (activeCats.has(cat)) { activeCats.delete(cat); chip.classList.remove('active'); }
        else { activeCats.add(cat); chip.classList.add('active'); }
        applyFilters();
      });
    });

    setTimeout(() => leafletMap.invalidateSize(), 250);
  }

  function focusDayOnMap(day) {
    activeDay = String(day);
    setActiveDayChip(activeDay);
    if (initialized) applyFilters();
  }

  window.BarraGrandeMap = { initMap, focusDayOnMap };

  document.querySelectorAll('.jump-to-map').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const day = btn.dataset.day;
      document.querySelector('[data-section="mapa"]').click();
      setTimeout(() => { if (day) focusDayOnMap(day); }, 320);
    });
  });
})();

