//Выбираем элементы
const spaceshipName = document.querySelector("#spaceship-name");
const spaceshipManufacturer = document.querySelector("#spaceship-manufacturer");
const spaceshipCrew = document.querySelector("#spaceship-crew");
const spaceshipMaxSpeed = document.querySelector("#spaceship-max-speed");
const hideManufacturerButton = document.querySelector("button");

//предположительно данные с сервера
const spaceshipData = {
  name: "Star",
  manufacturer: "Tesla",
  crew: 50,
  maxSpeed: 1000,
};

//Пишем логику (основные функции)
spaceshipName.textContent = `Name: ${spaceshipData.name}`;
spaceshipManufacturer.textContent = `Manufacturer: ${spaceshipData.manufacturer}`;
spaceshipCrew.textContent = `Crew: ${spaceshipData.crew}`;
spaceshipMaxSpeed.textContent = `Max Speed: ${spaceshipData.maxSpeed}`;

const hideManufacturer = () => {
  // spaceshipManufacturer.style.opacity = "0";
  // spaceshipManufacturer.textContent = `Manufacturer: -`;
  spaceshipManufacturer.classList.add("hidden");
};

//Привязка слушателей
hideManufacturerButton.addEventListener("click", hideManufacturer);
