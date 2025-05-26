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
  
  document.addEventListener('click', function(event) {
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
  