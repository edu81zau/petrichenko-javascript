//There are some flags
//writable
//enumerable
//configurable
// Если мы вручную создаем объект, то все флаги у свойст стоят в true.
// Если создаем при помощи Object.defineProperty, то все флаги у свойст стоят в false.
"use strict";

const user = {
  name: "Alex",
  surname: "Smith",
  //birthday: "19/01/1993",
  [Symbol("birthday")]: "19/01/1993",
  showMyPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

// Object.defineProperty(user, "birthday", {
//   value: prompt("Date?"),
//   writable: false,
// });

// console.log(Object.getOwnPropertyDescriptor(user, "birthday"));

// Object.defineProperty(user, "gender", { value: "male" });
// console.log(Object.getOwnPropertyDescriptor(user, "gender"));

Object.defineProperty(user, "showMyPublicData", { enumerable: false });

for (let key in user) console.log(key);

Object.defineProperties(user, {
  name: { writable: false },
  surname: { writable: false },
});
