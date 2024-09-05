"use strict";

function myLoopFirst() {
  console.log("-----------------myLoopFirst-----------------");
  for (let i = 5; i < 11; i++) {
    console.log(i);
  }
  console.log("---------------------End---------------------");
}
myLoopFirst();

function myLoopSecond() {
  console.log("-----------------myLoopSecond--------------");
  for (let i = 20; i >= 10; i--) {
    if (i === 13) {
      continue;
    }
    console.log(i);
  }
  console.log("---------------------End---------------------");
}
myLoopSecond();

function myLoopThird() {
  console.log("-----------------myLoopThird-----------------");
  for (let i = 2; i <= 11; i++) {
    if (i % 2 !== 0) {
      continue;
    }
    console.log(i);
  }
  console.log("---------------------End---------------------");
}
myLoopThird();

function myLoopFourth() {
  console.log("-----------------myLoopFourth-----------------");
  let i = 1;
  while (i < 16) {
    i++;
    if (i % 2 === 0) {
      continue;
    } else {
      console.log(i);
    }
  }
  console.log("---------------------End---------------------");
}

myLoopFourth();

function myLoopFifth() {
  console.log("-----------------myLoopFifth-----------------");
  const arrayOfNumbers = [];
  let j = 0;
  for (let i = 5; i < 11; i++) {
    j++;
    arrayOfNumbers[j] = i;
    console.log(`arrayOfNumbers [${j}] = ${i}`);
  }

  console.log("---------------------End---------------------");
}
myLoopFifth();
