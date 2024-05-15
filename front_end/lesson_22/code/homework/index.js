// 1 вариант таймера - без кнопки
// const timer = document.querySelector(".timer");

// const startTimer = () => {
//   let seconds = 60;

//   const updateTimer = () => {
//     timer.textContent = seconds;
//     seconds--;

//     if (seconds < 0) {
//       clearInterval(timerId);
//     }
//   };

//   const timerId = setInterval(updateTimer, 1000);
// };

// startTimer();

// 2 вариант таймера - с кнопкой
//выбор элементов, с которыми мы будем работать
const timer = document.querySelector(".timer");
const button = document.querySelector(".timer-button");

//Создаем функцию, которая отвечает за передачу значения в элемент timer на странице
// и выполнения функции уменьшения значения таймера каждую секунду
const startTimer = () => {
  //создаём начальное значение таймера - 60
  let seconds = 900;

  //создаём функцию, которая будет уменьшать переменную seconds и отправлять значение в html элемент timer
  const updateTimer = () => {
    // button.style.display = "none";
    //делаем кнопку неактивной с помощью добавления атрибута disabled через метод setAttribute
    button.setAttribute("disabled", "");
    timer.textContent = seconds;
    seconds--;

    //с помощью условия контролируем таймер, ограничивая его изменение до 0
    if (seconds < 0) {
      // button.style.display = "block";
      //делаем кнопку активной с помощью добавления атрибута disabled через метод removeAttribute
      button.removeAttribute("disabled");
      clearInterval(timerId);
    }
  };

  //вызываем метод setInterval, который отвечает за выполнение функции updateTimer каждую секунду
  //возвращаемое значение id таймера, при вызове метода setInterval, сохраняем в переменную timerId
  const timerId = setInterval(updateTimer, 1000);
  console.log(timerId);
};

button.addEventListener("click", startTimer);
