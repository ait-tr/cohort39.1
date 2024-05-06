//prototypes
const band = {
  bandType: "Rock",
};

const musician = {
  isSing: true,
  isPlay: true,
  play() {
    console.log("Bum!!!");
  },
  __proto__: band, //двойное нижнее подчеркивание
};

// console.log(band);
// console.log(musician);

// console.log(band.__proto__);
// console.log(musician.__proto__);

// console.log(musician.bandType);

const eltonJohn = {
  name: "Elton John",
  __proto__: musician,
};

// console.log(eltonJohn.__proto__);
// eltonJohn.play();

eltonJohn.play = () => {
  console.log("Piano");
};

// eltonJohn.play();

// console.log(eltonJohn.bandType);

const michaelJackson = {
  name: "Michael Jackson",
};

Object.setPrototypeOf(michaelJackson, musician);
// console.log(Object.getPrototypeOf(michaelJackson));
const protoObj = Object.getPrototypeOf(michaelJackson); //копирование ссылки на объект musician
console.log(protoObj.__proto__);

// michaelJackson.play();

//ключевое слово this
const person = {
  name: "Bill",
  // introduce() {
  //   console.log(`Hello, ${person.name}`);
  // },
  introduce() {
    console.log(`Hello, ${this.name}`);
  },
};

// person.introduce();

const newPerson = {
  name: "John",
  __proto__: person,
};

// newPerson.introduce();

// создание функции вне объекта
function userNameMessage() {
  console.log(`User - ${this.name}`);
}

person.getName = userNameMessage;

// console.log(person);
person.getName();
newPerson.getName();

//стрелочное функции и this
const user = {
  age: 56,
  name: "Tom",
  greet: () => {
    console.log(`Age - ${this.age}, Name - ${this.name}`);
  },
};

// user.greet();

//глобальный объект window
// console.log(window);

//call, apply, bind
function greetUser(age, message) {
  console.log(`${message} ${this.name}, age - ${age}`);
}

const johnObj = {
  name: "John",
  position: "Developer",
};

const janeObj = {
  name: "Jane",
  position: "Manager",
};

// greetUser.call(janeObj, 45);
// greetUser.apply(johnObj, [25]);
johnObj.name = "Tom";
// console.log(johnObj);

// greetUser.call(janeObj, 45, "Hi");
// greetUser.apply(johnObj, [25, "Hello"]);

const greetFuncWithObj = greetUser.bind(janeObj, 56);
greetFuncWithObj("Halo");