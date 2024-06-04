// Создание и подключение к БД lesson_o4
use("lesson_04");

////////////////////////////////////////////////////////////////
// СОЗЖАНИЕ ДАННЫХ CREATE

// Дабавляем данные в коллекцию students
// Если students еще не созданно, то она создается автоматически
// insertOne(object) - object - обьект в котором мы будем передавать данные о студенте
// db.students.insertOne({
//     firstName: "John",
//     lastName: "Johnson",
//     age: 45,
//     course: "QA",
//     group: 48
// });

// СОЗДАНИЕ НЕСКОЛЬКО ЗАПИСЕЙ В БД КОЛЛЕКЦИИ insertMany(array)
// в качестве аргумента передаем массив

// db.students.insertMany([
//   {
//     firstName: "jack",
//     lastName: "Vorobey",
//     age: 51,
//     course: "Backend",
//     group: 51,
//   },
//   {
//     firstName: "Pavel",
//     lastName: "Pavlov",
//     age: 60,
//     course: "Backend",
//     group: 51,
//   },
// ]);

// db.students.insertOne({
//   firstName: "Elena",
//   lastName: "Malysheva",
//   age: 40,
//   hobby: ["Coocking", "Medicine", "Sport", "Beauty"],
//   course: "Frontend"
// });
///////////////////////////////////////////////////////////////

// ПОЛУЧЕНИЕ ДАННЫХ

// 1. Найти всех
// db.students.find();

// 2. Получение определенного колличества студентов - limit()
// db.students.find().limit(3);

// 3. skip() - пропусает переданное колличество обьектов в качестве аргумента
// db.students.find().skip(2);

// 4. sort()
// - в алфавитном порядке
// db.students.find().sort({lastName: 1});
// - в обратном порядке
// db.students.find().sort({lastName: -1});

// Пример:
// db.students.find().sort({lastName: -1, age: 1});

// 5. findOne()

// db.students.findOne({firstName: "Elena"});
// db.students.find({firstName: "John"});

//////////////////////////////////////////////////////////////////
// ОПЕРАТОРЫ

// db.students.find({age: {$gt: 45}});

// db.students.find({ age: { $lt: 45 } });

// db.students.find({ firstName: { $in: ["jack", "John"] } });
// db.students.find({firstName: {$ne: "John"}});

// Projection - 2 аргумент в методе find. Позволяет выводить только нужные данные в обьекте 
// db.students.find({},{firstName: 1, lastName: 1, _id: 0});

// $and и $or
// db.students.find({$and: [{firstName: "Pavel"}, {age: 60}]});

//$not
// db.students.find({firstName: {$not: {$eq: "John"}}});

// $exists - проверка на наличие узла
// db.students.find({hobby: {$exists: true}});
// db.students.find({group: {$exists: true}});