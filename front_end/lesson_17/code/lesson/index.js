//деструктуризация массива
const arrayColors = ["Red", "Blue", "Black"];
const refArrayColors = arrayColors;
// console.log(refArrayColors === arrayColors);

const newArrayColors = [...arrayColors];
console.log(newArrayColors);
console.log(newArrayColors === arrayColors);
newArrayColors.push("Grey");
console.log(newArrayColors);
console.log(arrayColors);

//деструктуризация объекта
const bookObj = {
  bookName: "Great Gatsby",
  price: 200,
  author: "Fitzgerald",
};

const newBookObj = { ...bookObj, bookStore: "Super Books" };
console.log(bookObj);
console.log(newBookObj);

bookObj.price = 300;
console.log(bookObj);
console.log(newBookObj);

//передача аргументов в функцию с помощью оператора расширения
const numbersOperation = (a, b, c, d) => {
  return a - b + c / d;
};

const numbers = [34, 2, -2, 8];

console.log(numbersOperation(...numbers));

//деструктурирующее присваивание (массивы)
const fruit = ["apple", "orange", "grape"];
// let firstFruit = fruit[0];
// let secondFruit = fruit[1];
// console.log(firstFruit);
// console.log(secondFruit);

const [firstFruit, secondFruit] = fruit;
console.log(firstFruit);
console.log(secondFruit);

//деструктурирующее присваивание (объекты)
const fruitObj = {
  nameFruit: "Lemon",
  price: 10,
};

// let newFruit = fruitObj.nameFruit;
// let priceNewFruit = fruitObj.price;
// console.log(newFruit);
// console.log(priceNewFruit);

const { nameFruit: newFruit, price: priceNewFruit } = fruitObj;
console.log(newFruit);
console.log(priceNewFruit);

// Методы массива
// Метод map
const words = ["note", "red", "cherry"];

const newWords = words.map((word) => word);
// console.log(newWords===words);
const wordsLength = words.map((word) => word.length);
// console.log(wordsLength);

const wordsObj = words.map((word, index, array) => {
  console.log(array);
  return {
    wordName: word,
    wordPosition: index + 1,
    wordLength: word.length,
  };
});

console.log(wordsObj);

//Метод forEach
const numbersArray = [1, 4, 6];

numbersArray.forEach((number) => console.log(number));

//Метод forEach при работе с DOM
const list = document.querySelector(".list");

const cars = ["BMW", "Tesla", "Toyota", "Aston Martin"];

// Добавление каждого элемента вручную
// const car1 = cars[0];
// const liElement = document.createElement("li");
// liElement.textContent = car1;
// list.append(liElement);

// const liElement1 = document.createElement("li");
// liElement1.textContent = cars[1];
// list.append(liElement1);

// Добавление каждого элемента через forEach
cars.forEach((car) => {
  const liElement = document.createElement("li");
  liElement.textContent = car;
  list.append(liElement);
});

//Метод filter
const products = [
  { name: "Milk", price: 100 },
  { name: "Bread", price: 50 },
  { name: "Grape", price: 120 },
];
//  В 3-й итерации
// product - { name: "Grape", price: 120 },

const filteredProduct = products.filter((product) => product.price >= 60);

console.log(filteredProduct);

//Метод reverse
const productsNames = ["Milk", "Bread", "Grape"];
productsNames.reverse();
// console.log(productsNames);

//Метод join
const str = productsNames.join(", ");
console.log(str);

