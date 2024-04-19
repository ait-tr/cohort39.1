// Задача 1
// У вас есть массив чисел [2, 4, 6, 8, 10]. Напишите функцию для удвоения каждого значения в массиве (массив нужно передать аргументом) и вывода результата в консоль.
//  Вызовите функцию для демонстрации результата

// Задача 2
// Напишите функцию, которая принимает строку и число n, а затем возвращает первые n символов строки. Для отображения результа работы функции,
// вызовите её три раза с различными параметрами, результат каждого вызова присвойте отдельной переменной и выведите переменные в консоль

// Задача 3*
// У вас есть массив чисел [10, 15, 20, 25, 30]. Напишите функцию для вычисления среднего значения элементов массива (массив нужно передать аргументом)
// и вывода результата в консоль. Вызовите функцию для демонстрации результата

// Задача 1
let numberArr = [2, 4, 6, 8, 10];

// 1 вариант
// function doubleFunc(numArr) {
//   for (let i = 0; i < numArr.length; i++) {
//     let arrayItem = numArr[i] * 2;
//     console.log(arrayItem);
//   }
// }
// doubleFunc(numberArr);
// console.log(numberArr);

// 2 вариант
function doubleFunc(numArr) {
  for (let numItem of numArr) {
    numItem *= 2;
    console.log(numItem);
  }
}
doubleFunc(numberArr);
console.log(numberArr);

// Задача 2
function getSubstring(str, n) {
  let newString = str.substring(0, n);
  return newString;
}

let strExample = "Hello, world!";

let newSubstring1 = getSubstring(strExample, 2);
let newSubstring2 = getSubstring(strExample, 20);
let newSubstring3 = getSubstring(strExample, 10);

console.log(
  `Первое значение: ${newSubstring1}, Второе значение: ${newSubstring2}, Третье значение: ${newSubstring3}`
);

// Задача 3
let exampleArr = [10, 15, 25, 25, 30];

function getArrAvg(arr) {
  // создаем переменную в которое будет храниться сумма элементов массива
  let sum = 0;
  // в цикле складываем все элементы и сохраняем результат в переменную sum
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    // sum+=arr[i];
  }
  // рассчитываем среднее значение
  let result = sum / arr.length;
  console.log(result);
}

getArrAvg(exampleArr);
