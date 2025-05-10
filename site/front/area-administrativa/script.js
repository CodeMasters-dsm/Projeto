function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('expandida');
  }
  
  // Garante o comportamento correto ao redimensionar a tela
  window.addEventListener('resize', () => {
    const sidebar = document.getElementById('sidebar');
  
    if (window.innerWidth <= 768) {
      // No mobile, mantém o menu expandido
      sidebar.classList.add('expandida');
    } else {
      // Em telas grandes, remove a expansão automática
      sidebar.classList.remove('expandida');
    }
  });
  
  // Executa também ao carregar a página
  window.addEventListener('load', () => {
    const sidebar = document.getElementById('sidebar');
  
    if (window.innerWidth <= 768) {
      sidebar.classList.add('expandida');
    } else {
      sidebar.classList.remove('expandida');
    }
  });
  
  document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.querySelector('.menu-toggle');
  
    // Só fecha no mobile e se a sidebar estiver expandida
    if (
      window.innerWidth <= 768 &&
      sidebar.classList.contains('expandida') &&
      !sidebar.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      sidebar.classList.remove('expandida');
    }

    
  });
  