"use strict";

const user = {
  name: "Alex",
  surname: "Smith",
  birthday: "19/01/1993",
  showMyPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

// for (const key in user) {
//   console.log(user[key]);
// }

const arr = ["a", "b", "c"];
Array.prototype.someMethod = function () {};
console.dir(arr);

for (const key of arr) {
  console.log(key);
}

// const str = "string";

// for (const key in str) {
//   console.log(str[key]);
// }

const salaries = {
  John: 500,
  Ivan: 1000,
  Anna: 5000,
  sayHello: function () {
    console.log("Hello");
  },
};

salaries[Symbol.iterator] = function () {
  return {
    current: this.John,
    last: this.Anna,
    next() {
      if (this.current < this.last) {
        this.current = this.current + 500;
        return { done: false, value: this.current };
      } else {
        return { done: true };
      }
    },
  };
};

for (let res of salaries) {
  console.log(res);
}

const iterator = salaries[Symbol.iterator]();
