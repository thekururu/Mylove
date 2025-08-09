function verificarAcceso() {
  const passwordCorrecta = "23012012";
  const inputPassword = document.getElementById("password").value;
  const nombre = document.getElementById("nombre").value.trim();
  const errorMensaje = document.getElementById("mensaje-error");

  if (nombre === "") {
    errorMensaje.textContent = "Por favor, escribe tu nombre 📝";
    return;
  }

  if (inputPassword === passwordCorrecta) {
    document.getElementById("login").classList.add("oculto");
    document.getElementById("cuaderno").classList.remove("oculto");
    document.getElementById("nombreMostrado").textContent = nombre;
  } else {
    errorMensaje.textContent = "¡Contraseña incorrecta! ❌";
  }
}

function salir() {
  location.reload();
}
