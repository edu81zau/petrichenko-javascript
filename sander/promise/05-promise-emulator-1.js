//Внутренный механизм промисов
function myWork(resolve, reject) {
  //resolve();
  reject();
  //
}

function myPromise(workFunction) {
  let resolveCallBack = function () {
    console.log("Promise success");
  };

  let rejectCallBack = function () {
    console.log("Promise error");
  };
  workFunction(resolveCallBack, rejectCallBack);
  //
}

myPromise(myWork);
