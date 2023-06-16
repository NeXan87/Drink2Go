import './vendor/leaflet.js';

const longitude = 59.96832;
const latitude = 30.31748;
const zoom = 18;
const popupText = 'Мы находимся здесь!';
const copyrightText = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const imgLink = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

const activateLeaflet = () => {
  const mapOptions = {
    dragging: !L.Browser.mobile,
    tap: !L.Browser.mobile,
    touchZoom: !L.Browser.mobile,
    scrollWheelZoom: false,
  };
  const customIcon = L.icon({
    iconUrl: '../img/svg/map-marker.svg',
    iconSize: [38, 50],
    iconAnchor: [19, 50],
    popupAnchor: [0, -50],
  });

  const map = L.map('map', mapOptions).setView([longitude, latitude], zoom);

  L.tileLayer(imgLink, {
    maxZoom: 19,
    attribution: copyrightText,
  }).addTo(map);

  const marker = L.marker([longitude, latitude], { icon: customIcon }).bindPopup(popupText).openPopup().addTo(map);
};

export { activateLeaflet };
