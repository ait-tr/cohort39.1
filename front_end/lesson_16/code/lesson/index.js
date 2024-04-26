//Создание пустой объекта
const emptyPerson = {};
console.log(emptyPerson);

//Создание свойства в объекта
emptyPerson.personName = "Tom";
console.log(emptyPerson);

//Создание заполненного объекта
const person = {
  name: "Bob",
  age: 23,
  isAdmin: true,
};

//возврат значения свойства из объекта
const userName = person.name;
// console.log(person);
// console.log(userName);

//брекет синтаксис
//создание свойства с помощью брекет синтаксиса
person["likes dogs"] = false;
console.log(person);

//получение значения с помощью брекет синтаксиса
console.log(person["age"]);

//удаление свойства из объекта person
delete person.name;
console.log(person.name);
console.log(person);
console.log(person.isUser);

//оператор in
console.log("name" in person);

const animalData = {
  name: "Monkey",
  age: 4,
  city: "Berlin",
};

const checkValue = "age";

//чтобы вызвать значение свойства с помощью переменной (checkValue) необходимо добавить переменную в []
if (checkValue in animalData) {
  console.log(animalData[checkValue]);
} else {
  console.log("Запрашиваемые данные отсутствуют");
}

//перебор ключей объекта - for in
for (let key in animalData) {
  // console.log(typeof key);
  console.log(key);
}

for (let key in animalData) {
  console.log(animalData[key]);
}

//сложная структура объекта
const bookStore = {
  shopName: "Books",
  books: {
    price: 300,
    names: ["Book1", "Book2", "Book3"],
  },
  //функции, которые храняться в объекте ещё называют методами (название функции = ключ свойства, в котором храниться функция)
  // sayHi() {
  //   console.log("This is book store");
  // },
  sayHi: () => {
    console.log("This is book store");
  },
};

// console.log(bookStore.books.names[1]);

// вызов функции из объекта bookStore
// bookStore.sayHi();
const newFunc = bookStore.sayHi;
// console.log(newFunc);
newFunc();

//получить массив ключей/значений c помощью встроенных методов
const objKeys = Object.keys(bookStore.books);
// console.log(objKeys);

const objValues = Object.values(bookStore.books);
console.log(objValues);

//Ссылочные типы

// пример с примитивным типом данных
let age = 35;
console.log(age);

let userAge = age;
console.log(userAge);
userAge = 25;
console.log(age, userAge);

// пример с ссылочным типом данных
const customerData = {
  customerName: "John",
  company: "Apple",
};

const userData = customerData;
console.log(userData);

userData.company = "Microsoft";
console.log(userData);
console.log(customerData);

customerData.company = "SpaceX";
console.log(userData);
console.log(customerData);