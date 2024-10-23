window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  // Перевірка, чи прокрутили більше ніж 50 пікселів
  if (window.scrollY > 50) {
    header.classList.add("scrolled"); // Додаємо клас, якщо прокрутка більше 50 пікселів
  } else {
    header.classList.remove("scrolled"); // Видаляємо клас, якщо менше 50 пікселів
  }
});
