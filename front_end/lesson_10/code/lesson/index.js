                                          // Функции взаимодействия с пользователем
//функция alert
// let message = "Hello, User";
// alert(message);
// alert(123);

//функция prompt
// если пользователь ничего не вводит и нажимает ОК, тогда в age сохраниться пустая строк - ""
// если пользователь нажимает Сancel, тогда в age сохраниться null
// let age = prompt("Введите свой возраст");
// console.log(age);

//функция confirm
// если пользователь нажимает OK - значение true, если Cancel - false
// let isAdmin = confirm("Вы являетесь администратором?");
// console.log(isAdmin);

                                                              //Математические операторы
let x = 13;
let y = 2;

//сложение
let result = x + y;
console.log(result);

//вычитание
console.log(x - y);

//умножение
console.log(x * y);

//деление
console.log(x / y);

//остаток от деления
console.log(y % x);
//проверка четности числа (если остаток 0 - число четное)
console.log(x % 2);

//возведение в степень
console.log(x ** y);

                                                        // Преобразование типов
// сложение строк
let customerName = "Bob";
console.log("Имя заказчика - " + customerName);
//сложение строк с другими типами данных
console.log("12" + 3);
console.log("Mary" + 3);
console.log("Mary" + 3 + 2);
console.log("Mary" + (3 + 2));
console.log("Str" + true);
console.log("Str" + undefined);
console.log("Str" + null);
console.log("Str" + NaN);

// работа остальных операторов с операндами различных типов
console.log("12" - 3);
console.log("Bob" - 3);
// true - преобразуется в 1, а false - в 0
console.log(true - 3);
console.log(true - false);
// при операциях с undefined результатом будет NaN
console.log(undefined - 3);
// null преобразуется в 0
console.log(null - 3);

//преобразование типов с помощью встроенных функций
//было undefined стало "undefined"
let newString = String(undefined);
console.log(typeof newString);

let newNumber = Number(null);
console.log(newNumber);

// пустая строка - false, непустая - true
// все числа, кроме 0, преобразуются в true
let newBoolean = Boolean(-123);
console.log(newBoolean);

                                                                // Инкремент и декремент
// let count = 12;
// count++;
// console.log(count);
// count--;
// count--;
// console.log(count);

// let count = 12;
// ++count;
// console.log(count);
// --count;
// --count;
// console.log(count);

let count = 12;
let exCount = ++count;
console.log(exCount);
console.log(count);

// Задача
// Какое значение отобразиться в консоли
let i = 0;
// переменная i увеличилась на 1 и равна 1
i++;
// j присваивается значение, которое возвращает инкремент i++ - 1, а затем i увеличивается ещё на 1 и равно 2
let j = i++;
// Выражение  - 1+3 = 4 (++i возвращает 3)
// console.log(j + (++i));
console.log(j + i++);

                                                                // Операторы сравнения
let number1 = 12;
let number2 = 11;

console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);

// строгое и нестрогое равенство
let a = 1;
let b = "1";
console.log(a == b);
console.log(a === b);

// строгое и нестрогое неравенство
// по итогу сравниваем 1 и 1
console.log(a != b);
// по итогу сравниваем 1 и '1', то есть типы не изменяются
console.log(a !== b);

//сравнение различных типов
let c = true;
let d = false;
console.log(c > d);

                                                                          //условные операторы
let age = prompt("Сколько Вам лет?");
if (age > 18) {
  alert("Вход разрешен");
} else if (age < 18) {
  alert("Вход запрещен");
} else {
  alert("Мы подумаем");
}
