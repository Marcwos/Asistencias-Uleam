function login() {
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;

  // Lógica de login simulada
  if (usuario === "admin" && clave === "1234") {
    alert("Ingreso correcto");
    window.location.href = "materia.html";
  } else {
    alert("Credenciales incorrectas");
  }
}
