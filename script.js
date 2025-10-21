fetch('data/campingplaetze.json').then(res => res.json()).then(data => {
  const map = L.map('map').setView([39.0, 22.0], 6);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  data.forEach(platz => {
    const marker = L.marker([platz.lat, platz.lon]).addTo(map);
    marker.bindPopup(`<b>${platz.name}</b><br>${platz.ort}<br>Bewertung: ${platz.bewertung}<br><button onclick="showDetails('${platz.id}')">Details</button>`);
  });
});
function showDetails(id) {
  fetch('data/details/' + id + '.json').then(res => res.json()).then(data => {
    alert(`Name: ${data.name}
Adresse: ${data.adresse}
Telefon: ${data.telefon}
Website: ${data.website}
Email: ${data.email}

Preise Hochsaison:
Wohnwagen: ${data.preise.wohnwagen} €
Erwachsene: ${data.preise.erwachsene} €
Kinder: ${data.preise.kinder} €
Strom: ${data.preise.strom} €
Gesamt: ${data.preise.gesamt} €`);
  });
}