document.addEventListener('DOMContentLoaded', function () {
  const materias = document.querySelectorAll('.materia');

  materias.forEach(function (materia) {
    materia.addEventListener('click', function () {
      alert(`Haz hecho clic en: ${this.textContent}`);
    });
  });
});
function mostrarRequisito(nombre, requisito) {
  alert(`${nombre}\n\n${requisito}`);
}
