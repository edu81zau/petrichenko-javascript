describe("test lesson practic 180 function reverse", function () {
  const testData = [
    [10, "Ошибка!"],
    ["This is some strange string", "gnirts egnarts emos si sihT"],
  ];

  testData.forEach(
    //
    (dataItem) => {
      const testArg = dataItem[0],
        expected = dataItem[1],
        actual = reverse(testArg);
      it(`Для "${testArg}", ожидаем "${expected}", актуальное значение "${actual}"`, function () {
        assert.equal(actual, expected);
      });
    }
  );
});

describe("test availableCurr function", function () {
  const testData = [
    [
      ["USD", "EUR"],
      ["UAH", "RUB", "CNY"],
      "CNY",
      "Доступные валюты:\nUSD\nEUR\nUAH\nRUB\n",
    ],
    [[], [], "CNY", "Нет доступных валют"],
  ];

  testData.forEach(
    //
    (dataItem) => {
      const testArg1 = [...dataItem[0], ...dataItem[1]],
        testArg2 = dataItem[2],
        expected = dataItem[3],
        actual = availableCurr(testArg1, testArg2);
      it(`Для ${testArg1} и ${testArg2}, ожидаем ${expected}, актуальное значение ${actual}`, function () {
        assert.equal(actual, expected);
      });
    }
  );
});
