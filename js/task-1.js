// Отримуємо всі елементи li з класом "item"
const categories = document.querySelectorAll("#categories .item");

// Виводимо кількість категорій
console.log(`Number of categories: ${categories.length}`);

// Проходимося по кожній категорії
categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryItems = category.querySelectorAll("ul li");

  // Виводимо назву категорії та кількість елементів у ній
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);
});
