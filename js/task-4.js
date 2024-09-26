// Отримуємо посилання на форму
const form = document.querySelector(".login-form");

// Додаємо обробник події submit на форму
form.addEventListener("submit", (event) => {
  // Запобігаємо перезавантаженню сторінки
  event.preventDefault();

  // Отримуємо значення полів форми
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  // Перевіряємо, чи всі поля заповнені
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  // Створюємо об'єкт з даними форми
  const formData = {
    email,
    password,
  };

  // Виводимо об'єкт з даними в консоль
  console.log(formData);

  // Очищаємо форму після сабміту
  form.reset();
});
