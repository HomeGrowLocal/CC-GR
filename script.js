fetch('data/campingplaetze.json').then(res => res.json()).then(data => {
  const map = L.map('map').setView([39.0, 22.0], 6);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  data.forEach(platz => {
    const marker = L.marker([platz.lat, platz.lon]).addTo(map);
    marker.bindPopup(`<b>${platz.name}</b><br>${platz.ort}<br>Bewertung: ${platz.bewertung}<br><button onclick="showDetails('${platz.id}')">Details</button>`);
  });
});
function showDetails(id) { alert('Details für Platz ' + id); }