const changeButton = document.querySelector("#change-button");
const returnButton = document.querySelector("#return-button");
const superBox = document.querySelector(".super-box");

const changeBoxHandler = () => {
  // 1 вариант изменения стилей
  // superBox.style.background = "blueviolet";
  // superBox.style.color = "white";

  // 2 вариант изменения стилей - className
  // superBox.className = "new-box";

  // 3 вариант изменения стилей - classList
  // superBox.classList.add("new-box");

  // 4 вариант изменения стилей - setAttribute
  superBox.setAttribute("class", "super-box new-box");
};

const returnBoxHamdler = () => {
  //удаление класса
  superBox.classList.remove("new-box");
};

changeButton.addEventListener("click", changeBoxHandler);
returnButton.addEventListener("click", returnBoxHamdler);
