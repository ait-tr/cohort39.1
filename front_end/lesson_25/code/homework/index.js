// - Нужно создать кнопку "Get Cat Fact", при клике на которую, будет выполняться GET запрос(используйте fetch). В ответе на запрос будет приходить случайный факт о котах
// - url: https://catfact.ninja/fact
// - После того как вы получите успешный ответ, разместите случайный факт о котах у себя на странице
// - Если запрос завершиться ошибкой, её нужно разместить на странице и выделить красным цветом
// - Каждый раз, когда происходит клик на кнопку, должен выполняться новый запрос и приходить новый факт о котах
// - Стилизуйте на ваше усмотрение

const getFactButton = document.querySelector("#get-fact-button");
const dataContainer = document.querySelector(".data-container");

const getCatFact = async () => {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    console.log(response);

    const catFactData = await response.json();
    // console.log(catFactData);

    if (!response.ok) {
      throw Object.assign(new Error("Some error"), {
        responseError: catFactData,
      });
    } else {
      dataContainer.classList.remove("error");
      dataContainer.textContent = catFactData.fact;
    }
  } catch (error) {
    dataContainer.classList.add("error");
    dataContainer.textContent = `${error.responseError.code}: ${error.responseError.message}`;
  }
};

//временная функция для того, чтобы словить ошибку
// setInterval(getCatFact, 50);

getFactButton.addEventListener("click", getCatFact);
