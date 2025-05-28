document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".menu .dropdown");
  const menuList = document.querySelector(".menu ul");

  // Ativa/desativa dropdowns
  dropdowns.forEach(dropdown => {
    const triggerLink = dropdown.querySelector("a");

    triggerLink.addEventListener("click", (e) => {
      e.preventDefault();

      dropdowns.forEach(other => {
        if (other !== dropdown) other.classList.remove("ativo");
      });

      dropdown.classList.toggle("ativo");
    });
  });

  // Fecha dropdowns ao clicar fora
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu")) {
      dropdowns.forEach(dropdown => dropdown.classList.remove("ativo"));
    }
  });
});
