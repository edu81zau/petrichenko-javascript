"use strict";

// методы animal
let animal = {
  age: 10,
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  },
  inctement() {
    ++this.age;
  },
};

let rabbit = {
  name: "White Rabbit",
  age: 20,
  __proto__: animal,
};

// модифицирует rabbit.isSleeping
rabbit.sleep();

// console.log(rabbit.isSleeping); // true
// console.log(animal.isSleeping); // undefined (нет такого свойства в прототипе)

rabbit.inctement();
rabbit.inctement();
animal.inctement();
animal.inctement();

console.log(rabbit.age);
console.log(animal.age);
