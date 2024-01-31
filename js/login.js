const credenciales = {
  email: "estudiante@guayerd.com",
  password: "123456",
};

if (localStorage.getItem("logged") === "true") {
  window.location.href = "../html/map.html";
}

var form = document.querySelector("#loginForm");
function submitSignIn(event) {
  event.preventDefault();
  var userEmail = document.querySelector("#email").value;
  var userPassword = document.querySelector("#password").value;
  if (
    userEmail === credenciales.email &&
    userPassword === credenciales.password
  ) {
    localStorage.setItem("logged", "true");
    window.location.href = "../html/map.html";
  } else {
    alert("Las credenciales introducidas son inválidas");
  }
}

submitevent = form.addEventListener("submit", submitSignIn);
