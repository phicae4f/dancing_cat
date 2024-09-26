// Информация, на основе которой генерится сайт
let heroes = [["Рыба", "рыбная"], ["Сандаль", "модный"]];
let nameInput = document.getElementById("heroName");
let classInput = document.getElementById("heroClass");
let newHeroName = nameInput.value;
let newHeroClass = classInput.value;
console.log(newHeroName, newHeroClass);
// Функция, которая отображает героев на странице

function displayHeroes()  {
  // Достаём контейнер, в который будем добавлять новые карточки героев
const heroesContainer = document.getElementById("heroesContainer");
  // Очищаем текущее содержимое
heroesContainer.innerHTML = '';

  // С помощью цикла проходимся по массиву героев
  // (переменная i будет равняться индексу элемента в массиве)
for (let i = 0; i < heroes.length; i++) {
      // Создаём элемент, в который будем добавлять информацию о герое
  let heroDiv = document.createElement("div");
  heroDiv.classList.add('cardNew')
  heroesContainer.appendChild(heroDiv);
      // Записываем в созданный элемент разметку, подставляя необходимые данные
      // (данные достаём из массивов по индексу – если не помнишь, как это делать,
      // перечитай наш урок про массивы)
      // Так как элемент массива heroes[i] и есть массив - hero = ["имя", "класс"],
      // нужно взять отдельно имя и класс по индексу массива: [0]- имя [1]- класс
  heroDiv.innerHTML = `<h3>${heroes[i][0]}</h3><p>${heroes[i][1]}</p>`;

}

}
// Вызываем написанную функцию
displayHeroes();



function addHero() {
  if (nameInput.value && classInput.value) {
  let nameInput = document.getElementById("heroName");
  let classInput = document.getElementById("heroClass");
  let newHero = [nameInput.value, classInput.value];
  heroes.push(newHero);
  displayHeroes();
  nameInput.value = "";
  classInput.value = "";
  } else
  alert('Введите данные корректно');
}
document.getElementById("addButton").addEventListener("click", addHero);

