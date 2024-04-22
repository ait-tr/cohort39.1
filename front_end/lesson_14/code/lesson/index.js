// Выбор элементов из DOM дерева
// По id
let cardContainer = document.getElementById("card-container");
// console.log(cardContainer);

//По имени тега
let listElements = document.getElementsByTagName("li");
// console.log(listElements);

//По атрибуту name
let inputSearch = document.getElementsByName("search");
// console.log(inputSearch);

//По атрибуту class
let titles = document.getElementsByClassName("title");
// console.log(titles);

// Селекторы querySelector и querySelectorAll
let containers = document.querySelectorAll("div");
// console.log(containers);

let title = document.querySelector(".title");
// console.log(title);

// Добавление элемента на страницу
//Создание элемента - шаг 1
let newListItem = document.createElement("li");
console.log(newListItem);
//Заполнение элемента - шаг 2
newListItem.textContent = "Smith";
console.log(newListItem);
//Добавление элемента на страницу
let list = document.querySelector("ul");
// list.append(newListItem);
// list.prepend(newListItem);
// list.before(newListItem);
list.after(newListItem);

// Изменение содержимого элементов
// с помощью метода textContent
let mainTitle = document.querySelector("#main-title");
mainTitle.textContent = "Main title!";

// с помощью метода innerHTML
let cardTitle = document.querySelector("h2");
cardTitle.innerHTML = `
<a href=''>Profile link</a>
<span>- star</span>
`;

//Изменение стилей
let pageContainer = document.querySelector(".main-container");
pageContainer.style.background = "bisque";

//Удаление элемента
let lastElement = document.querySelector("#last-element");
lastElement.remove();

// Обработчики событий (для кнопок)
let addButton = document.querySelector(".add-button");
let hideButton = document.querySelector(".hide-button");
let userCardContainer = document.querySelector("#card-container");

let addCardFunction = () => {
  // userCardContainer.style.display = "flex";
  userCardContainer.style.opacity = "1";
  console.log("Add");
};

let hideCardFunction = () => {
  // userCardContainer.style.display = "none";
  userCardContainer.style.opacity = "0";
  console.log("Hide");
};

addButton.addEventListener("click", addCardFunction);
hideButton.addEventListener("click", hideCardFunction);

// Обработчики событий (для поля)
let searchField = document.querySelector("#input-search");

let changeSearchField = (event) => {
  console.log(event.target.value);
};

searchField.addEventListener("change", changeSearchField);

//Форма
let sendDataButton = document.querySelector(".send-data");

//обработчик события нажатия на кнопку Send data
let getData = () => {
  let mainForm = document.querySelector("#main-form");
  let result = document.querySelector(".result");

  let userNameValue = mainForm.userName.value;
  result.textContent = `User name is ${userNameValue}`;
};

sendDataButton.addEventListener("click", getData);
