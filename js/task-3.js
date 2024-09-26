// Отримуємо посилання на елементи input та span
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// Додаємо обробник події "input" на поле вводу
nameInput.addEventListener("input", () => {
  const inputValue = nameInput.value.trim();
  nameOutput.textContent = inputValue === "" ? "Anonymous" : inputValue;
});
