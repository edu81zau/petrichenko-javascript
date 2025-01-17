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
        if (this.rootEl === null) {
            throw new Error("Elements not found");
        }

        this.sliderContainer = this.rootEl.querySelector(".zau-slider__items");
        if (null === this.sliderContainer) {
            throw new Error("Container for slides not found");
        }
        this.items = this.sliderContainer.querySelectorAll(".zau-slider__item");
        if (this.items.length < 1) {
            throw new Error("Slides not found");
        }
        this.pointContainer = this.rootEl.querySelector(".zau-slider__points");
        if (null === this.pointContainer) {
            throw new Error("Container for points not found");
        }
        this.points = [];
        this.buttonNext = this.rootEl.querySelector(".next");
        if (null === this.buttonNext) {
            throw new Error("Button not found");
        }
        this.buttonPrev = this.rootEl.querySelector(".prev");
        if (null === this.buttonPrev) {
            throw new Error("Button not found");
        }

        this.init();
    }

    init() {
        this.buttonNext.addEventListener("click", this.onClickUp.bind(this));
        this.buttonPrev.addEventListener("click", this.onClickDown.bind(this));

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
        //event.target.parentNode.children -
        // возвращает HTMLCollection — живую коллекцию дочерних элементов родительского узла.
        //Array.from() - создает новый массив из массивоподобного объекта или итерируемого объекта.
        const parentNodeEls = Array.from(event.target.parentNode.children);
        const elIndex = parentNodeEls.indexOf(event.target);
        this.setActiveSlide(elIndex);
    }
}
