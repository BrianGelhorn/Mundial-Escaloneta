var map = L.map("map").setView([51.505, -0.09], 13);
var icon = L.icon({
  iconUrl: "../img/Marker.png",
  iconAnchor: [40, 40],
  popupAnchor: [-20, -40],
  tooltipAnchor: [0, 0],
});
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

const objetoMapa = [
  {
    jugador: "Qatar 2022",
    coordenada: [25.2841478, 51.4419568],
    ciudad: "World Cup",
  },
  {
    jugador: "Messi",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
  },
  {
    jugador: "Di María",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
  },
  {
    jugador: "Otamendi",
    coordenada: [-34.4718607, -58.6715832],
    ciudad: "El Talar",
  },
  {
    jugador: "Julián Álvarez",
    coordenada: [-31.6679028, -63.2032357],
    ciudad: "Calchín",
  },
  {
    jugador: "Dibu Martínez",
    coordenada: [-38.0174106, -57.6705734],
    ciudad: "Mar del Plata",
  },
];

var select = document.querySelector("#playerSelect");
for (i = 0; i < objetoMapa.length; i++) {
  var element = document.createElement("option");
  element.innerHTML = objetoMapa[i].jugador;
  select.appendChild(element);
}

function changeMap() {
  const objeto = objetoMapa.find((item) => item.jugador === select.value);
  map.setView(new L.LatLng(...objeto.coordenada), 11);
  marker = L.marker(objeto.coordenada, { icon }).addTo(map);
  marker
    .bindPopup("<b>" + objeto.jugador + "</b><br>" + objeto.ciudad)
    .openPopup();
}
changeMap();
function cerrarSesion(event) {
  event.preventDefault();
  window.location.href = "../index.html";
  localStorage.removeItem("logged");
}

var form = document.querySelector("#signOutButton");

submitevent = form.addEventListener("submit", cerrarSesion);

if (!localStorage.getItem("logged")) {
  window.location.href = "../index.html";
}
