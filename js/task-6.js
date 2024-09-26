function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо посилання на елементи
const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

// Функція для створення колекції елементів
function createBoxes(amount) {
  // Очищуємо попередні елементи перед створенням нових
  boxesContainer.innerHTML = "";

  const boxes = [];
  let size = 30; // Початковий розмір першого div

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = "10px";
    size += 10; // Збільшуємо розмір кожного наступного div
    boxes.push(box);
  }

  // Додаємо всі створені елементи в DOM за одну операцію
  boxesContainer.append(...boxes);
}

// Функція для очищення колекції елементів
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

// Обробник події для створення елементів
createButton.addEventListener("click", () => {
  const amount = parseInt(input.value.trim());

  // Перевіряємо, чи введене значення знаходиться в межах від 1 до 100
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

// Обробник події для очищення елементів
destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
