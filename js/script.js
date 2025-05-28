const estudiantes = [
  "HECTOR PEDRO ALAY ZAMBRANO",
  "ANDERSON MARLON ALVIA MERO",
  "CRISTOPHER EMANUEL ANCHUNDIA DELGADO",
  "DAYANA LISETH ANCHUNDIA GARCIA",
  "CESAR EMANUEL ARTEAGA MOLINA",
  "KELLY DAYANA CANCHINGRE QUEVEDO",
  "DIEGO SEBASTIAN CASANOVA CASTRO",
  "JHONNY CRISTHIAN CASTILLO MERO",
  "SAUL IVAN CASTRO MUÑOZ",
  "CRISTOPHER JOSUE CASTRO QUIJIJE",
  "JOHAN FRANKLIN CHOEZ SUAREZ",
  "ALAN JOEL COBEÑA NARANJO",
];

const cuerpoTabla = document.getElementById("cuerpo-tabla");

estudiantes.forEach((nombre, index) => {
  const fila = document.createElement("tr");

  fila.innerHTML = `
    <td>${index + 1}</td>
    <td class="col-nombre">${nombre}</td>
    <td><input type="checkbox" class="falta" data-index="${index}"></td>
    <td><input type="checkbox" class="atrasado" data-index="${index}"></td>
  `;

  cuerpoTabla.appendChild(fila);
});

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
