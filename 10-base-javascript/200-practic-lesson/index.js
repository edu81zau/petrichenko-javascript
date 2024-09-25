"use strict";
/*
const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 10,
    },
    {
      width: 40,
      length: 10,
    },
    {
      width: 50,
      length: 10,
    },
  ],
  height: 20,
  cost1m3: 50,
  budget: 50000,
};

function isBudgetEnough(mainObject) {
  let tempSquare = 0,
    tempVolume = 0,
    tempCost = 0;
  mainObject.shops.forEach((item) => {
    tempSquare += item.length * item.width;
    // console.log(`tempSquare = ${tempSquare}`);
  });
  tempVolume = tempSquare * mainObject.height;
  tempCost = tempVolume * mainObject.cost1m3;
  //   console.log(`tempVolume = ${tempVolume}`);
  //   console.log(`tempCost = ${tempCost}`);

  if (mainObject.budget < tempCost) {
    return "Бюджета недостаточно";
  } else {
    return "Бюджета достаточно";
  }
}
*/
const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough(mainObject) {
  let tempSquare = 0,
    tempVolume = 0,
    tempCost = 0;
  mainObject.shops.forEach((item) => {
    tempSquare += item.length * item.width;
    console.log(`tempSquare = ${tempSquare}`);
  });
  tempVolume = tempSquare * mainObject.height;
  tempCost = tempVolume * mainObject.moneyPer1m3;
  console.log(`tempVolume = ${tempVolume}`);
  console.log(`tempCost = ${tempCost}`);

  if (mainObject.budget < tempCost) {
    return "Бюджета недостаточно";
  } else {
    return "Бюджета достаточно";
  }
}

isBudgetEnough(shoppingMallData);
