// console.log('JS in index.js file');

// Переменные let
let message;
message = "Hello";
console.log(message);

//Изменение переменной
let userMessage = "Hello, Tom";
console.log(userMessage);
userMessage = "Hello, Bob";
console.log(userMessage);

//Изменение константы
const _welcomMessage = "Hi, user";
console.log(_welcomMessage);
// _welcomMessage = "Hi, Mary";
// console.log(_welcomMessage);

//Копирование переменной
let price = 200;
let salePrice = price;
console.log(price);
console.log(salePrice);
salePrice = 150;
console.log(price);
console.log(salePrice);

// типы
let userName = "Tom";
let year = 1998;
let firstYear = NaN;
let secondYear = Infinity;
let isGlobal = true;
let productPrice;
let obj = {
  age: 2,
};
let productName = null; //в данном случае typeof работает неверно и выводит тип object
// функция
let func = () => {}; //в данном случае typeof работает неверно и выводит тип func
// массив
let arr = [];
// символ
let sym = Symbol();
let variableType = typeof secondYear;
console.log(variableType);
// console.log(productPrice);
