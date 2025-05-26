  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".carousel-button.prev");
  const nextBtn = document.querySelector(".carousel-button.next");
  const dots = document.querySelectorAll(".dot");

  let index = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      updateCarousel();
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".menu .dropdown");
    const menuToggle = document.getElementById("menu-toggle");
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

    // Toggle do menu mobile
    menuToggle.addEventListener("click", () => {
      menuList.classList.toggle("ativo");
    });
  });
