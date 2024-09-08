"use strict";

// function calculateCubeProperties(sideLength) {
//   // Проверка на корректность входных данных
//   if (
//     typeof sideLength !== "number" ||
//     !Number.isInteger(sideLength) ||
//     isNaN(sideLength) ||
//     sideLength < 0 ||
//     sideLength === 0
//   ) {
//     alert("При вычислении произошла ошибка");
//     return;
//   }

//   // Вычисление объема (V = a * a * a)
//   let volume = sideLength * sideLength * sideLength;

//   // Вычисление площади поверхности (S = 6 * a * a)
//   let surfaceArea = 6 * sideLength * sideLength;

//   return alert(
//     `Объем куба = ${volume}, площадь поверхности куба = ${surfaceArea} `
//   );
// }

// calculateCubeProperties(+prompt("Введите значение стороны куба", "0"));

function getCoupeNumber(numberPlace) {
  if (
    typeof numberPlace !== "number" ||
    !Number.isInteger(numberPlace) ||
    isNaN(numberPlace) ||
    numberPlace < 0
  ) {
    alert("Ошибка. Проверьте правильность введенного номера места");
    return;
  } else if (numberPlace == 0 || numberPlace > 36) {
    alert("Таких мест в вагоне не существует");
    return;
  }

  let coupeNumber = Math.ceil(numberPlace / 4);

  return alert(`Номер купе ${coupeNumber}`);
}

getCoupeNumber(+prompt("Введите номер места в купе:", ""));
