// type='module' строгий режим
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     let index = this.books.indexOf(oldName);
//     this.books.splice(index, 1, newName);
//   },
// };
// function highAndLow(numbers) {
//   let newArr = [];
//   const arrNumbers = numbers.split(" ").map((el) => +el);

//   console.log(arrNumbers, typeof arrNumbers[0]);

//   //   const maxNumber = Math.max(...arrNumbers);
//   //   const minNumber = Math.min(...arrNumbers);
//   //   newArr.push(maxNumber, minNumber);
//   //   console.log(newArr);
//   return newArr;
//   //   console.log(newArr, typeof newArr);
//   //   return (newArr = newArr.push(
//   //     Math.max(...arrNumbers),
//   //     Math.min(...arrNumbers)
//   //   ));
// }

// highAndLow("1 2 3 4 5");

// const number = function (busStops) {
//   let total = 0;
//   const res = busStops.map((el) => (total += el[0] - el[1]));
//   console.log(total);
//   return res;
// };

// number([
//   [10, 0],
//   [3, 5],
//   [5, 8],
// ]);

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach((el) => {
//     if (secondArray.includes(el)) {
//       commonElements.push(el);
//     }
//   });

//   console.log(commonElements);
//   return commonElements;
// }

// getCommonElements([1, 2, 3], [2, 4]);

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => (totalPrice += item));

//   console.log(totalPrice);
//   return totalPrice;
// };
// calculateTotalPrice([164, 48, 291]);

// const changeEven = (numbers, value) => {
//   const newNumbers = [];
//   numbers.forEach((el) => {
//     if (el % 2 === 0) {
//       newNumbers.push(el + value);
//     } else {
//       newNumbers.push(el);
//     }
//   });
//   console.log(newNumbers);
//   return newNumbers;
// };
// changeEven([1, 2, 3, 4, 5], 10);

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter((el) => el % 2 === 0);
// const oddNumbers = numbers.filter((el) => el % 2 === 1);
// console.log(evenNumbers, oddNumbers);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];

// const allGenres = books.flatMap((el) => el.genres);
// const uniqueGenres = allGenres.filter(
//   (el, i, books) => books.indexOf(el) === i
// );

// console.log(allGenres);
// console.log(uniqueGenres);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// const getFriends = (users) => {
//   const allFriends = users.flatMap((el) => el.friends);
//   return (uniqueFriends = allFriends.filter(
//     (el, i, arr) => arr.indexOf(el) === i
//   ));
// };

// getFriends(users);
// console.table(getFriends(users));

// function check(a, x) {
//   return a.includes(x);
// }
// console.log(check);
// check([66, 101], 66);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find((el) => el.title === BOOK_TITLE);
// const bookByAuthor = books.find((el) => el.author === AUTHOR);
// console.table(bookWithTitle, bookByAuthor);

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((total, number) => total + number, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(playtimes, typeof playtimes[0], totalPlayTime, averagePlayTime);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) =>
//   a.author.localeCompare(b.author)
// );

// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//   b.author.localeCompare(a.author)
// );

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// console.log(
//   sortedByAuthorName,
//   sortedByReversedAuthorName,
//   sortedByAscendingRating,
//   sortedByDescentingRating
// );

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = [...books]
//   .filter((el) => el.rating > MIN_BOOK_RATING)
//   .map((el) => el.author)
//   .sort((a, b) => a.localeCompare(b));

// console.log(names);

// const getNamesSortedByFriendCount = users => [...users].sort((a, b) => a.friends.length - b.friends.length).map(el => el.name)

// const getSortedFriends = (users) =>
//   [...users]
//     .flatMap((el) => el.friends)
//     .filter((el, i, arr) => arr.indexOf(el) === i)
//     .sort((a, b) => a.localeCompare(b));

// const getSortedFriends = (users) =>
//   [...users]
//     .flatMap((users) => users.friends)
//     .filter((friend, index, user) => user.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));

// const getTotalBalanceByGender = (users, gender) => {
//   [...users]
//     .filter((el) => el.gender === gender)
//     .reduce((total, el) => total + el.balance, 0);
// };

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log("increment -> this", this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log("decrement -> this", this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };
// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));
// console.log(counter, updateCounter(10, counter.increment));

// const obj = {
//   a: 5,
//   b: 10,
// };
// console.log(obj.a);

// const filter_list = (arr) => arr.filter(Number.isInteger);

// console.log(filter_list([1, 2, "a", "b"]));

// const friend = (friends) => friends.filter((el) => el.length === 4);
// console.log(
//   friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
// );

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);

// console.log((child.name = "Jason"));
// console.log((child.age = 27));

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.items = this.items.filter((el) => el !== itemToRemove);
//   }
// }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems());
// storage.addItem("Droid");
// console.log(storage.getItems());
// storage.removeItem("Prolonger");
// console.log(storage.getItems());

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value += str;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// class Storage {
//   #items; // Change code below this line

//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter((item) => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }
//   set brand(brand) {
//     return (this.#brand = brand);
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }
//   set model(model) {
//     return (this.#model = model);
//   }

