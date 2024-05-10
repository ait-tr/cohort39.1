// bind
// const bookData = {
//   name: "Book name",
//   price: 30,
// };

// const newBookData = {
//   name: "Book name 2",
//   price: 40,
// };

// const currentPrice = function (per) {
//   const currentPrice = per * this.price + this.price;
//   return currentPrice;
// };

// const getPriceUser = currentPrice.bind(bookData);
// const getPriceCustomer = currentPrice.bind(newBookData);

// console.log(getPriceUser(0.2));
// console.log(getPriceUser(0.15));
// console.log(currentPrice(0.2));
// console.log(getPriceCustomer(0.2));

//Создание классов и экземпляров класса
//создание класса Wizard
class Wizard {
  constructor(nameWizard, wizardHouse) {
    (this.name = nameWizard), (this.house = wizardHouse);
    // (this.introduce = function () {
    //   console.log(`I'm ${this.name} from ${this.house}`);
    // });
  }

  introduce() {
    console.log(`I'm ${this.name} from ${this.house}`);
  }
}

//создание экземпляра класса (объекта harry)
const harry = new Wizard("Harry Potter", "Gryffindor");
// console.log(harry);
// console.log(harry.name);
// harry.introduce();
// harry.introduce = function () {
//   console.log(`I'm ${this.name}`);
// };
// harry.introduce();
// console.log(harry);

//создание экземпляра класса (объекта hermiona)
const hermiona = new Wizard("Hermiona Granger", "Gryffindor");
// console.log(hermiona);
// hermiona.introduce();

//наследование классов
class DarkWizard extends Wizard {
  constructor(name, house, darkPower) {
    //вызов конструктора родительского класса Wizard с помощью метода super
    super(name, house);
    this.darkPower = darkPower;
  }

  useDarkPower() {
    console.log(`${this.name} uses dark power ${this.darkPower}`);
  }
}

//создание экземпляра класса DarkWizard - объект voldemort
const voldemort = new DarkWizard(
  "Lord Voldemort",
  "Slytherin",
  "Avada Kedavra"
);

console.log(voldemort);
voldemort.useDarkPower();
voldemort.introduce();

//приватные поля и методы
//создание класса PrivateWizard с приватными полями и методом
class PrivateWizard {
  #privateField = "First power";

  constructor(name, house, privateValue) {
    this.name = name;
    this.house = house;
    this.#privateField = privateValue;
  }

  #privateMethod() {
    console.log(`My secret method ${this.#privateField}`);
  }

  revealMethod() {
    this.#privateMethod();
    console.log(`My secret is ${this.#privateField}`);
  }
}

const jinny = new PrivateWizard("Jinny Weasly", "Gryffindor", "Secret power");
// console.log(jinny);
// console.log(jinny.#privateField);
// jinny.#privateMethod();
jinny.revealMethod();

//геттеры и сеттеры
class WizardGetSet {
  #name;
  constructor(name, house) {
    this.#name = name;
    this.house = house;
  }

  //создаем геттер
  get getName() {
    return `${this.#name} Weasley`;
  }

  //создаем сеттер
  set setName(newValue) {
    if (newValue === "Ronald" || newValue === "Ron") {
      this.#name = newValue;
    } else {
      console.log("Enter valid wizard name");
    }
  }
}

//создаем новый экземпляр класса WizardGetSet - объект ron
const ron = new WizardGetSet("Ron", "Gryffindor");
console.log(ron);

//использование геттера
// console.log(ron.getName);

//использование сеттера
ron.setName = "Jinny";

//использование геттера
console.log(ron.getName);
