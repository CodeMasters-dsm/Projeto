function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('expandida');
}

window.addEventListener('resize', () => {
  const sidebar = document.getElementById('sidebar');

  if (window.innerWidth <= 768) {
    sidebar.classList.add('expandida');
  } else {
    sidebar.classList.remove('expandida');
  }
});


window.addEventListener('load', () => {
  const sidebar = document.getElementById('sidebar');

  if (window.innerWidth <= 768) {
    sidebar.classList.add('expandida');
  } else {
    sidebar.classList.remove('expandida');
  }
});

document.addEventListener('click', function (event) {
  const sidebar = document.getElementById('sidebar');
  const toggle = document.querySelector('.menu-toggle');


  if (
    window.innerWidth <= 768 &&
    sidebar.classList.contains('expandida') &&
    !sidebar.contains(event.target) &&
    !toggle.contains(event.target)
  ) {
    sidebar.classList.remove('expandida');
  }


});

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('expandida');
}

function mostrarSecao(secao) {
  const conteudo = document.getElementById("conteudo-dinamico");
  const profile = document.getElementById("profile-section");

  if (secao === 'perfil') {
    conteudo.innerHTML = `
     
    `;
    profile.style.display = 'flex';
  } else if (secao === 'administrativo') {
    conteudo.innerHTML = `
      <div class="secao-admin">
        <a href="sistemahorarios.html" class="titulo-link">
          Sistema de Horários
          <img src="../../assets/adm/download.svg" alt="seta" class="seta" />
        </a>

        <a href="material-apoio.html" class="titulo-link">
          Material de Apoio
          <img src="../../assets/adm/download.svg" alt="seta" class="seta" />
        </a>

        <a href="mural.html" class="titulo-link">
          Mural
          <img src="../../assets/adm/download.svg" alt="seta" class="seta" />
        </a>

        <a href="calendario-academico.html" class="titulo-link">
          Calendário Acadêmico
          <img src="../../assets/adm/download.svg" alt="seta" class="seta" />
        </a>
      </div>
`;

    profile.style.display = 'none';
  }

  // Fecha a sidebar no mobile
  const sidebar = document.getElementById('sidebar');
  if (window.innerWidth <= 768) {
    sidebar.classList.remove('expandida');
  }
}
