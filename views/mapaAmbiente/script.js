
const ambientesTerreo = [
  "Laboratório de Análises Ambientais 01",
  "Laboratório de Desenho e Topografia 02",
  "Laboratório de Microbiologia Ambiental 03",
  "Laboratório de Química Ambiental 04"
];

const ambientesPrimeiroAndar = [
  "Laboratório de Informática 101",
  "sala de aula 102",
  "Laboratório de Informática 103",
  "sala de aula 104",
  "Laboratório de Informática 105",
  "sala de aula 106",
  "Laboratório de Informática 107",
  "Laboratório de Informática 108",
  "sala Maker 110"
];

const ambientesSegundoAndar = [
  "Sala de Áudio e Vídeo 201",
  "Sala de aula 202",
  "Laboratório UNIVESP 203",
  "Sala de aula 204",
  "Laboratório Informática 205",
  "Sala de aula 206",
  "Laboratório Informática 207",
  "Laboratório de Biologia 208",
  "Laboratório Informática 209",
  "Sala de Áudio e Vídeo 210"
];


const dadosSalas = {
  "Laboratório de Análises Ambientais 01": [
    { dia: "SEGUNDA", disciplina: "Análise de Água", horario: "18:45 - 21:15", professor: "Prof.ª Ana Souza" },
    { dia: "QUARTA", disciplina: "Técnicas de Laboratório", horario: "19:00 - 22:30", professor: "Prof. Marcos Leal" }
  ],
  "Laboratório de Desenho e Topografia 02": [
    { dia: "TERÇA", disciplina: "Topografia Aplicada", horario: "18:45 - 22:15", professor: "Prof. João Ribeiro" },
    { dia: "QUINTA", disciplina: "Desenho Técnico", horario: "19:30 - 22:00", professor: "Prof.ª Marta Oliveira" }
  ],
  "Laboratório de Microbiologia Ambiental 03": [
    { dia: "SEGUNDA", disciplina: "Microbiologia Geral", horario: "18:45 - 22:15", professor: "Prof. Carlos Lima" },
    { dia: "SEXTA", disciplina: "Higiene Ambiental", horario: "19:00 - 21:30", professor: "Prof.ª Fernanda Gomes" }
  ],
  "Laboratório de Química Ambiental 04": [
    { dia: "TERÇA", disciplina: "Química Orgânica", horario: "18:45 - 21:15", professor: "Prof. Rafael Torres" },
    { dia: "QUARTA", disciplina: "Análises Químicas", horario: "19:00 - 22:00", professor: "Prof.ª Camila Nunes" }
  ],
  "Laboratório de Informática 101": [
    { dia: "SEGUNDA", disciplina: "Algoritmos", horario: "18:45 - 22:15", professor: "Prof. Júlio César" }
  ],
  "sala de aula 102": [
    { dia: "TERÇA", disciplina: "Matemática Aplicada", horario: "19:00 - 22:00", professor: "Prof.ª Larissa Monteiro" }
  ],
  "Laboratório de Informática 103": [
    { dia: "QUARTA", disciplina: "Redes de Computadores", horario: "18:45 - 22:15", professor: "Prof. Alan Costa" }
  ],
  "sala de aula 104": [
    { dia: "QUINTA", disciplina: "Empreendedorismo", horario: "19:00 - 22:00", professor: "Prof.ª Bianca Ramos" }
  ],
  "Laboratório de Informática 105": [
    { dia: "SEXTA", disciplina: "Desenvolvimento Web", horario: "18:45 - 22:15", professor: "Prof. Eduardo Leal" }
  ],
  "sala de aula 106": [
    { dia: "SEGUNDA", disciplina: "Ética Profissional", horario: "19:30 - 21:30", professor: "Prof. Roberto Dias" }
  ],
  "Laboratório de Informática 107": [
    { dia: "TERÇA", disciplina: "Programação Orientada a Objetos", horario: "18:45 - 22:15", professor: "Prof. Vinícius Lima" }
  ],
  "Laboratório de Informática 108": [
    { dia: "QUARTA", disciplina: "Inteligência Artificial", horario: "19:00 - 22:30", professor: "Prof.ª Carla Menezes" }
  ],
  "sala Maker 110": [
    { dia: "SEXTA", disciplina: "Projetos Inovadores", horario: "18:45 - 21:45", professor: "Prof. Arthur Soares" }
  ],
  "Sala de Áudio e Vídeo 201": [
    { dia: "SEGUNDA", disciplina: "Comunicação Visual", horario: "18:45 - 22:15", professor: "Prof.ª Amanda Costa" }
  ],
  "Sala de aula 202": [
    { dia: "TERÇA", disciplina: "Gestão de Projetos", horario: "19:00 - 22:00", professor: "Prof. Lucas Pereira" }
  ],
  "Laboratório UNIVESP 203": [
    { dia: "QUARTA", disciplina: "Programação para Internet", horario: "18:45 - 22:15", professor: "Prof. Bruno Lima" }
  ],
  "Sala de aula 204": [
    { dia: "QUINTA", disciplina: "Administração Pública", horario: "19:00 - 22:00", professor: "Prof.ª Sônia Oliveira" }
  ],
  "Laboratório Informática 205": [
    { dia: "SEXTA", disciplina: "Banco de Dados", horario: "18:45 - 22:15", professor: "Prof. Ricardo Souza" }
  ],
  "Sala de aula 206": [
    { dia: "SEGUNDA", disciplina: "Psicologia Organizacional", horario: "19:30 - 21:30", professor: "Prof.ª Helena Martins" }
  ],
  "Laboratório Informática 207": [
    { dia: "TERÇA", disciplina: "Computação em Nuvem", horario: "18:45 - 22:15", professor: "Prof. Guilherme Tavares" }
  ],
  "Laboratório de Biologia 208": [
    { dia: "QUARTA", disciplina: "Biologia Ambiental", horario: "19:00 - 22:30", professor: "Prof.ª Juliana Lopes" }
  ],
  "Laboratório Informática 209": [
    { dia: "QUINTA", disciplina: "Desenvolvimento Mobile", horario: "18:45 - 22:15", professor: "Prof. Felipe Almeida" }
  ],
  "Sala de Áudio e Vídeo 210": [
    { dia: "SEXTA", disciplina: "Produção de Vídeo", horario: "18:45 - 22:15", professor: "Prof.ª Natália Ribeiro" }
  ]
};


