describe("test calculateCubeProperties function", function () {
  const testData = [
    [5, "Объем куба: 125, площадь всей поверхности: 150"],
    [15, "Объем куба: 3375, площадь всей поверхности: 1350"],
    [15.5, "При вычислении произошла ошибка"],
    ["15", "При вычислении произошла ошибка"],
    [-15, "При вычислении произошла ошибка"],
  ];
  //   it("купе для 2", function () {
  //     assert.equal(getCoupeNumber(2), 1);
  //   });

  testData.forEach(
    //
    (dataItem) => {
      const testArg = dataItem[0],
        expected = dataItem[1],
        actual = calculateCubeProperties(testArg);
      it(`Для "${testArg}", ожидаем "${expected}", актуальное значение "${actual}"`, function () {
        assert.equal(actual, expected);
      }); //
    }
  );
});

describe("test getCoupeNumber function", function () {
  const testData = [
    [2, 1],
    [33, 9],
    [undefined, "Ошибка. Проверьте правильность введенного номера места"],
    [300, "Таких мест в вагоне не существует"],
    [0, "Таких мест в вагоне не существует"],
    [7.7, "Ошибка. Проверьте правильность введенного номера места"],
    [-10, "Ошибка. Проверьте правильность введенного номера места"],
    ["Hello", "Ошибка. Проверьте правильность введенного номера места"],
  ];
  //   it("купе для 2", function () {
  //     assert.equal(getCoupeNumber(2), 1);
  //   });

  testData.forEach(
    //
    (dataItem) => {
      const testArg = dataItem[0],
        expected = dataItem[1],
        actual = getCoupeNumber(testArg);
      it(`купе для ${testArg}, ожидаем ${expected}, актуальное значение ${actual}`, function () {
        assert.equal(actual, expected);
      }); //
    }
  );
});
