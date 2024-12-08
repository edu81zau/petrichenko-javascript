//Внутренный механизм промисов
let myPromise = {
  state: "pending",
  resolveCallBack: function () {
    console.log("Promise success");
    this.state = "fulfilled";
  },
  rejectCallBack: function () {
    console.log("Promise error");
    this.state = "rejected";
  },
  run: function (workFunction) {
    try {
      workFunction(
        this.resolveCallBack.bind(this),
        this.rejectCallBack.bind(this)
      );
    } catch (error) {
      console.log("Promise inner catch");
      this.rejectCallBack(error);
      //
    }
  },
};

function myWork(resolve, reject) {
  const myRandNumber = Math.random();
  if (myRandNumber < 0.3) {
    resolve();
  } else if (myRandNumber < 0.6) {
    reject();
  } else {
    throw new Error("Some error");
  }
  //
}
console.log(myPromise);
myPromise.run(myWork);
console.log(myPromise);
