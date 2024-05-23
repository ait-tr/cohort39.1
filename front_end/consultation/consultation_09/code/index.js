// const APP_ID = "eea75aae6dbe00233ac1efadf2d99a2a";
// const CITY_NAME = "kgjk";
// const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${APP_ID}`;

const getDataButton = document.querySelector("#get-button");
const userDataContainer = document.querySelector(".user-data-container");
const spinner = document.querySelector(".spinner");

// Привер обработки с помощью блока try catch
// const getWeather = async () => {
//   try {
//     const response = await fetch(URL);
//     // console.log(response);
//     //в result может лежать как ошибка, например, при статус коде 404, так и ожмдаемые данные при статус коде 200
//     const result = await response.json();
//     console.log(result);

//     //В зависимости от того, какое значение свойства response.ok нам вернётся (true или false) мы обрабатываем успешный результат при значении true
//     //либо вызываем исключение (выбрасываем ошибку в блоке try) при значении false
//     if (response.ok) {
//       console.log(`Success: ${result}`);
//     } else {
//       // 1 вариант
//       // throw new Error("Some response error message");
//       // 2 вариант
//       // throw new Error(`Status: ${result.cod} - ${result.message}`);
//       // 3 вариант
//       //1 аргумент Object.assign - копируемый объект, второй аргумент - расширение объекта(дополнительные свойства в виде объекта)
//       throw Object.assign(new Error("Some response error message"), {
//         responseData: result,
//       });
//       // Итоговый объект ошибки (пример)
//       // {
//       //   message: "Some response error message",
//       //   responseData: {
//       //     cod: '404',
//       //     message: 'City not found'
//       //   }
//       // }
//     }
//   } catch (error) {
//     // userDataContainer.textContent = error.message;
//     console.log(error.responseData.cod);
//   }
// };

// getDataButton.addEventListener("click", getWeather);

//Приложение для получения и обработки данных рандомного пользователя
let userList = [];

const getRandomUser = async () => {
  spinner.classList.add("visible");
  try {
    const response = await fetch("https://randomuser.me/api/");
    const result = await response.json();
    console.log(result);

    if (response.ok) {
      const userData = result.results[0];
      userList = [...userList, `${userData.name.title} ${userData.name.first}`];
      // userDataContainer.textContent = `${userData.name.title} ${userData.name.first}`;
      userDataContainer.textContent = userList;
      //Задание: отобразить каждый из элементов массива в отдельном теге на странице с помощью forEach
      console.log(userList);
    } else {
      throw Object.assign(new Error("Some response error message"), {
        responseData: result,
      });
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    spinner.classList.remove("visible");
  }
};

getDataButton.addEventListener("click", getRandomUser);
