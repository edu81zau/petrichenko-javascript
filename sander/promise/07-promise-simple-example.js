const isMomHappy = true;

// Промис
const willIGetNewPhone = new Promise((resolve, reject) => {
  // fat arrow
  if (isMomHappy) {
    const phone = {
      brand: "Samsung",
      color: "black",
    };
    resolve(phone);
  } else {
    const reason = new Error("mom is not happy");
    reject(reason);
  }
});

const showOff = function (phone) {
  const message =
    "Hey friend, I have a new " + phone.color + " " + phone.brand + " phone";
  return Promise.resolve(message);
};

// Вызываем промис
const askMom = function () {
  console.log("before asking Mom");
  willIGetNewPhone
    .then(showOff)
    .then((fulfilled) => console.log(fulfilled)) // fat arrow
    .catch((error) => console.log(error.message)); // fat arrow
  console.log("after asking mom");
};

askMom();
