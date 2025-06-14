async function carregarAmbientes(level) {
  try {
    const response = await fetch(`http://localhost:3000/room/${level}`);
    if (!response.ok) throw new Error('Erro ao carregar salas');
    const salas = await response.json();

    const mapa = document.getElementById('mapaSalas');
    mapa.innerHTML = '';

    salas.forEach(sala => {
      const botao = document.createElement('button');
      botao.classList.add('sala');
      botao.textContent = sala.description_ro;
      botao.dataset.id = sala.id_ro;  // guardar o id para usar depois
      botao.addEventListener('click', () => carregarItinerario(sala.id_ro, sala.name_ro));
      mapa.appendChild(botao);
    });

    // Esconder o itinerário ao trocar andar
    document.querySelector('.itinerario').style.display = 'none';

  } catch (error) {
    console.error('Erro ao buscar salas:', error);
  }
}

async function carregarItinerario(idSala, nomeSala) {
  try {
    // Marcar botão selecionado
    document.querySelectorAll('.sala').forEach(btn => {
      btn.classList.remove('selecionada');
    });
    const botaoClicado = Array.from(document.querySelectorAll('.sala')).find(btn => btn.dataset.id == idSala);
    if (botaoClicado) botaoClicado.classList.add('selecionada');

    const response = await fetch(`http://localhost:3000/room-schedule/${idSala}`);
    if (!response.ok) throw new Error('Erro ao carregar itinerário');
    const dados = await response.json();

    const itinerario = document.querySelector('.itinerario');
    itinerario.style.display = 'block';

    if (dados.length === 0) {
      itinerario.innerHTML = `<h3>ITINERÁRIO</p>`;
      return;
    }

    let html = `<h3>ITINERÁRIO</h3>`;
    dados.forEach(item => {
      html += `
        <div class="dia">
          <strong>${item.dia.toUpperCase()}</strong>
          <p>${item.disciplina} – ${item.inicio} - ${item.fim}<br><em>${item.professor}</em></p>
        </div>
      `;
    });
    itinerario.innerHTML = html;

  } catch (error) {
    console.error('Erro ao buscar room schedule:', error);
  }
}

// Event listeners dos botões de filtro de andar
document.querySelectorAll('.filtro').forEach(botao => {
  botao.addEventListener('click', () => {
    const texto = botao.textContent.trim();

    if (texto === "Térreo") {
      carregarAmbientes(0);
    } else if (texto === "1º Andar") {
      carregarAmbientes(1);
    } else if (texto === "2º Andar") {
      carregarAmbientes(2);
    }
  });
});

// Opcional: carregar automaticamente o térreo ao carregar a página
window.onload = () => {
  carregarAmbientes(0);
};