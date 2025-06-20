document.querySelectorAll('.dropdown').forEach(dropdown => {
    const button = dropdown.querySelector('.filtro');
    const menu = dropdown.querySelector('.dropdown-menu');

    button.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('visivel');
    });

    dropdown.querySelectorAll('.opcao').forEach(opcao => {
        opcao.addEventListener('click', () => {
            button.textContent = opcao.textContent;
            button.dataset.valor = opcao.textContent;
            menu.classList.remove('visivel');
        });
    });
});

window.addEventListener('click', function () {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('visivel');
    });
});

document.getElementById('btn-procurar').addEventListener('click', () => {
  const curso = document.querySelector('[data-tipo="curso"]')?.closest('.dropdown')?.querySelector('.filtro')?.dataset.valor;
  const turno = document.querySelector('[data-tipo="turno"]')?.closest('.dropdown')?.querySelector('.filtro')?.dataset.valor;
  const semestre = document.querySelector('[data-tipo="semestre"]')?.closest('.dropdown')?.querySelector('.filtro')?.dataset.valor;

  if (curso && turno && semestre) {
    fetch(`/aulas?curso=${encodeURIComponent(curso)}&turno=${encodeURIComponent(turno)}&semestre=${encodeURIComponent(semestre)}`)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          alert('Erro ao buscar aulas: ' + data.erro);
          return;
        }
        console.log("Aulas recebidas:", data);
        exibirGrade(data);
      })
      .catch(err => {
        console.error("Erro ao buscar aulas:", err);
      });
  } else {
    alert("Selecione todas as opções antes de procurar.");
  }
});

function exibirGrade(aulas) {
  const diasSemana = {
    'segunda-feira': '',
    'terça-feira': '',
    'quarta-feira': '',
    'quinta-feira': '',
    'sexta-feira': ''
  };

  aulas.forEach(aula => {
    const blocoAula = `
      <div class="aula">
        <div class="nome-disciplina">${aula.disciplina_nome}</div>
        <div class="horario">Horário: ${aula.horario_inicio} - ${aula.horario_fim}</div>
        <div class="professor">Professor: ${aula.professor}</div>
        <div class="sala">Sala: ${aula.sala}</div>
      </div>
    `;

    if (diasSemana[aula.dia_da_semana.toLowerCase()]) {
      diasSemana[aula.dia_da_semana.toLowerCase()] += blocoAula;
    } else {
      diasSemana[aula.dia_da_semana.toLowerCase()] = blocoAula;
    }
  });

  const divsDia = document.querySelectorAll('.semana .dia');
  divsDia.forEach(div => {
    const dia = div.querySelector('strong').textContent.toLowerCase();
    let chave = dia.includes('feira') ? dia : dia + '-feira';

    div.innerHTML = `<strong>${div.querySelector('strong').textContent}</strong>${diasSemana[chave] || '<p>Sem aula</p>'}`;
  });
}

document.getElementById('exportar').addEventListener('click', () => {
  
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Relatório de Horários", 14, 15);

  
  const dadosPDF = [];

  
  document.querySelectorAll('.semana .dia').forEach(divDia => {
    const dia = divDia.querySelector('strong').textContent.trim();

    
    const aulas = divDia.querySelectorAll('.aula');

    if (aulas.length === 0) {
      
      dadosPDF.push([dia, 'Sem aula', '', '', '']);
    } else {
      aulas.forEach(aula => {
        const disciplina = aula.querySelector('.nome-disciplina')?.textContent || '';
        const horario = aula.querySelector('.horario')?.textContent.replace('Horário: ', '') || '';
        const professor = aula.querySelector('.professor')?.textContent.replace('Professor: ', '') || '';
        const sala = aula.querySelector('.sala')?.textContent.replace('Sala: ', '') || '';
        dadosPDF.push([dia, disciplina, horario, professor, sala]);
      });
    }
  });

 
  doc.autoTable({
    startY: 25,
    head: [['Dia', 'Disciplina', 'Horário', 'Professor', 'Sala']],
    body: dadosPDF,
    styles: { fontSize: 10 },
    headStyles: { fillColor: [41, 128, 185] }
  });

  doc.save('horarios.pdf');
});
