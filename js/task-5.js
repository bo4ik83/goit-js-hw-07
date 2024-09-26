function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо посилання на необхідні елементи
const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const body = document.body;

// Додаємо обробник події "click" на кнопку
changeColorButton.addEventListener("click", () => {
  // Генеруємо випадковий колір
  const randomColor = getRandomHexColor();

  // Задаємо колір фону для body
  body.style.backgroundColor = randomColor;

  // Вставляємо значення кольору в текстовий вміст span.color
  colorSpan.textContent = randomColor;
});
