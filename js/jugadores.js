if (!localStorage.getItem("logged")) {
  window.location.href = "../cssindex.html";
}

function cerrarSesion(event) {
  event.preventDefault();
  window.location.href = "../index.html";
  localStorage.removeItem("logged");
}
var form = document.querySelector("#signOutButton");

submitevent = form.addEventListener("submit", cerrarSesion);

fetch("https://639a535a3a5fbccb5264b073.mockapi.io/jugadores")
  .then((response) => response.json())
  .then((data) => {
    var jugadores = data.map(function (element) {
      return `<div class="col-md-4 p-2 float-start">
    <div class="card">
      <div class="img-wrapper"><img class="card-img-top" src="https://julioavantt.github.io/guayerd-project-images/img/${element.dorsal}.jpg" alt="Card image cap">
      <span>${element.dorsal}</span></div>
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">Edad: ${element.edad}</p>
        <p class="card-text">Posición: ${element.posicion}</p>
        <p class="card-text">Peso: ${element["stats-fisico"].peso}</p>
        <p class="card-text">Altura: ${element["stats-fisico"].altura}</p>
        <p class="card-text">Equipo Actual: ${element["equipo-actual"]}</p>
        <p class="card-text">Fecha de nacimiento: ${element["fecha-nacimiento"]}</p>
      </div>
    </div>
    </div>`;
    });
    var section = document.querySelector("section");

    section.innerHTML = jugadores.toString().replaceAll(",", "");
  });
