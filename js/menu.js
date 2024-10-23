(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const closeMenuLink = document.querySelectorAll(".mobile-nav-link");
  const letsTalkBtn = document.querySelector(".mobile-menu-button");
  const openBackdrop = document.querySelector(".backdrop");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
    openBackdrop.classList.toggle("is-hidden");

    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };

  const closeMenu = () => {
    mobileMenu.classList.remove("is-open");
    openBackdrop.classList.add("is-hidden");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  };

  // Закриття меню за допомогою клавіші Esc
  const handleKeydown = (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  };

  closeMenuLink.forEach((item) => item.addEventListener("click", toggleMenu));
  letsTalkBtn.addEventListener("click", toggleMenu);
  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  openBackdrop.addEventListener("click", closeMenu);

  document.addEventListener("keydown", handleKeydown);

  // Закриваємо мобільне меню на більш широких екранах
  //у випадку зміни орієнтаціїї пристрою
  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 1599px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
