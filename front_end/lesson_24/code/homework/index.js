// У вас есть 3 объекта машин:

// const bmw = { brand: "BMW", price: 20000, isDiesel: true };
// const mercedes = { brand: "Mercedes", price: 22000, isDiesel: false };
// const porshe = { brand: "Porshe", price: 50000, isDiesel: true };

// Создайте функцию getCarByNameQuery(car), которая принимает в качестве аргумента имя бренда машины и возвращает промис.

// Промис должен выполняться через определенный промежуток времени и возвращать объект машины:

// Если имя бренда BMW, то задержка должна быть в 3 сек и возвращать обьект bmw
// Если имя бренда Mercedes, то задержка должна быть в 5 сек и возвращать обьект mercedes
// Если имя бренда Porshe, то задержка должна быть в 7 сек и возвращать обьект porshe
// Если имя бренда любое другое, то задержка должна быть в 10 сек и возвращать ошибка "Error: Bad request"
// С помощью async/await создайте и затем вызовите функции, которые сохранят в переменную, а затем выведут консоль:

// 1-я функция: все машины сразу
// 2-я функция: машину, которая первая вернется в переменную
// 3-я функция: машину, имя которой вы передадите в качестве аргумента
// 4-я функция: ошибку

const bmw = { brand: "BMW", price: 20000, isDiesel: true };
const mercedes = { brand: "Mercedes", price: 22000, isDiesel: false };
const porshe = { brand: "Porshe", price: 50000, isDiesel: true };

//bmw.brand

const brands = {
  BMW: "BMW",
  MERCEDES: "Mercedes",
  PORSHE: "Porshe",
};

const getCarByNameQuery = (car) => {
  return new Promise((resolve, reject) => {
    switch (car) {
      case brands.BMW: {
        setTimeout(() => {
          resolve(bmw);
        }, 3000);
        break;
      }

      case brands.MERCEDES: {
        setTimeout(() => {
          resolve(mercedes);
        }, 5000);
        break;
      }

      case brands.PORSHE: {
        setTimeout(() => {
          resolve(porshe);
        }, 7000);
        break;
      }

      default: {
        setTimeout(() => {
          reject(new Error("Error: Bad request"));
        }, 10000);
      }
    }
  });
};

//данные всех машин
const getAllCars = async () => {
  const allCarsData = await Promise.all([
    getCarByNameQuery(brands.BMW),
    getCarByNameQuery(brands.MERCEDES),
    getCarByNameQuery(brands.PORSHE),
  ]);

  console.log(allCarsData);
};

// getAllCars();

//вывести данные машины, промис с результатами которой, выполниться быстрее всех
const getFirstCarData = async () => {
  const firstcarData = await Promise.race([
    getCarByNameQuery(brands.BMW),
    getCarByNameQuery(brands.MERCEDES),
    getCarByNameQuery(brands.PORSHE),
  ]);

  console.log(firstcarData);
};

// getFirstCarData();

//функция, принимающая название машины в качестве аргумента (классический обработчик)
const getCarByName = async (carName) => {
  try {
    const car = await getCarByNameQuery(carName);
    console.log(car);
  } catch (error) {
    console.log(error.message);
  }
};

// getCarByName("Toyota");

// функция, которая выводит ошибку
const getError = async () => {
  try {
    const result = await getCarByNameQuery("Toyota");
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};

getError();

