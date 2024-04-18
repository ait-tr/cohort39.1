// Math
let num = 3.9;

// Обычное округление
// let roundNum = Math.round(num);
// console.log(roundNum);

// Округление в большую сторону
// let ceilRoundNum = Math.ceil(num);
// console.log(ceilRoundNum);

// Округление в меньшую сторону
let floorRoundNum = Math.floor(num);
console.log(floorRoundNum);

// Получение рандомного числа
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

// корень квадратный
let squareNum = Math.sqrt(randomNumber);
console.log(squareNum);

// Округление до указанного количества знаков после запятой
let fixedNum = squareNum.toFixed(5);
console.log(fixedNum);

// иаксимальное значение из переданных
let maxNum = Math.max("-2", false, "-9");
console.log(maxNum);

// минимальное значение из переданных
let minNum = Math.min("-2", false, "-9");
console.log(minNum);

// Прерывание цикла
let numArray = [12, 4, 32, null, 7, null, "123"];

// for (let i = 0; i < numArray.length; i++) {
//   if (numArray[i] === null) {
//     console.log('массив не удовлетворяет условию - null быть не должно')
//     break;
//   }
//   console.log(numArray[i]);
// }

//переход на следующую итерацию
for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] === null) {
    console.log("Элемент равен null");
    continue;
  }
  console.log(numArray[i]);
}

// Задача 1. Найти индекс определенного элемента в массиве (cherry)
let fruitsArray = ["apple", "banana", "cherry", "orange"];
for (let i = 0; i <= fruitsArray.length - 1; i++) {
  // console.log(fruitsArray[i]);
  if (fruitsArray[i] === "cherry") {
    console.log(i);
  }
}

// Задача 2. Найти максимальное число в массиве и вывести его в консоль

let arr = [15, 8, 45, -67, 2];

let tempo = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > tempo) {
    tempo = arr[i];
  }
}
console.log(tempo);

// Задача 3. Создать новый массив и вывести его в консоль. В массив должны входить только четные положительные числа
let arr1 = [-7, -6, -5, -4, -3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 === 0 && arr1[i] > 0) {
    arr2.push(arr1[i]);
  }
}

console.log(arr2);

// Задача 4. Вывести символы строки в обратном порядке
let text = "Hello, world!";
let tempoStr = "";

for (let i = text.length - 1; i >= 0; i--) {
  tempoStr += text[i];
}

console.log(tempoStr);
