const materias = [
  {
    nombre: "Modelado orientado a objetos / Software",
    cursos: ["Curso 3ro Software A", "Curso 3ro Software B"]
  },
  {
    nombre: "Ingeniería de requisitos / Software",
    cursos: ["Curso 2ro Software A", "Curso 2ro Software B"]
  },
  {
    nombre: "Álgebra Lineal / Software",
    cursos: ["Curso 1ro Software A"]
  },
  {
    nombre: "Programación Básica / Software – Nivelación",
    cursos: ["Nivelación Software A"]
  }
];

function renderMaterias(lista) {
  const contenedor = document.getElementById("lista-materias");
  contenedor.innerHTML = "";

  lista.forEach((materia) => {
    const card = document.createElement("div");
    card.classList.add("materia-card");

    card.innerHTML = `
      <div class="materia-header">${materia.nombre}</div>
      <div class="materia-cursos">
        ${materia.cursos.map(curso => `<div>${curso}</div>`).join("")}
      </div>
    `;

    card.onclick = () => {
      // En una app real pasarías el ID o usarías localStorage
      window.location.href = "detalle_materia.html";
    };

    contenedor.appendChild(card);
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
