describe("test lesson practic 170 function showFamily", function () {
  const testData = [
    [
      ["Peter", "Ann", "Alex", "Linda"],
      "Семья состоит из: Peter Ann Alex Linda ",
    ],
    [[], "Семья пуста"],
  ];

  testData.forEach(
    //
    (dataItem) => {
      const testArg = dataItem[0],
        expected = dataItem[1],
        actual = showFamily(testArg);
      it(`Для "${testArg}", ожидаем "${expected}", актуальное значение "${actual}"`, function () {
        assert.equal(actual, expected);
      }); //
    }
  );
});

describe("test standardizeStrings function", function () {
  const testData = [
    [["liSBon", "ROME", "miLan", "Dublin"], "lisbon\nrome\nmilan\ndublin\n"],
  ];

  testData.forEach(
    //
    (dataItem) => {
      const testArg = dataItem[0],
        expected = dataItem[1],
        actual = standardizeStrings(testArg);
      it(`Для ${testArg}, ожидаем ${expected}, актуальное значение ${actual}`, function () {
        assert.equal(actual, expected);
      }); //
    }
  );
});
