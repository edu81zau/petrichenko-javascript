"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const adv = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    oldName = poster.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    checkLike = addForm.querySelector('[type="checkbox"]');

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorit = checkLike.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 15)}...`;
      }
      if (favorit) {
        console.log("Добавляем любимый фильм");
      }
      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);
      createMovieList(movieDB.movies, movieList);
    }

    event.target.reset();
  });

  adv.forEach((item) => {
    item.remove();
  });

  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = () => {
    oldName.textContent = "драма";
    poster.style.backgroundImage = "url('img/bg.jpg')";
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  // movieDB.movies.forEach((film, i) => {
  //   movieList.innerHTML = "";
  //   movieList.innerHTML += `<li class="promo__interactive-item"> ${++i}. ${film}
  //                             <div class="delete"></div>
  //                           </li>`;
  // });

  //movieDB.movies.sort();

  function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML += `<li class="promo__interactive-item"> ${++i}. ${film}
                                <div class="delete"></div>
                              </li>`;
    });
    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createMovieList(films, parent);
      });
    });
  }
  deleteAdv(adv);
  makeChanges();
  //sortArr(movieDB.movies);
  createMovieList(movieDB.movies, movieList);
});
