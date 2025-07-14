document.addEventListener('DOMContentLoaded', function () {
  const materias = document.querySelectorAll('.materia');

  materias.forEach(function (materia) {
    materia.addEventListener('click', function () {
      alert(`Haz hecho clic en: ${this.textContent}`);
    });
  });
});
