// Тернарный оператор
let studentName = "Bob";
let message;
if (studentName === "Mary") {
  message = "Hi, Mary";
} else if (studentName === "Tom") {
  message = "Hi, Tom";
} else {
  message = "Hi";
}

// console.log(message);
//переписываем используя тернарный оператор
// let studentMessage = studentName === "Mary" ? "Hi, Mary" : "Hi";
let studentMessage =
  studentName === "Mary"
    ? "Hi, Mary"
    : studentName === "Tom"
    ? "Hi, Tom"
    : "Hi";

console.log(studentMessage);

//switch case
// let randomNumber = prompt("Введите число, соответствующее дню недели");
// let dayOfWeek;

// switch (randomNumber) {
//   case "1":
//     dayOfWeek = "Monday";
//     break;
//   case "2":
//     dayOfWeek = "Tuesday";
//     break;
//   case "3":
//     dayOfWeek = "Wednesday";
//     break;
//   case "4":
//     dayOfWeek = "Thursday";
//     break;
//   case "5":
//     dayOfWeek = "Friday";
//     break;
//   case "6":
//     dayOfWeek = "Saturday";
//     break;
//   case "7":
//     dayOfWeek = "Sunday";
//     break;
//   default:
//     dayOfWeek = "Invalid day";
// }

// alert(dayOfWeek);

// Логические операторы
let age = 18;
let hasDrivingLicense = true;
let isSick = false;

if (age >= 18 && hasDrivingLicense && !isSick) {
  console.log("You can drive a car");
} else {
  console.log("You can`t drive a car");
}

//Шаблонные строки
let userName = prompt("Your name");
let newMessage = `Hello, ${userName}`;
alert(newMessage);

//Массив
let usersArray = ["Mike", "Tom", "Dafna"];
// console.log(usersArray);
// console.log(usersArray[0]);
let userArName = usersArray[2];
// console.log(userArName);
// console.log(usersArray);

//массив с различными типами данных
let userData = ["Tom", 42, true, [100, 200, 600]];
console.log(userData);
console.log(userData[3][1]);

//методы массивов
let colors = ["red", "blue"];
console.log(colors);

// добавление элемента(ов) в конец массива
//при добавлении элементов происходит возврат длины
console.log(colors.push("yellow", "black", "pink"));
console.log(colors);

//удаление последнего элемента
console.log(colors.pop());
console.log(colors);

//удаление первого элемента
console.log(colors.shift());
console.log(colors);

// добавление элемента(ов) в начало массива
colors.unshift("green", ["a", "b", "c"]);
console.log(colors);

//изменение элементов массива
colors[1] = null;
console.log(colors);

colors[10] = "orange";
console.log(colors.length);
console.log(colors[5]);
