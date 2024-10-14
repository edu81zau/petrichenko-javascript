"use strict";
// у карт ключами может быть что угодно
// у объектов - только строки
const user = {
  name: "Alex",
  surname: "Smith",
  showMyPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

//создание карты из объекта
const userMap = new Map(Object.entries(user));
//console.log(userMap);

//создание объекта из карты
const newUserObject = Object.fromEntries(userMap);
console.log(newUserObject);

const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }];

const budget = [5000, 1000, 2000];

const map = new Map([[{ paper: 400 }, 8000]]);

shops.forEach((shop, i) => {
  map.set(shop, budget[i]);
});

// map.set(shops[0], 5000).set(shops[1], 1000).set(shops[2], 2000); //устанавливаем бюджет магазинов

//console.log(map);
//console.log(map.keys());
// console.log(map.get(shops[2]));
// console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size;
//map.keys();

// Четыре способа перебора карт
// const goods = [];
// for (let shop of map.keys()) {
//   goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);

// for (let price of map.values()) {
//     console.log(price);
//   }

// for (let [shop, price] of map.entries()) {
//   console.log(price, shop);
// }

map.forEach((value, key, map) => {
  console.log(key, value);
});
