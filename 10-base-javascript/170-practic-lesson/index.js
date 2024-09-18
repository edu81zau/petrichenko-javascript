"use strict";

const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  let str = "Семья ";
  if (arr.length === 0) {
    return (str += "пуста");
  } else {
    str += "состоит из: ";
  }
  arr.forEach(function (item, i, arr) {
    str += `${item} `;
  });
  return str;
}
//console.log(showFamily(family));

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  if (arr.length === 0) {
    console.log("");
  }

  arr.forEach(function (item) {
    console.log(item.toLowerCase());
  });
}

//console.log(standardizeStrings(favoriteCities));
