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
    <td><input type="checkbox" class="presente" data-index="${index}"></td>
    <td><input type="checkbox" class="falto" data-index="${index}"></td>
  `;

  cuerpoTabla.appendChild(fila);
});

document.addEventListener("change", (e) => {
  if (e.target.classList.contains("presente") || e.target.classList.contains("falto")) {
    const index = e.target.dataset.index;
    const presente = document.querySelector(`.presente[data-index="${index}"]`);
    const falto = document.querySelector(`.falto[data-index="${index}"]`);

    if (e.target === presente && presente.checked) {
      falto.checked = false;
    } else if (e.target === falto && falto.checked) {
      presente.checked = false;
    }
  }
});