//   updateModel(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }
//   set price(price) {
//     return (this.#price = price);
//   }
//   // Change code above this line
// }

// class Car {
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//       }

//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car {
//   static #MAX_PRICE = 50000;
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return "Error! Price exceeds the maximum";
//     }
//     return "Success! Price is within acceptable limits";
//   }
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     // return this.email;
//   }

//   set email(newEmail) {
//     // this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
//   constructor({email, accessLevel}) {
//     super(email)
//     this.email = email;
//     this.accessLevel = accessLevel;
//   }

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// function reverseWords(str) {
//   return (str = str
//     .split(" ")
//     .map((el) => el.split("").reverse().join(""))).join(" ");
// }

// console.log(reverseWords("The quick brown fox jumps over the lazy dog."));

// function squareDigits(num) {
//   return (num = +num
//     .toString()
//     .split("")
//     .map((el) => Math.pow(el, 2))
//     .join(""));
// }

// console.log(squareDigits(2112));

// console.log(window.innerWidth);

// function areYouPlayingBanjo(name) {
//   return name[0].toLowerCase() === "r"
//     ? `${name} plays banjo`
//     : `${name} does not play banjo`;
// }

// console.log(areYouPlayingBanjo("Adam"));
// console.log(areYouPlayingBanjo("rolf"));

// function getGrade(s1, s2, s3) {
//   let score = Math.floor((s1 + s2 + s3) / 3);

//   if (score <= 100 && 90 <= score) {
//     return "A";
//   } else if (score < 90 && 80 <= score) {
//     return "B";
//   } else if (score < 80 && 70 <= score) {
//     return "C";
//   } else if (score < 70 && 60 <= score) {
//     return "D";
//   } else if (score < 60 && 0 <= score) {
//     return "F";
//   }
// }

// console.log(getGrade(95, 90, 93));
// console.log(getGrade(82, 85, 87));

// const abbrevName = (name) => {
//   name = name.toUpperCase();
//   return name[0] + "." + name[name.indexOf(" ") + 1];
// };

// console.log(abbrevName("Sam Harris"));
// console.log(abbrevName("Patrick Feenan"));

// function sumArray(array) {
//   return array
//     ? array
//         .sort((a, b) => a - b)
//         .slice(1, array.length - 1)
//         .reduce((total, el) => total + el, 0)
//     : 0;
// }

// console.log(sumArray([0, 1, 6, 10, 10]));
// // console.log(sumArray(null));
// console.log(sumArray([]));

// function repeatStr(n, s) {
//   //   let total = "";
//   //   for (let i = 0; i < n; i++) {
//   //     // s.concat(s);
//   //     total += s;
//   //   }
//   //   return total;
//   return s.repeat(n);
// }

// console.log(repeatStr(3, "*"));

// function feast(beast, dish) {
//   return (
//     beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
//   );
// }

// console.log(feast("great blue heron", "garlic naan"));

// перший елемент — це кількість додатних чисел, а другий — сума від’ємних чисел

// let testData = [1, 2, 3, , 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

// function countPositivesSumNegatives(input) {
//   let res = [];
//   let sum = 0;
//   let total = [];
//   console.log(total);
//   if (input == [] || input == 0 || input === null) {
//     return total;
//   } else {
//     input.forEach((el) => (el > 0 ? res.push(el) : (sum += el)));
//     total.push(res.length);
//     total.push(sum);
//     return total;
//   }
// }

// console.log(countPositivesSumNegatives([]));
// console.log(
//   countPositivesSumNegatives([
//     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
//   ])
// );

function validatePIN(pin) {
  console.log(pin, typeof pin, pin.indexOf(" ") !== -1);
  // console.log(!pin.split("").includes(" "));
  // pin = !pin.split("").includes(" ")
  return pin.indexOf(" ") === -1
    ? pin
        .split("")
        .map((el) => !isNaN(el))
        .every((el) => el) &&
        pin % 1 === 0 &&
        (pin.length === 4 || pin.length === 6)
    : pin.indexOf(" ") !== -1;
  // return;
}
console.log(validatePIN("123 "));

// function solution(str, ending) {
//   return str.slice(str.length - ending.length) === ending;
// }
// str.endsWith(searchString[, length])
// console.log(solution("abcde", "cde"));
// console.log(solution("abcde", "abc"));

// function findOdd(a) {
//   console.log(a.map((el) => a.includes(el)));
// }

// console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));

// function betterThanAverage(classPoints, yourPoints) {
//   classPoints.push(yourPoints);
//   return (
//     yourPoints >
//     classPoints.reduce((total, el) => total + el) / classPoints.length
//   );
// }
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump / mpg <= fuelLeft;
// };

// console.log(zeroFuel(50, 25, 2));
// console.log(zeroFuel(100, 50, 1));

// function disemvowel(str) {
//   const remove = ["i"];
//   return str.split("").filter((el) => el !== remove);
// }

// console.log(disemvowel("This website is for losers LOL!"));
