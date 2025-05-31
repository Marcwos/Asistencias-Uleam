fetch("components/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data;

    // Después de insertar el header, detectamos usuario logueado
    const usuario = localStorage.getItem("usuarioLogueado");
    const contenedorSesion = document.getElementById("opcion-sesion");

    if (usuario) {
      contenedorSesion.innerHTML = `<a href="#" id="logout-link">Salir</a>`;
      
      // Acción al hacer logout
      document.getElementById("logout-link").addEventListener("click", () => {
        localStorage.removeItem("usuarioLogueado");
        window.location.href = "index.html";
      });
    } else {
      contenedorSesion.innerHTML = `<a href="index.html">Acceder</a>`;
    }
  });
