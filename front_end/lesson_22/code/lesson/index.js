const a = setTimeout(() => {}, 1);
// console.log(a);
//  в консоли будет id таймера

const func = () => {
  const b = 5 + 3;
  return b;
};

const result = func();
// console.log(result);
//  в консоли будет 8 (благодаря возврату значения из функции, которое происходит с помощью слова return)

//Промисы
// Условный пример вызова функций для удачного и неудачного выполнения асинхронного действия (fetch())
// const result = fetch();

// if(result === 'ok'){
//   resolveF(result)
// }else{
//   rejectF(result)
// }

// {
//   state: filfilled
//   result: 'ok'
// }

//пример вызова функций resolveF, rejectF
let myPromise = new Promise((resolveF, rejectF) => {
  //пример данных с сервера, в случае удачного завершение
  // let response = {
  //   statusResponse: 200,
  //   data: {
  //     firstName: "John",
  //     lastName: "Johnson",
  //     age: 34,
  //   },
  // };

  //пример данных с сервера, в случае завершение запроса с ошибкой
  let response = {
    statusResponse: 400,
    error: {
      message: "Bad request",
    },
  };

  //завершаем промис переводя его в состояние fulfilled c помощью функции resolve
  // setTimeout(() => {
  //   resolveF(response);
  // }, 2000);

  //завершаем промис переводя его в состояние rejected c помощью функции reject
  setTimeout(() => {
    rejectF(response);
  }, 1000);
});

// console.log(myPromise);

//пример вызова функций resolve и reject, в зависимости полученного значения
let myPromise2 = new Promise((resolve, reject) => {
  //пример данных с сервера, в случае удачного завершение
  //const response = fetch('url');
  let response = {
    statusResponse: "200",
    data: {
      firstName: "John",
      lastName: "Johnson",
      age: 34,
    },
  };

  //пример данных с сервера, в случае завершение запроса с ошибкой
  // let response = {
  //   statusResponse: "400",
  //   error: {
  //     message: "Bad request",
  //   },
  // };

  setTimeout(() => {
    if (response.statusResponse === "200") {
      resolve(response.data);
      //{status: 'fulfilled', result: response.data}
    } else {
      reject(response.error);
    }
  }, 5000);
});

// console.log(myPromise2);

// Пример работы с DOM и Promise
const pageContainer = document.querySelector(".page-container");
const loadInd = document.querySelector("#load-ind");

//обработка результата промиса с помощью функций then, catch, finally
myPromise2
  .then((userData) => {
    // console.log(userData);
    const dataElement = document.createElement("div");
    dataElement.innerHTML = `
      <h2>User Data</h2>
      <p>First name: ${userData.firstName}</p>
      <p>Last name: ${userData.lastName}</p>
      <p>Age: ${userData.age}</p>
    `;
    pageContainer.append(dataElement);
  })
  .catch((error) => {
    // console.log(error);
    const errorElement = document.createElement("div");
    errorElement.textContent = error.message;
    pageContainer.append(errorElement);
  })
  .finally(() => {
    loadInd.classList.add("hidden");
  });
