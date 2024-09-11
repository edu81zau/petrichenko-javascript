describe("test fib function", function () {
  const testData = [
    [4, "0 1 1 2"],
    [7, "0 1 1 2 3 5 8"],
    ["7", ""],
    [1, "0"],
    [0, ""],
  ];

  testData.forEach(
    //
    (dataItem) => {
      const testArg = dataItem[0],
        expected = dataItem[1],
        actual = fib(testArg);
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
    [[1, 5, "6"], 0],
  ];

  testData.forEach(
    //
    (dataItem) => {
      const testArg = dataItem[0],
        expected = dataItem[1],
        actual = findMaxNumber.apply(this, testArg);
      it(`Для ${testArg}, ожидаем ${expected}, актуальное значение ${actual}`, function () {
        assert.equal(actual, expected);
      }); //
    }
  );
});
