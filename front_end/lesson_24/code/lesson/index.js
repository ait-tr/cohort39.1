//выбор html элементов
const JOKES = document.querySelector(".jokes");
const GET_JOKE_BUTTON = document.querySelector(".get-joke");
const JOKE_FORM = document.querySelector(".joke-card");

//сохраняем URL в переменную
const RANDOM_JOKE_URL = "https://official-joke-api.appspot.com/random_joke";

//создание функции для отправки запроса и обработки результата
const getJoke = async (event) => {
  event.preventDefault();
  GET_JOKE_BUTTON.disabled = true;
  //Метод fetch возвращает Promise
  // В переменной response сохраняется объект Response, в котором храниться общая информация и методы
  // По умолчания (без использования парметров), fetch работает с методом GET
  const response = await fetch(RANDOM_JOKE_URL);
  // console.log(response);

  const result = await response.json();
  console.log(result);

  //условие необходимо для обработки результата, так как промис, возвращаемый методом fetch при статус кодах 400 и др не переходит в состояние reject,
  //но свойство response.ok, в случае ошибки, будет false. При статуст кодах 200-299 свойство response.ok будет true
  if (response.ok) {
    GET_JOKE_BUTTON.disabled = false;
    JOKES.textContent = `${result.setup}: ${result.punchline}`;
  } else {
    GET_JOKE_BUTTON.disabled = false;
    JOKES.textContent = "Joke not found";
  }
};

JOKE_FORM.addEventListener("submit", getJoke);
