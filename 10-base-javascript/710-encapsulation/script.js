"use strict";

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  #surname = "Zahliada"; // приватное свойство

  say = () => {
    console.log(
      `Имя пользователя: ${this.name}${this.#surname}, возраст ${this._age}`
    );
  };

  get surname() {
    return this.#surname;
  }

  set surname(sname) {
    if (typeof sname === "string") {
      this.#surname = sname;
    } else {
      console.log("Something error");
    }
  }
  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age === "number" && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log("Недопустимое значение");
    }
  }

  //Решение сеттера как в реальных проектах
  // set age(age) {
  //   if (typeof age !== "number") {
  //     throw new Error("Invalid type of age");
  //   }
  //   if (age <= 0 || age > 110) {
  //     throw new Error("Invalid value of age");
  //   }
  //   this._age = age;
  // }
}

const ivan = new User("Ivan", 30);
// console.log(ivan.surname);
// ivan.say();

ivan.age = 0;
console.log(ivan);
console.log(ivan._age);
console.log(ivan.surname);
//console.log(ivan.#surname);//SyntaxError: Private field '#surname' must be declared in an enclosing class
