"use strict";

let valueB = true,
    valueNaN = NaN,
    valueU = undefined,
    valueNull = null,
    valueNumber = 0,
    valueString = "work";

console.log("Initial type  - " + valueB);
console.log("Initial type  - " + valueNaN);
console.log("Initial type  - " + valueU);
console.log("Initial type  - " + valueNull);
console.log("Initial type  - " + valueNumber);
console.log("=======================================");

console.log("Type !true with - " + !valueB);
console.log("Type !NaN with  - " + !valueNaN);
console.log("Type !undefined with  - " + !valueU);
console.log("Type !null with  - " + !valueNull);
console.log("Type !number with  - " + !valueNumber);
console.log("=======================================");

console.log("string +  number");
console.log(valueString + valueNumber);
console.log("=======================================");

console.log("string +  undefined");
console.log(valueString + valueU);
console.log("=======================================");

console.log("string +  valueNaN");
console.log(valueString + valueNaN);
console.log("=======================================");

console.log("string +  valueNull");
console.log(valueString + valueNull);
console.log("=======================================");
console.log("=======================================");

console.log("number + string");
console.log(valueNumber + valueString);
console.log("=======================================");

console.log("number + undefined");
console.log(valueNumber + valueU);
console.log("=======================================");

console.log("number + NaN");
console.log(valueNumber + valueNaN);
console.log("=======================================");

console.log("number + null");
console.log(valueNumber + valueNull);
console.log("=======================================");
console.log("=======================================");

console.log("string + string");
console.log(valueString + valueString);
console.log("=======================================");

console.log("undefined + undefined");
console.log(valueU + valueU);
console.log("=======================================");

console.log("NaN + NaN");
console.log(valueNaN + valueNaN);
console.log("=======================================");

console.log("null + null");
console.log(valueNull + valueNull);
console.log("=======================================");

let testValues = {
    "undefind   ": undefined,
    "NaN        ": NaN,
    "null       ": null,
    "null-string": "null",
    "string     ": "hello",
    "number-0   ": 0,
    "string-0   ": "0",
    "number-1   ": 1,
    "string-1   ": "1",
    "object     ": {},
    "array[]    ": [],
    "array[1]   ": [1],


}

console.log(`         ==true   ===true   ==false    ===false`);

for (const key in testValues) {
    const value = testValues[key];
    const valueT1 = value == true ? "T" : "F";
    const valueT2 = value === true? "T" : "F";

    const valueF1 = value == false? "T" : "F";
    const valueF2 = value === false? "T" : "F";
    console.log(`${key}  ${valueT1}        ${valueT2}       ${valueF1}         ${valueF2}`);
}