const idSeleccionado = localStorage.getItem("cursoSeleccionado");
const curso = cursosDB.find(c => c.id === idSeleccionado);

if (!curso) {
  alert("Curso no encontrado");
  window.location.href = "materia.html";
} else {
  document.getElementById("nombre-curso").textContent = curso.nombre;
  document.getElementById("materia").textContent = curso.materia;
  document.getElementById("horario").textContent = curso.horario;
  document.getElementById("aula").textContent = curso.aula;
}

// Mostrar fecha actual en español
const fechaEl = document.getElementById("fecha-actual");
const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const fechaHoy = new Date().toLocaleDateString('es-ES', opcionesFecha);
fechaEl.textContent = fechaHoy.charAt(0).toUpperCase() + fechaHoy.slice(1);
