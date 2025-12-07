const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.body;

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileMenu.classList.toggle("active");

  // Блокуємо скрол body коли меню відкрите
  if (mobileMenu.classList.contains("active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
});

// Закриваємо меню при кліку на посилання
const mobileLinks = document.querySelectorAll(
  ".mobile-menu__link, .mobile-menu__socials a"
);
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    mobileMenu.classList.remove("active");
    body.style.overflow = "";
  });
});
