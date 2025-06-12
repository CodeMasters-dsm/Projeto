// Exibe as disciplinas do semestre escolhido
function mostrarDisciplinas(semestre) {
  const listaSemestres = document.getElementById('listaSemestres');
  const listaDisciplinas = document.getElementById(`disciplinas${semestre}`);

  // Oculta todas as listas de disciplinas
  document.querySelectorAll('[id^="disciplinas"]').forEach(el => {
    el.style.display = 'none';
  });

  if (listaSemestres && listaDisciplinas) {
    listaSemestres.style.display = 'none';
    listaDisciplinas.style.display = 'block';
  }

  console.log(`Você selecionou: ${semestre}º semestre`);
}

// Exibe informações da disciplina clicada
function toggleInfo(infoId) {
  console.log(`Toggle info para: ${infoId}`);

  // Oculta todas as informações
  document.querySelectorAll('.info').forEach(p => p.style.display = 'none');

  const info = document.getElementById(infoId);
  if (info) {
    info.style.display = 'block';
  }
}
