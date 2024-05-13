// - Создайте базовый класс Transport, представляющий транспортное средство. У транспортного средства должны быть следующие свойства:
// - make (марка)
// - model (модель)
// - year (год выпуска)
// - Добавьте в класс Transport метод displayMainInfo(), который выводит всю информацию о транспортном средстве в консоль.

// - Создайте два подкласса, расширяющих класс Transport:

// - Car - представляет автомобиль. Дополнительные свойства:
//   - numDoors (количество дверей)
//   - isConvertible (является ли кабриолетом)

// - Motorcycle - представляет мотоцикл. Дополнительные свойства:
//   - numWheels (количество колес)
//   - hasSideCar (имеет ли боковую коляску)

// - Создайте по два экземпляра для классов Car и Motorcycle

// Для демонстрации результатов вызовите метод displayMainInfo() для каждого экземпляра (4 вызова).

class Transport {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayMainInfo() {
    console.log(`Make ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  }
}

class Car extends Transport {
  constructor(make, model, year, numDoors, isConvertible = true) {
    super(make, model, year);
    this.numDoors = numDoors;
    this.isConvertible = isConvertible;
  }

  displayMainInfo() {
    super.displayMainInfo();
    console.log(
      `Num Doors ${this.numDoors}, Convertible: ${this.isConvertible}`
    );
  }

  // displayAdditionalInfo() {
  //   console.log(
  //     `Num Doors ${this.numDoors}, Convertible: ${this.isConvertible}`
  //   );
  // }
}

class Motorcycle extends Transport {
  constructor(make, model, year, numWheels, hasSideCar) {
    super(make, model, year);
    this.numWheels = numWheels;
    this.hasSideCar = hasSideCar;
  }
}

//экземпляры класса Car
const toyotaCar = new Car("Toyota", "Camry", 2022, 2);
const audiCar = new Car("Audi", "A4", 2020, 4);

//экземпляры класса Motorcycle
const harleyMotorcycle = new Motorcycle(
  "Harley-Davidson",
  "Sportster",
  2022,
  2,
  false
);

const hondaMotorcycle = new Motorcycle("Honda", "1800", 2002, 2, false);

toyotaCar.displayMainInfo();
audiCar.displayMainInfo();
// harleyMotorcycle.displayMainInfo();
// hondaMotorcycle.displayMainInfo();

// toyotaCar.displayAdditionalInfo();
// audiCar.displayAdditionalInfo();
