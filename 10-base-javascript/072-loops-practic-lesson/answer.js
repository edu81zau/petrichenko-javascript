"use strict";

const lines = 5;
let result = "";

for (let i = 0; i <= lines; i++) {
  for (let j = lines - i; j > 0; j--) {
    result += " ";
  }

  for (let j = i * 2 + 1; j > 0; j--) {
    result += "*";
  }
  result += "\n";
}
