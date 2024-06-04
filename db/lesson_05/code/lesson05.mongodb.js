// Создаем и используем новую БД lesson_05
use("lesson_05");

// UPDATE

// Создаем коллекцию animal c 6 новыми документами
// db.animal.insertMany([
//   { kind: "tiger", weight: 300, name: "Alan", predatory: true },
//   { kind: "penguin", weight: 2, name: "Kovalsky", predatory: true },
//   { kind: "chicken", weight: 1, name: "Cipa", predatory: false },
//   { kind: "shark", weight: 400, name: "Sharp", predatory: false },
//   { kind: "shark", weight: 450, name: "John", predatory: false },
//   { kind: "panda", weight: 200, name: "Po", predatory: false },
// ]);

// 1. $set
// - Изменим predatory у всех акул на true
// db.animal.updateMany({ kind: "shark" }, { $set: { predatory: true } });

// 2. $inc - увеличивает значения на указанную величину
// db.animal.updateMany({}, { $inc: { weight: 3 } });

// 3. $rename - переимоновывает свойства(ключи)
// db.animal.updateMany({}, { $rename: { weight: "weightKg" } });

// 4. Добавление нового св-ва с помощью $set
// db.animal.updateMany(
//   { predatory: true },
//   { $set: { food: ["fish", "squid"] } }
// );

//5. $push - добавляет в массив новый элемент
// db.animal.updateOne({kind: "tiger"}, {$push: {food: "wold"}});

// 6. $pull - забирает из массива указанное значение
// db.animal.updateOne({ kind: "tiger" }, { $pull: { food: "squid" } });

// 7. $unset - удаляет свойство и значение обьекта
// db.animal.updateOne({ kind: "chicken" }, { $unset: { predatory: "" } });

// 8. Изменение по id
// db.animal.updateOne(
//   { _id: ObjectId("665f580b4306c2ef4807f50c") },
//   { $set: { name: "Kovalsky 2" } }
// );

//////////////////////////////////////////////////////////////////////////////
// DELETE
// 1. deleteOne()
// db.animal.deleteOne({ _id: ObjectId("665f580b4306c2ef4807f50d") });

// 2. deleteMany()
// db.animal.insertMany([
//   {
//     kind: "t-rex",
//     weightKg: 1500,
//   },
//   {
//     kind: "t-rex",
//     weightKg: 1800,
//   },
// ]);

// db.animal.deleteMany({kind: "t-rex"});

// Получаем всех животных
// db.animal.find();

/////////////////////////////////////////////////////////////////////////////////////////////
// AGGREGATION
// - $match - находит все по совпадению
// db.animal.aggregate([
//   {
//     $match: {
//       predatory: true,
//     },
//   },
// ]);

// - $sort - сортировка: 1 - показывать св-во, -1 не показывать
// - $limit - сколько показывать
// - $skip - пропуск документов
// db.animal.aggregate([
//   {
//     $match: {
//       predatory: true,
//     },
//   },
//   { $sort: { weightKg: -1 } },
//   { $skip: 2 },
//   { $limit: 1 },
// ]);

// - $project - проекция к=указывает какие поля получать, а какие нет
// db.animal.aggregate([
//   {
//     $project: {
//       name: 1,
//       food: 1,
//       _id: 0,
//     },
//   },
// ]);

// - $count - считает сколько получено документов
// db.animal.aggregate([
//   {
//     $match: {
//       predatory: false,
//     },
//   },
//   { $count: "number_of_planteaters" },
// ]);

// - $sample - получает случайный документ
// db.animal.aggregate([
//   {
//     $sample: {
//       size: 1,
//     },
//   },
// ]);

// Задача: показать случайное животное с весом более 100kg
// db.animal.aggregate([
//   {
//     $match: {
//       weightKg: { $gt: 100 },
//     },
//   },
//   {
//     $sample: {
//       size: 1,
//     },
//   },
// ]);

// - $lookup - позволяет получить информацию из одной коллекции,
// дополненную инормацие из другой
// добавили Пост (для примера захардкодили id)
// db.posts.insertOne({
//   _id: ObjectId("65c6096e0451b42a2273e13c"),
//   likes: 10,
//   text: "Hi, I am glad to be on likedin",
// });

// добавили комментарий к этому посту
// db.comments.insertMany([
//   {
//     email: "fish@mail.com",
//     message: "Oh, you are here! Wonderful!",
//     post_id: ObjectId("65c6096e0451b42a2273e13c"),
//   },
//   {
//     email: "eidelman@mail.com",
//     message: "Hey, man!",
//     post_id: ObjectId("65c6096e0451b42a2273e13c"),
//   },
//   {
//     email: "eidelman@mail.com",
//     message: "P.S. love you so!",
//     post_id: ObjectId("65c6096e0451b42a2273e13c"),
//   },
// ]);

// db.comments.aggregate([
//   {
//     $lookup: {
//       // from - куда будем подсматривать - коллекция
//       from: "posts",
//       // localField - связуюшее звено с другой коллекцией и находится в коллекции comments
//       localField: "post_id",
//       // foreignField - связуюшее звено с другой коллекцией и находится в коллекции posts
//       foreignField: "_id",
//       as: "post_info"
//     },
//   },
// ]);

/////////////////////////////////////////////////////////////
// $group
// db.kids.insertMany([
//   { name: "John", age: 5, gender: "boy" },
//   { name: "Anna", age: 6, gender: "girl" },
//   { name: "Leyla", age: 4, gender: "girl" },
//   { name: "Frieda", age: 3, gender: "boy" },
//   { name: "Bob", age: 5, gender: "boy" },
// ]);

// db.kids.aggregate([
//   {
//     $group: {
//       _id: "$gender",
//       averageAge: {
//         $avg: "$age",
//       },
//     },
//   },
// ]);

// db.kids.aggregate([
//   {
//     $group: {
//       _id: "$gender",
//       averageAge: {
//         $min: "$age",
//       },
//     },
//   },
// ]);
