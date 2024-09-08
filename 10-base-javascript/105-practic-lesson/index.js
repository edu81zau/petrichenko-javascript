"use strict";

function calculateCubeProperties(sideLength) {
  // Проверка на корректность входных данных
  if (
    typeof sideLength !== "number" ||
    !Number.isInteger(sideLength) ||
    isNaN(sideLength) ||
    sideLength < 0 ||
    sideLength === 0
  ) {
    console.log("При вычислении произошла ошибка");
    return "При вычислении произошла ошибка";
  }

  // Вычисление объема (V = a * a * a)
  let volume = sideLength * sideLength * sideLength;

  // Вычисление площади поверхности (S = 6 * a * a)
  let surfaceArea = 6 * sideLength * sideLength;

  let res = `Объем куба: ${volume}, площадь всей поверхности: ${surfaceArea}`;
  return res;
}

// calculateCubeProperties(+prompt("Введите значение стороны куба", "0"));

function getCoupeNumber(numberPlace) {
  if (
    typeof numberPlace !== "number" ||
    !Number.isInteger(numberPlace) ||
    isNaN(numberPlace) ||
    numberPlace < 0
  ) {
    console.log("Ошибка. Проверьте правильность введенного номера места");
    return "Ошибка. Проверьте правильность введенного номера места";
  } else if (numberPlace == 0 || numberPlace > 36) {
    console.log("Таких мест в вагоне не существует");
    return "Таких мест в вагоне не существует";
  }

  let coupeNumber = Math.ceil(numberPlace / 4);

  //return alert(`Номер купе ${coupeNumber}`);
  return coupeNumber;
}

// getCoupeNumber(+prompt("Введите номер места в купе:", ""));
