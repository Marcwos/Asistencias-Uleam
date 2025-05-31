function login() {
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;

  // Simulación de autenticación
  if (usuario === "admin" && clave === "1234") {
    localStorage.setItem("usuarioLogueado", usuario); // <-- Guardamos sesión
    window.location.href = "materia.html";
  } else {
    alert("Credenciales incorrectas");
  }
}

