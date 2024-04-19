// Область видимости

// пример создания переменных внутри блока if
let age = 11;

if (age >= 18) {
  var messageAccess = "Access";
  console.log(messageAccess);
} else {
  var messageFailure = "Failure";
  console.log(messageFailure);
}

console.log(messageAccess);
console.log(messageFailure);

// пример создания переменных внутри функции
function showMessage() {
  var message = "Hi";
  console.log(message);
}

showMessage();

console.log(message);

// hoisting
console.log(z);

let x = 12;
const y = 23;
var z = 10;

// Function hoisting
let num1 = 23;
let num2 = 3;

console.log(add(num1, num2));
// console.log(divide(num1, num2));

// создаём функцию Function declaration
function add(num1, num2) {
  return num1 + num2;
}

// создаём функцию Function expression
const divide = function (num1, num2) {
  return num1 / num2;
};

console.log(divide(num1, num2));

// стрелочные функции
let getNumber = (n, string = "число") => {
  let message = `${n} - ${string}`;
  return message;
  // return n + 10;
};

// let getNumber = function (n) {
//   return n + 10;
// };

let newNumber = getNumber(2);

console.log(newNumber);

// let showText = (text) => console.log(text);

let showText = () => {
  console.log("Hello");
};

let resultFunc = showText();

console.log(resultFunc);

// Передача функции в качестве аргумента

let performOperation = (num1 = 2, num2 = 3, operation) => {
  return operation(num1, num2);
};

let expoResult = (num1, num2) => num1 * num2;

// console.log(performOperation(4, 6, expoResult));

// передача анонимной функции в качестве аргумента
console.log(performOperation(7, 10, (number1, number2) => number1 + number2 + 20));