function carregarAmbientes(ambientes) {
  const mapa = document.getElementById('mapa-salas');
  mapa.innerHTML = ''; // Limpa o mapa atual

  ambientes.forEach(nome => {
    const botao = document.createElement('button');
    botao.classList.add('sala');
    botao.textContent = nome;
    botao.addEventListener('click', () => carregarItinerario(nome));
    mapa.appendChild(botao);
  });
}


function carregarItinerario(nomeSala) {
  const itinerario = document.querySelector('.itinerario');
  itinerario.style.display = 'block';


  document.querySelectorAll('.sala').forEach(btn => {
    btn.classList.remove('selecionada');
  });


  const botaoClicado = Array.from(document.querySelectorAll('.sala'))
    .find(btn => btn.textContent === nomeSala);
  if (botaoClicado) {
    botaoClicado.classList.add('selecionada');
  }


  const dados = dadosSalas[nomeSala];
  if (dados) {
    let html = `<h3>ITINERÁRIO</h3>`;
    dados.forEach(item => {
      html += `
        <div class="dia">
          <strong>${item.dia}</strong>
          <p>${item.disciplina} – ${item.horario}<br><em>${item.professor}</em></p>
        </div>
      `;
    });
    itinerario.innerHTML = html;
  } else {
    itinerario.innerHTML = `<h3>ITINERÁRIO</h3><p>Nenhum dado disponível para esta sala.</p>`;
  }
}


document.querySelectorAll('.filtro').forEach(botao => {
  botao.addEventListener('click', () => {
    const texto = botao.textContent.trim();

    if (texto === "Térreo") {
      carregarAmbientes(ambientesTerreo);
    } else if (texto === "1º Andar") {
      carregarAmbientes(ambientesPrimeiroAndar);
    } else if (texto === "2º Andar") {
      carregarAmbientes(ambientesSegundoAndar);
    }


    document.querySelector('.itinerario').style.display = 'none';
  });
});