//Изучение конструкции async await
const button = document.querySelector(".animal-button");
const animalCard = document.querySelector(".animal");
const spinner = document.querySelector(".spinner");

//функция имитации запроса на сервер
const getAnimalQuery = (sec) => {
  const promise = new Promise((resolve, reject) => {
    if (sec > 5) {
      const error = {
        status: 400,
        message: "Some error on the client",
      };

      setTimeout(() => {
        reject(error);
      }, sec * 1000);
    } else {
      const animal = {
        name: "Tiger",
        color: "orange",
        isWild: true,
        imgURL: "http://",
      };

      setTimeout(() => {
        resolve(animal);
      }, sec * 1000);
    }
  });

  return promise;
};

const getAnimal = async () => {
  try {
    spinner.classList.add("visible");
    //очищение карточки при отправке нового запроса
    animalCard.textContent = "";

    const result = await getAnimalQuery(6);
    console.log(result);
    //обработка успешного результата
    animalCard.innerHTML = `
      <p>Animal: ${result.name}</p>
      <p>Color: ${result.color}</p>
    `;
  } catch (error) {
    animalCard.classList.add("error");
    animalCard.textContent = `${error.status}: ${error.message}`;
  } finally {
    spinner.classList.remove("visible");
  }
};

button.addEventListener("click", getAnimal);
