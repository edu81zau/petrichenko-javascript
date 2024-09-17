"use strict";

let testData1 = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "7 month",
  },
};
const personalPlanPeter = {
  showAgeAndLangs: function (oldObject) {
    //console.log("showAgeAndLangs", JSON.stringify(arguments));

    const newArr = oldObject.skills.languages;
    let resultStr = `Мне ${oldObject.age} и я владею языками:`;
    if (newArr.length == 0) {
      return resultStr;
    }
    newArr.forEach(function (item, i, newArr) {
      resultStr += " " + item.toUpperCase();
    });
    return resultStr;
  },
};

//console.log(personalPlanPeter.showAgeAndLangs(testData1));

function showExperience(countExperience) {
  //console.log("showExperience", JSON.stringify(arguments));

  //let quantityMonth = countExperience?.skills?.experience;
  let { skills } = countExperience;
  let { exp } = skills || {};
  // if (typeof exp !== "string") {
  //   exp = "";
  // }
  return exp;
}

function showProgrammingLangs(originalObject) {
  //console.log("showProgrammingLangs", JSON.stringify(arguments));
  let resultString = "";
  if (Object.keys(originalObject.skills.programmingLangs).length == 0) {
    return "";
  }
  const secondObject = Object.assign(
    {},
    originalObject["skills"]["programmingLangs"]
  );
  for (let key in secondObject) {
    resultString += `Язык ${key} изучен на ${secondObject[key]}` + "\n";
  }
  return resultString;
}

//console.log(showExperience(testData1));

//console.log(showProgrammingLangs(testData1));
