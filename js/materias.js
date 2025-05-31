const materias = [
  {
    nombre: "Modelado orientado a objetos / Software",
    color: "#4e73df",
    cursos: [
      { id: "m1-0", nombre: "Curso 3ro Software A" },
      { id: "m1-1", nombre: "Curso 3ro Software B" }
    ]
  },
  {
    nombre: "Ingeniería de requisitos / Software",
    color: "#4e73df",
    cursos: [
      { id: "m2-0", nombre: "Curso 2ro Software A" },
      { id: "m2-1", nombre: "Curso 2ro Software B" }
    ]
  },
  {
    nombre: "Álgebra Lineal / Software",
    color: "#4e73df",
    cursos: [
      { id: "m3-0", nombre: "Curso 1ro Software A" }
    ]
  },
  {
    nombre: "Programación Básica / Software – Nivelación",
    color: "#4e73df",
    cursos: [
      { id: "m4-0", nombre: "Nivelación Software A" }
    ]
  }
];

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

const usuario = localStorage.getItem("usuarioLogueado");
if (!usuario) {
  window.location.href = "index.html"; // Redirige si no hay sesión
}

