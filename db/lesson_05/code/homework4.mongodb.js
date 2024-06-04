use("bar");

// db.drinks.insertMany([
//   {
//     drinksName: "Red Wine",
//     price: 25,
//     strength: 12,
//   },
//   {
//     drinksName: "White wine",
//     price: 15,
//     strength: 13,
//   },
//   {
//     drinksName: "Beer",
//     price: 5,
//     strength: 3,
//   },
//   {
//     drinksName: "Whisky",
//     price: 50,
//     strength: 40,
//   },
//   {
//     drinksName: "Cognac",
//     price: 35,
//     strength: 42,
//   },
// ]);

// Самый дорогой напиток
// db.drinks.find({}, {_id: 0}).sort({price: -1}).limit(1);

//Топ 3 самых дешевых
// db.drinks.find().sort({price:1}).limit(3);

// Самый крепкий
// db.drinks.find({}, { drinksName: 1, _id: 0 }).sort({ strength: -1 }).limit(1);

db.drinks.find({ $and: [{ strength: { $gt: 40 } }, { price: { $lt: 50 } }] });
