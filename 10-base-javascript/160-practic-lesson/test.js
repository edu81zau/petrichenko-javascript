describe("test lesson 160", function () {
  const tplExpected = {
      showExperience: undefined,
      showProgrammingLangs: undefined,
      showAgeAndLangs: undefined,
    },
    testData = [
      [
        {
          name: "Ivan",
          age: "29",
          skills: {
            languages: ["ru", "eng"],
            programmingLangs: { js: "20%", php: "10%" },
            exp: "3 month",
          },
        },

        Object.assign({}, tplExpected, {
          showExperience: "3 month",
          showProgrammingLangs:
            "Язык js изучен на 20%\nЯзык php изучен на 10%\n",
          showAgeAndLangs: "Мне 29 и я владею языками: RU ENG",
        }),
      ],
    ];

  testData.forEach(
    //
    (dataItem) => {
      console.log("test-item", dataItem);
      const //
        testArg = dataItem[0],
        /**
         * @type {tplExpected} expected
         */
        expected = dataItem[1];

      it(`Проверяем showExperience`, function () {
        const actual = showExperience(testArg);
        //showExperience(testArg);
        assert.equal(actual, expected.showExperience);
      });

      it(`Проверяем showProgrammingLangs`, function () {
        const actual = showProgrammingLangs(testArg);
        //showProgrammingLangs(testArg);

        assert.equal(actual, expected.showProgrammingLangs);
      });

      it(`Проверяем showAgeAndLangs`, function () {
        const actual = personalPlanPeter.showAgeAndLangs(testArg);
        //showAgeAndLangs(testArg);

        assert.equal(actual, expected.showAgeAndLangs);
      });
    }
  );
});

// describe("test findMaxNumber function", function () {
//   const testData = [
//     [[1, 5, 6.6, 11], 11],
//     [[1, 5, "6", "10"], 0],
//     [[1, 5, "6"], 0],
//   ];

//   testData.forEach(
//     //
//     (dataItem) => {
//       const testArg = dataItem[0],
//         expected = dataItem[1],
//         actual = findMaxNumber.apply(this, testArg);
//       it(`Для ${testArg}, ожидаем ${expected}, актуальное значение ${actual}`, function () {
//         assert.equal(actual, expected);
//       }); //
//     }
//   );
// });
