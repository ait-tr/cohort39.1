//setTimeout
const delayedFunction = () => {
  console.log("Функция выполниться через 3 секунды");
};

// setTimeout(delayedFunction, 3000); //3000=1s

//setTimeout с аргументами
const greet = (userName, userAge, isAdmin) => {
  console.log(`Hello ${userName}, ${userAge}, ${isAdmin}`);
};

// setTimeout(greet, 2000, "Ted", 23, true);

//Очередь вызовов
// console.log("1");

// console.log("2");

// setTimeout(() => {
//   console.log("3");
// });

// console.log("4");

// setTimeout(() => {
//   console.log("5");
// }, 1000);

// console.log("6");

//два setTimeout c равными значениями задержки
// setTimeout(() => {
//   console.log("first");
// }, 2000);

// setTimeout(() => {
//   console.log("second");
// }, 2000);

// гибкая передача задержки
const showMessage = (ms) => {
  const messageTimer = ms / 1000;
  const alertMessage = () => {
    console.log(`Прошло ${messageTimer} секунд(ы)`);
  };
  setTimeout(alertMessage, ms);

  console.log("1");
};

// showMessage(0);

// console.log("2");

//setInterval
//первый вариант очистки таймера
const simpleCounter1 = () => {
  let count = 1;

  let countFunc = () => {
    console.log(count);
    count++;

    if (count > 10) {
      clearTimeout(timerId);
    }
  };

  const timerId = setInterval(countFunc, 1000);
};

// simpleCounter1();

//второй вариант очистки таймера
const simpleCounter2 = () => {
  let count = 1;

  let countFunc = () => {
    console.log(count);
    count++;
  };

  const timerId = setInterval(countFunc, 1000);

  // const clearTimer = () => {
  //   clearInterval(timerId);
  // };

  // setTimeout(clearTimer, 11000);

  setTimeout(() => {
    clearInterval(timerId);
  }, 11000);
};

// simpleCounter2();

//callback
const fetchData = (callback) => {
  //асинхронная операция, на которую нужно время, например, запрос на сервер
  setTimeout(() => {
    const data = "error";
    callback(data);
  }, 3000);
};

const processData = (data) => {
  if (data === "error" || data === "") {
    console.log("Перезагрузите страницу");
  } else {
    console.log(`Обработка данных ${data}`);
  }
};

// fetchData(processData);

console.log("Код идет дальше");

//Callback hell - example
const cookBacon = (callback) => {
  console.log("Cooking bacon...");
  setTimeout(() => {
    console.log("Bacon is done!");
    callback();
  }, 3000);
};

const cookEggs = (callback) => {
  console.log("Cooking eggs...");
  setTimeout(() => {
    console.log("Eggs are done!");
    callback();
  }, 4000);
};

const toastBread = (callback) => {
  console.log("Toasting bread...");
  setTimeout(() => {
    console.log("Toast is done!");
    callback();
  }, 2000);
};

const cookMeet = (callback) => {
  console.log("Cooking meet...");
  setTimeout(() => {
    console.log("Meet is done!");
    callback();
  }, 4000);
};

// toastBread(() => {
//   cookBacon(() => {
//     cookEggs(() => {
//       cookMeet(() => {
//         console.log("Sandwich is ready!");
//       });
//     });
//   });
// });

//Промисы
//Создадим промис, с успешным выполнением
let myPromise = new Promise((resolve, reject) => {
  //пример данных с сервера
  let userData = {
    statusResponse: 200,
    data: {
      firstName: "John",
      lastName: "Johnson",
      age: 34,
    },
  };

  setTimeout(() => {
    resolve(userData);
  }, 2000);
});

console.log(myPromise);
