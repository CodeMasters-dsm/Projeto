document.addEventListener("DOMContentLoaded", function () {

  const dropdowns = document.querySelectorAll(".menu .dropdown");

  dropdowns.forEach(dropdown => {

    const trigger = dropdown.querySelector("a");

    trigger.addEventListener("click", function (e) {
      e.preventDefault();


      dropdowns.forEach(item => {
        if (item !== dropdown) {
          item.classList.remove("ativo");
        }
      });


      dropdown.classList.toggle("ativo");
    });
  });


  document.addEventListener("click", function (e) {
    const isClickInsideMenu = e.target.closest(".menu");
    if (!isClickInsideMenu) {
      dropdowns.forEach(dropdown => dropdown.classList.remove("ativo"));
    }
  });
});