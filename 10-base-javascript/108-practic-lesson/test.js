describe("test getTimeFromMinutes function", function () {
  const testData = [
    [150, "Это 2 часа и 30 минут"],
    [50, "Это 0 часов и 50 минут"],
    [110, "Это 1 час и 50 минут"],
    [0, "Это 0 часов и 0 минут"],
    [-150, "Ошибка, проверьте данные"],
  ];

  //   it("купе для 2", function () {
  //     assert.equal(getCoupeNumber(2), 1);
  //   });

  testData.forEach(
    //
    (dataItem) => {
      const testArg = dataItem[0],
        expected = dataItem[1],
        actual = getTimeFromMinutes(testArg);
      it(`Для "${testArg}", ожидаем "${expected}", актуальное значение "${actual}"`, function () {
        assert.equal(actual, expected);
      }); //
    }
  );
});

describe("test findMaxNumber function", function () {
  const testData = [
    [[1, 5, 6.6, 11], 11],
    [[1, 5, "6", "10"], 0],
  ];

  //   it("купе для 2", function () {
  //     assert.equal(getCoupeNumber(2), 1);
  //   });

  testData.forEach(
    //
    (dataItem) => {
      const testArg = dataItem[0],
        expected = dataItem[1],
        actual = findMaxNumber(testArg);
      it(`Для ${testArg}, ожидаем ${expected}, актуальное значение ${actual}`, function () {
        assert.equal(actual, expected);
      }); //
    }
  );
});
