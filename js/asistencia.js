const idCurso = localStorage.getItem("cursoSeleccionado");
const curso = cursosDB.find(c => c.id === idCurso);
const fechaActual = new Date().toISOString().split("T")[0]; // yyyy-mm-dd

if (!curso) {
  alert("Curso no encontrado");
  window.location.href = "materia.html";
}

const estudiantes = estudiantesDB[idCurso] || [];
const cuerpoTabla = document.getElementById("cuerpo-tabla");

// Obtener asistencias previas (si existen)
const asistenciaTotal = JSON.parse(localStorage.getItem("asistencias") || "{}");
const asistenciaCurso = asistenciaTotal[idCurso]?.[fechaActual] || {};

// Renderizar la tabla
estudiantes.forEach((nombre, index) => {
  const estado = asistenciaCurso[index];  

  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${index + 1}</td>
    <td class="col-nombre">${nombre}</td>
    <td><input type="checkbox" class="falta" data-index="${index}" ${estado === "falta" ? "checked" : ""}></td>
    <td><input type="checkbox" class="atrasado" data-index="${index}" ${estado === "atrasado" ? "checked" : ""}></td>
  `;
  cuerpoTabla.appendChild(fila);
});

// Exclusividad entre falta y atrasado
document.addEventListener("change", (e) => {
  if (e.target.classList.contains("falta") || e.target.classList.contains("atrasado")) {
    const index = e.target.dataset.index;
    const falta = document.querySelector(`.falta[data-index="${index}"]`);
    const atrasado = document.querySelector(`.atrasado[data-index="${index}"]`);

    if (e.target === falta && falta.checked) {
      atrasado.checked = false;
    } else if (e.target === atrasado && atrasado.checked) {
      falta.checked = false;
    }
  }
});

// Guardar asistencia
document.getElementById("guardar-asistencia").addEventListener("click", () => {
  const nuevaAsistencia = {};

  estudiantes.forEach((_, index) => {
    const falta = document.querySelector(`.falta[data-index="${index}"]`).checked;
    const atrasado = document.querySelector(`.atrasado[data-index="${index}"]`).checked;

    if (falta) {
      nuevaAsistencia[index] = "falta";
    } else if (atrasado) {
      nuevaAsistencia[index] = "atrasado";
    } else {
      nuevaAsistencia[index] = "presente";
    }
  });

  if (!asistenciaTotal[idCurso]) asistenciaTotal[idCurso] = {};
  asistenciaTotal[idCurso][fechaActual] = nuevaAsistencia;

  localStorage.setItem("asistencias", JSON.stringify(asistenciaTotal));

  alert("Asistencia guardada exitosamente");
  window.location.href = "materia.html";
});
