// Приложение включает в себя форму со следующими элементами:

// Поле "Рост, см":
// label - Рост, см*
// placeholder - Введите свой рост
// тип поля - number
// обязательное поле
// Поле "Выберете пол":
// label - Выберете пол*
// опции - Мужской, Женский
// тип поля - select
// обязательное поле
// Кнопка "Рассчитать":
// текст кнопки - Рассчитать
// Общие требования:

// Все лейблы находятся над полями
// В соответствии с требованиями к полям, укажите валидацию с помощью атрибутов
// Стилизуйте на своё усмотрения
// формула расчета женского веса: рост - (100 + (рост - 100) : 10)
// формула расчета мужского веса: рост - (100 + (рост - 100) : 20)
// При клике на кнопку "Расчитать", под кнопкой показывается сообщение "Ваш идеальный вес: 'результат'"

// Выбор необходимых элементов
let buttonResult = document.querySelector(".result-button");
let resultContainer = document.querySelector(".result");
let form = document.querySelector("#form");
// console.log(form);

// Вариант 1 - использование кнопки с типом button
// // Создание функции для обработки события нажатия на кнопку "Рассчитать"
// const calculateIdealWeight = () => {
//   let height = form.height.value;
//   //альтернативный метод выбора элемента
//   // let height = document.querySelector("#person-height").value;
//   let gender = form.gender.value;
//   // console.log(typeof height);
//   let personHeight = Number(height);

//   if (personHeight && gender) {
//     let idealWeight;
//     if (gender === "male") {
//       idealWeight = personHeight - (100 + (personHeight - 100) / 20);
//     } else if (gender === "female") {
//       idealWeight = personHeight - (100 + (personHeight - 100) / 10);
//     }
//     resultContainer.textContent = `Идеальный вес: ${Math.round(
//       idealWeight
//     )} кг`;
//   } else {
//     alert("Введите рост и пол");
//   }
// };

// //Привязываем слушателя к кнопке
// buttonResult.addEventListener("click", calculateIdealWeight);

// Вариант 2 - использование кнопки с типом submit
const calculateIdealWeight = (event) => {
  event.preventDefault();
  let height = form.height.value;
  let gender = form.gender.value;
  // console.log(height);

  let personHeight = Number(height);

  let idealWeight;
  if (gender === "male") {
    idealWeight = personHeight - (100 + (personHeight - 100) / 20);
  } else if (gender === "female") {
    idealWeight = personHeight - (100 + (personHeight - 100) / 10);
  }
  resultContainer.textContent = `Идеальный вес: ${Math.round(idealWeight)} кг`;
};

//Привязываем слушателя к форме
form.addEventListener("submit", calculateIdealWeight);
