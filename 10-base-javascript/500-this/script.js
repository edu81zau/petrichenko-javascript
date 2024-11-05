"use strict";

// 1) В обычных функциях. Если не строгий режим - window. В строгом режиме - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экемпляр объекта
// 4) ручная привязка this: call, apply, bind

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  this.style.backgroundColor = "red";
  //
});

const obj = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this.num);
    };
    say();
  },
};

obj.sayNumber();
// function showThis() {
//   console.log(this);
// }
// showThis();
// var showMe = function () {
//     console.log("this", this);
//   },
//   a = {
//     name: "a",
//     display: showMe,
//     b: {
//       name: "b",
//       display: showMe,
//     },
//   };
// a.display.call(a.b);
// a.b.display();
// let c = {
//   name: "c",
// };

// function showThis(a, b) {
//   console.log("showThis", this);
//   function sum() {
//     console.log("sum", this);
//     return a + b;
//   }
//   console.log(sum());
// }

// let showThis1 = showThis.bind(c);

//showThis.call(c, 4, 5);
//showThis(4, 5);
//showThis1(4, 5);

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log("Hello! " + this.name);
//   };
// }

// let ivan = new User("Ivan", 23);

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: "John",
// };

// sayName.call(user, " Smith");
// sayName.apply(user, [" Smith"]);

// function count(num) {
//   return this * num;
// }

// const double = count.bind(2);

// console.log(double(3));
// console.log(double(15));
