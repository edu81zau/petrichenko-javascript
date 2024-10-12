describe("test lesson practic 210 function sortStudentsByGroups", function () {
  const testData = [
    [
      [
        "Peter",
        "Andrew",
        "Ann",
        "Mark",
        "Josh",
        "Sandra",
        "Cris",
        "Bernard",
        "Takesi",
        "Sam",
      ],
      [
        ["Andrew", "Ann", "Bernard"],
        ["Cris", "Josh", "Mark"],
        ["Peter", "Sam", "Sandra"],
        "Оставшиеся студенты: Takesi",
      ],
    ],
    [
      [
        "Peter",
        "Andrew",
        "Ann",
        "Mark",
        "Josh",
        "Sandra",
        "Cris",
        "Bernard",
        "Sam",
      ],
      [
        ["Andrew", "Ann", "Bernard"],
        ["Cris", "Josh", "Mark"],
        ["Peter", "Sam", "Sandra"],
        "Оставшиеся студенты: -",
      ],
    ],
    [
      [
        "Peter",
        "Andrew",
        "Ann",
        "Mark",
        "Josh",
        "Sandra",
        "Cris",
        "Bernard",
        "Takesi",
        "Sam",
        "Somebody",
      ],
      [
        ["Andrew", "Ann", "Bernard"],
        ["Cris", "Josh", "Mark"],
        ["Peter", "Sam", "Sandra"],
        "Оставшиеся студенты: Somebody, Takesi",
      ],
    ],
  ];

  testData.forEach((dataItem, dataIndex) => {
    const testArg = dataItem[0];
    let expected = dataItem[1],
      actual = sortStudentsByGroups(testArg);
    it(`${dataIndex}`, function () {
      expected = JSON.stringify(expected);
      actual = JSON.stringify(actual);
      assert.equal(actual, expected);
    });
  });
});
