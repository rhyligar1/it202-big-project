const mymap = L.map('mapid').setView([0,0], 2);
const marker = L.marker([0,0]).addTo(mymap);
const attribution = '&copy; <a href = "https://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors';
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileURL, { attribution });
tiles.addTo(mymap);
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
async function getISS() {
  const response = await fetch(api_url);
  const data = await response.json();
  const {
    latitude,
    longitude
  } = data;

  document.getElementById('lat').textContent = latitude;
  document.getElementById('lon').textContent = longitude;

//  L.marker([latitude, longitude]).addTo(mymap);
marker.setLatLng([latitude,longitude]);

var popup = L.popup()
    .setLatLng([latitude+15, longitude])
    .setContent("The ISS is here!")
    .openOn(mymap);
}
getISS();
