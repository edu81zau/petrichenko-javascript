class Slider {
    rootEl;
    sliderContainer;
    pointContainer;
    buttonNext;
    buttonPrev;
    indexElement = 0;
    items;
    points;

    constructor(sliderSelector) {
        console.log("sliderSelector.constructor", sliderSelector);
        this.rootEl = document.querySelector(sliderSelector);
        console.log("rootEl", this.rootEl);
        //@TODO проверить rootEl на null
        if (this.rootEl.length < 1) {
            throw new Error("Elements not found");
            return;
        }


        this.sliderContainer = this.rootEl.querySelector(".zau-slider__items");
        this.items = this.sliderContainer.querySelectorAll(".zau-slider__item");
        this.pointContainer = this.rootEl.querySelector(".zau-slider__points");
        this.points = [];
        //@TODO: проверить, что все элементы найдены

        this.init();
    }

    init() {
//@TODO: избавиться от всех if, которые проверены в конструкторе
        this.buttonNext = this.rootEl.querySelector(".next");
        if (this.buttonNext) {
            this.buttonNext.addEventListener("click", this.onClickUp.bind(this));
        } else {
            throw new Error("Button not found");
        }

        this.buttonPrev = this.rootEl.querySelector(".prev");
        if (this.buttonPrev) {
            this.buttonPrev.addEventListener("click", this.onClickDown.bind(this));
        } else {
            throw new Error("Button not found");
        }

        const fragment = document.createDocumentFragment();
        if (this.items.length > 0) {
            this.items.forEach((item) => {
                const newPoint = document.createElement("div");
                newPoint.classList.add("zau-slider__point");
                this.points.push(newPoint);
                fragment.appendChild(newPoint);
            })
        }

        this.pointContainer.appendChild(fragment);
        this.pointContainer.addEventListener("click", this.onClickChange.bind(this));
        this.setActiveSlide(this.indexElement);
    }

    setActiveSlide(index) {
        console.log("Slider.setActiveSlide", index);
        if (index !== this.indexElement) {
            this.items[this.indexElement].classList.remove("active");
            this.points[this.indexElement].classList.remove("active");
        }
        this.items[index].classList.add("active");
        this.points[index].classList.add("active");
        this.indexElement = index;
    }

    onClickUp() {
        console.log("Slider.onClickUp");
        let newIndex = this.indexElement + 1;

        console.log(newIndex);
        if (newIndex >= this.items.length) {
            newIndex = 0;
        }
        this.setActiveSlide(newIndex);
    }

    onClickDown() {
        console.log("Slider.onClickDown");
        let newIndex = this.indexElement - 1;

        if (newIndex < 0) {
            newIndex = this.items.length - 1;
        }
        this.setActiveSlide(newIndex);
    }

    onClickChange(event) {
        console.log("Slider.onClickChange", arguments);
        //@TODO: разобрать и разнести на несколько строк.
        // Методу setActiveSlide должна передаваться переменная
        this.setActiveSlide(Array.from(event.target.parentNode.children).indexOf(event.target));
    }
}
