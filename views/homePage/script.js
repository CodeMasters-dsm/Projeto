
// Espera o carregamento total do DOM
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os itens com submenu
  const dropdowns = document.querySelectorAll(".menu .dropdown");

  dropdowns.forEach(dropdown => {
    // Seleciona o link principal
    const trigger = dropdown.querySelector("a");

    trigger.addEventListener("click", function (e) {
      e.preventDefault(); // Evita o comportamento padrão do link

      // Fecha outros submenus
      dropdowns.forEach(item => {
        if (item !== dropdown) {
          item.classList.remove("ativo");
        }
      });

      // Alterna a classe 'ativo' para mostrar ou esconder o submenu
      dropdown.classList.toggle("ativo");
    });
  });

  // Fecha o submenu se clicar fora do menu
  document.addEventListener("click", function (e) {
    const isClickInsideMenu = e.target.closest(".menu");
    if (!isClickInsideMenu) {
      dropdowns.forEach(dropdown => dropdown.classList.remove("ativo"));
    }
  });
});

