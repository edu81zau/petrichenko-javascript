// Когда весь HTML-документ будет полностью загружен и готов к взаимодействию, выполни функции,
// которые находится внутри фигурных скобок.

window.addEventListener("DOMContentLoaded", function () {
  // Tabs
  // В это блоке реализуется функциональность переключения вкладок.
  // При запуске страницы все вкладки скрываются (hideTabContent()).
  // Затем показывается первая вкладка (showTabContent()).
  // При клике на заголовок вкладки проверяется, по какой вкладке кликнули,
  // и затем показывается соответствующая вкладка, а все остальные скрываются.

  let tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", function (event) {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // Timer

  const deadline = "2024-12-11";

  function getTimeRemaining(endtime) {
    //Date.parse(endtime): Преобразует строку endtime в миллисекунды с начала эпохи Unix.
    //Date.parse(new Date()): Получает текущее время в миллисекундах.

    const t = Date.parse(endtime) - Date.parse(new Date()),
      // t / (1000 * 60 * 60 * 24) - делит оставшееся время в миллисекундах
      // на количество миллисекунд в одном дне.
      // Math.floor() округляет результат вниз, чтобы получить целое число дней.
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }

  //Эта функция создает обратный отсчет на веб-странице, используя HTML элементы для
  // отображения оставшегося времени до указанной даты и времени.
  // Функция getTimeRemaining отвечает за расчет оставшегося времени,
  //  а функция getZero добавляет ведущий ноль к однозначным числам.
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadline);

  // Modal

  // modalTrigger: использует document.querySelectorAll для поиска всех элементов на странице,
  // у которых есть атрибут data-modal. Обычно это кнопки, которые будут открывать модальное окно.
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    // modal: использует document.querySelector для поиска элемента с классом .modal.
    // Это сам модальное окно, которое будет появляться и исчезать.
    modal = document.querySelector(".modal");

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    //Устанавливает для document.body.style.overflow значение "",
    //возвращая возможность прокрутки страницы.
    document.body.style.overflow = "";
  }

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    //document.body.style.overflow значение "hidden",
    //предотвращая прокрутку страницы, пока модальное окно открыто.
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
  }

  //Вешает обработчик события "click" на элемент .modal.
  //Проверяет, куда пользователь кликнул внутри модального окна:
  //Если клик произошел по самому окну (e.target === modal)
  //или по элементу с атрибутом data-close равным пустому значению
  //(e.target.getAttribute("data-close") === ""), то вызывается функция closeModal для закрытия окна.

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal();
    }
  });

  //document.addEventListener("keydown", ...):
  //Вешает обработчик события "keydown" на весь документ.
  //Проверяет, нажата ли клавиша "Escape" (e.code === "Escape") и при этом
  //модальное окно открыто (modal.classList.contains("show")).
  //Если да, то вызывается функция closeModal для закрытия окна по нажатию клавиши Esc.
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(openModal, 300000);
  // Изменил значение, чтобы не отвлекало

  //Эта функция предназначена для открытия модального окна при достижении пользователем конца страницы.

  //   Условие:
  //   window.pageYOffset: Возвращает количество пикселей,
  //   на которое пользователь прокрутил страницу сверху.
  //   document.documentElement.clientHeight: Возвращает высоту видимой области окна браузера.
  //   document.documentElement.scrollHeight: Возвращает общую высоту документа, включая скрытые части.
  //   Логика условия: Если сумма прокрученной части страницы и высоты видимой области равна или
  //   больше общей высоты документа, значит пользователь достиг конца страницы.

  //  Действия при выполнении условия:
  //  openModal(): Вызывается функция openModal()  для открытия модального окна.
  //  window.removeEventListener("scroll", showModalByScroll): Убирается обработчик события scroll,
  //  чтобы функция showModalByScroll больше не вызывалась при дальнейшей прокрутке страницы.
  //  Это необходимо, чтобы модальное окно не открывалось повторно.

  // window.addEventListener("scroll", showModalByScroll);

  //  Вешаем обработчик события:
  //  К объекту window добавляется обработчик события scroll. Это означает, что каждый раз,
  //  когда пользователь прокручивает страницу, будет вызываться функция showModalByScroll.
  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
  window.addEventListener("scroll", showModalByScroll);

  // Используем классы для создание карточек меню

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement("div");

      if (this.classes.length === 0) {
        this.classes = "menu__item";
        element.classList.add(this.classes);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }

      element.innerHTML = `
              <img src=${this.src} alt=${this.alt}>
              <h3 class="menu__item-subtitle">${this.title}</h3>
              <div class="menu__item-descr">${this.descr}</div>
              <div class="menu__item-divider"></div>
              <div class="menu__item-price">
                  <div class="menu__item-cost">Цена:</div>
                  <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
              </div>
          `;
      this.parent.append(element);
    }
  } // end class MenuCard

  const getResourse = async (url, data) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Cound not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getResourse("http://localhost:3000/menu").then((data) => {
    data.forEach(({ img, altimg, title, descr, price }) => {
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        ".menu .container"
      ).render();
    });
  });

  const forms = document.querySelectorAll("form");
  const message = {
    loading: "img/form/spinner.svg",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так...",
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    });
    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
              display: block;
              margin: 0 auto;
          `;
      // Это метод, который добавляется к элементу DOM.
      //Он позволяет вставить новый элемент в определенное место относительно исходного элемента.
      //form - это тот элемент, относительно которого будет происходить вставка.
      //"afterend": Это аргумент, указывающий, что новый элемент должен быть вставлен сразу после
      //form и всех его дочерних элементов.
      //Переменная statusMessage должна содержать новый элемент, который нужно вставить.
      form.insertAdjacentElement("afterend", statusMessage);

      const formData = new FormData(form);

      //Здесь форма cначале преврящается в массив массивов, потом в объект, потом в JSON
      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData("http://localhost:3000/requests", json)
        .then((data) => {
          console.log(data);
          showThanksModal(message.success);
          form.reset();
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");

    prevModalDialog.classList.add("hide");
    openModal();

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
          <div class="modal__content">
              <div class="modal__close" data-close>×</div>
              <div class="modal__title">${message}</div>
          </div>
      `;
    document.querySelector(".modal").append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      closeModal();
    }, 4000);
  }
  fetch(" http://localhost:3000/menu")
    .then((data) => data.json())
    .then((res) => console.log(res));
});

// getResourse("http://localhost:3000/menu").then((data) => creatCard(data));

// function creatCard(data) {
//   data.forEach(({ img, altimg, title, descr, price }) => {
//     const element = document.createElement("div");
//     element.classList.add("menu__item");
//     element.innerHTML = `
//             <img src=${img} alt=${altimg}>
//             <h3 class="menu__item-subtitle">${title}</h3>
//             <div class="menu__item-descr">${descr}</div>
//             <div class="menu__item-divider"></div>
//             <div class="menu__item-price">
//                 <div class="menu__item-cost">Цена:</div>
//                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
//             </div>
//     `;
//     document.querySelector(".menu .container").append(element);
//   });
// }
// Forms
