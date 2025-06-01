function renderMaterias(lista) {
  const contenedor = document.getElementById("lista-materias");
  contenedor.innerHTML = "";

  lista.forEach((materia) => {
    const card = document.createElement("div");
    card.classList.add("materia-card");

    const cursosHTML = materia.cursos
      .map((curso) => `
        <button class="btn-curso" data-id="${curso.id}">
          ${curso.nombre}
        </button>
      `)
      .join("");

    card.innerHTML = `
      <div class="materia-header" style="background-color: ${materia.color}">
        ${materia.nombre}
      </div>

      <div class="materia-cursos">
        ${cursosHTML}
      </div>
    `;

    contenedor.appendChild(card);
  });

  document.querySelectorAll(".btn-curso").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const cursoId = e.target.dataset.id;
      localStorage.setItem("cursoSeleccionado", cursoId);
      window.location.href = "detalle_materia.html";
    });
  });
}

// Inicial
renderMaterias(materias);

// Búsqueda
document.getElementById("buscador").addEventListener("input", e => {
  const texto = e.target.value.toLowerCase();
  const filtradas = materias.filter(m =>
    m.nombre.toLowerCase().includes(texto)
  );
  renderMaterias(filtradas);
});

// Ordenamiento
document.getElementById("ordenar").addEventListener("change", e => {
  const criterio = e.target.value;
  let ordenadas = [...materias];

  if (criterio === "nombre") {
    ordenadas.sort((a, b) => a.nombre.localeCompare(b.nombre));
  } else if (criterio === "cursos") {
    ordenadas.sort((a, b) => b.cursos.length - a.cursos.length);
  }

  renderMaterias(ordenadas);
});

// Validación de sesión
const usuario = localStorage.getItem("usuarioLogueado");
if (!usuario) {
  window.location.href = "index.html";
}
