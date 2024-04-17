// Цикл for
for (let i = 1; i <= 5; i++) {
  let square = i ** 2;
  console.log(`Квадрат числа ${i} - ${square}`);
}

let fruits = ["apple", "cherry", "kiwi", "mango"];

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(`Fruit at index ${i} - ${fruits[i]}`);
}

// Оператор for of
let randomNumbersArray = [23, 4, 32, 5, 6];

for (let randomNumber of randomNumbersArray) {
  // randomNumber = randomNumber + 2;
  randomNumber += 2;
  console.log(randomNumber);
}

console.log(randomNumbersArray);

for (let i = 0; i < randomNumbersArray.length; i++) {
  // изменяем исходный элемент в массиве
  // randomNumbersArray[i] += 2;
  // console.log(randomNumbersArray[i]);

  //не изменяем исходный элемент, а создаём новую переменную
  let newRandomNumber = randomNumbersArray[i] + 2;
  console.log(newRandomNumber);
}

console.log(randomNumbersArray);

// Цикл while
let j = -2;
// while (j > 0) {
//   console.log(j);
//   j++;
// }

// Цикл do while
do {
  console.log(j);
  j++;
} while (j > 0);

// Методы работы со строками
let stringExample = "PlEase seLect   AgE";
// console.log(stringExample.length);
// console.log(stringExample.toUpperCase());
// console.log(stringExample.toLowerCase());
// console.log(stringExample);

let subStr = stringExample.substring(1);
console.log(subStr);

let indexLetter = stringExample.indexOf("age");
console.log(indexLetter);

let strArray = stringExample.split("");
console.log(strArray);

// Функции
// создание функции
let userAge = 24;

function getName(name = "Ivan", surname = "Ivanov") {
  let fullName = `User - ${name} ${surname} ${userAge}`;
  // можно возвращать без сохранения в отдельную переменную
  // return `User - ${name} ${surname}`;
  return fullName;
}

// вызов функции
let userName = getName("Mary", "Smith");
console.log(userName);
console.log(userAge);

//вернёт ошибку, так как fullName - локальная переменная
// console.log(fullName);

// getName("Tom", "Hanks");
// getName();
