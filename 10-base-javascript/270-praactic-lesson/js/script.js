"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};
// my example to do first task
// const myAdv = document.getElementsByClassName("promo__adv");
// myAdv[0].remove();

//в результате решения выяснилось, что getElements...не работают.
//Или я не умею их использовать

const adv = document.querySelectorAll(".promo__adv img"),
  poster = document.querySelector(".promo__bg"),
  oldName = poster.querySelector(".promo__genre"),
  movieList = document.querySelector(".promo__interactive-list");

adv.forEach((item) => {
  item.remove();
});

oldName.textContent = "драма";
poster.style.backgroundImage = "url('img/bg.jpg')";

movieList.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `<li class="promo__interactive-item"> ${++i}. ${film}
                            <div class="delete"></div>
                          </li>`;
});
