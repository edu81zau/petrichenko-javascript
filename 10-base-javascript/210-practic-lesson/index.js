"use strict";

const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Somebody",
  "Somebody1",
];

function sortStudentsByGroups(mainArr) {
  mainArr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  let tempArr = [],
    count = 0,
    str = "Оставшиеся студенты: ";

  outerloop: for (let i = 0; i < mainArr.length; i++) {
    if (mainArr.length === count) {
      break;
    }
    tempArr[i] = [];
    for (let j = 0; j < 3; j++) {
      if (typeof mainArr[count] !== "string") {
        break outerloop;
      }
      tempArr[i][j] = mainArr[count];
      count++;
    }
  }

  if (tempArr[tempArr.length - 1].length === 3) {
    str += "-";
  } else {
    str += tempArr.slice(-1)[0].join(", ");
    tempArr.splice(-1, 1);
  }
  tempArr.push(str);
  return tempArr;
}

sortStudentsByGroups(students);
