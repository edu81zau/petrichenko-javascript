describe("test lesson practic 200 function isBudgetEnough", function () {
  const testData = [
    {
      shops: [
        { width: 10, length: 5 },
        { width: 10, length: 7 },
      ],
      height: 5,
      moneyPer1m3: 30,
      budget: 50000,
      str: "Бюджета достаточно",
    },
    {
      shops: [
        { width: 10, length: 5 },
        { width: 10, length: 7 },
      ],
      height: 5,
      moneyPer1m3: 30,
      budget: 500,
      str: "Бюджета недостаточно",
    },
  ];

  testData.forEach((dataItem) => {
    const testArg = dataItem,
      { str } = dataItem,
      expected = str,
      actual = isBudgetEnough(testArg);
    it(`Для этих данных, ожидаем "${expected}", актуальное значение "${actual}"`, function () {
      assert.equal(actual, expected);
    });
  });
});
