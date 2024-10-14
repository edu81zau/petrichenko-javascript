describe("test lesson practic 250 functions isOpen, isAverageLunchPriceTrue,transferWaitors", function () {
  const testData = {
    menu: [
      {
        name: "Salad Caesar",
        price: "17$",
      },
      {
        name: "Pizza Diavola",
        price: "2$",
      },
      {
        name: "Beefsteak",
        price: "13$",
      },
      {
        name: "Napoleon",
        price: "4$",
      },
    ],
    waitors: [
      { name: "Alice", age: 22 },
      { name: "John", age: 24 },
    ],
    averageLunchPrice: "20$",
    openNow: true,
  };

  const entries = Object.entries(testData);
  it(`Test function isOpen ${entries[3][1]}`, function () {
    let actual = isOpen(entries[3][1]),
      expected = "";
    if (entries[3][1] === true) {
      expected = "Открыто";
    } else {
      expected = "Закрыто";
    }
    assert.equal(actual, expected);
  });

  entries[0].forEach(() => {
    const averageLP = +entries[2][1].slice(0, -1);
    let firstPrice,
      secondPrice,
      expected = "";

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return +Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let firstIndex = getRandomInt(0, entries[0][1].length - 1),
      secondIndex = getRandomInt(0, entries[0][1].length - 1);
    if (firstIndex === secondIndex) {
      secondIndex = getRandomInt(0, entries[0][1].length - 1);
    }

    firstPrice = +entries[0][1][firstIndex]["price"].slice(0, -1);
    secondPrice = +entries[0][1][secondIndex]["price"].slice(0, -1);

    if (firstPrice + secondPrice < averageLP) {
      expected = "Цена ниже средней";
    } else {
      expected = "Цена выше средней";
    }

    let actual = isAverageLunchPriceTrue(
      entries[0][1][firstIndex],
      entries[0][1][secondIndex],
      entries[2][1]
    );

    it(`Test function isAverageLunchPriceTrue ${firstPrice}+${secondPrice} ${expected}`, function () {
      assert.equal(actual, expected);
    });
  });
});
