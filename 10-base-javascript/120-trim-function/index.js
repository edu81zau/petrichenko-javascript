/* Задание на урок:

Метод trim() удаляет пробельные символы с начала и конца строки. 
Пробельными символами в этом контексте считаются все собственно пробельные символы
(пробел, табуляция, неразрывный пробел и прочие) и все символы конца строки (LF, CR и прочие).
@link https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/trim
*/

"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
      b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("Done");
    } else {
      console.log("Error");
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотренно довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();
console.log(personalMovieDB);

function showMyDB(chekObj) {
  if (!Boolean(chekObj.privat)) {
    console.log(chekObj);
  }
  //
}

showMyDB(personalMovieDB);

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(
      `"Ваш любимый жанр под номером ${i + 1}`
    );
  }
  console.log(personalMovieDB);
  //
}

writeYourGenres();
