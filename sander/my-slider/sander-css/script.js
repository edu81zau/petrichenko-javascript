const app = {
    init: function () {
        console.log("app.init", arguments);
        this.demoDisplay.init();
        this.demoDisplayAbsolute.init();
        this.demoZIndex.init();
        //this.demoVisibility.init();
        //this.demoOpacity.init();
    },

    demoDisplay: {
        buttonAS1: undefined,
        buttonAS2: undefined,
        sliderContainer: undefined,
        /**
         * @type NodeList
         */
        slides: undefined,

        init: function () {
            console.log("app.demoDisplay.init", arguments);

            //---------- Display ----------
            this.buttonAS1 = document.querySelector("#demoDisplay .buttonAS1");
            this.buttonAS1.addEventListener("click", this.onClickChangeSlide.bind(this));
            this.buttonAS2 = document.querySelector("#demoDisplay .buttonAS2");
            this.buttonAS2.addEventListener("click", this.onClickChangeSlide.bind(this));
            this.sliderContainer = document.querySelector("#demoDisplay .slider-container");
            this.slides = this.sliderContainer.querySelectorAll(".slide");
        },
        onClickChangeSlide: function () {
            console.log("app.demoDisplay.onClickNext", arguments);
            if (arguments[0]["target"].className === "buttonAS1") {
                this.slides[1].classList.remove("active");
                this.slides[0].classList.add("active");
                console.log(this.slides);
            } else {
                this.slides[0].classList.remove("active");
                this.slides[1].style.backgroundColor = "forestgreen";
                this.slides[1].classList.add("active");
            }
            //
        }
    },

    demoDisplayAbsolute: {
        buttonNext: undefined,
        buttonPrev: undefined,
        slideIndex: 0,
        sliderContainer: undefined,
        /**
         * @type NodeList
         */
        slides: undefined,

        init: function () {
            console.log("app.demoDisplayAbsolute.init", arguments);

            //---------- DisplayAbsolute ----------
            const rootEl = document.querySelector("#demoAbsolute");
            this.buttonNext = rootEl.querySelector(".buttonNext");
            this.buttonNext.addEventListener("click", this.onClickNext.bind(this));
            this.buttonPrev = rootEl.querySelector(".buttonPrev");
            this.buttonPrev.addEventListener("click", this.onClickPrev.bind(this));
            this.sliderContainer = rootEl.querySelector(".slider-window .slider-container-absolut");
            this.slides = this.sliderContainer.querySelectorAll(".slide");
            this.setActiveSlide(0);
        },
        setActiveSlide: function (slideIndex) {
            this.sliderContainer.style.top = "-" + (slideIndex * 200) + "px";
            this.slideIndex = slideIndex;
        },
        onClickNext: function () {
            console.log("app.demoDisplayAbsolute.onClickNext", arguments);
            if ((this.slideIndex + 1) >= this.slides.length) {
                this.setActiveSlide(0);
            } else {
                this.setActiveSlide(this.slideIndex + 1);
            }
        },
        onClickPrev: function () {
            console.log("app.demoDisplayAbsolute.onClickPrev", arguments);
            if ((this.slideIndex - 1) < 0) {
                this.setActiveSlide(this.slides.length - 1);
            } else {
                this.setActiveSlide(this.slideIndex - 1);
            }
        }
    },

    demoZIndex: {
        buttonUp: undefined,
        buttonDown: undefined,
        sliderContainer: undefined,
        slideIndex: 0,
        /**
         * @type NodeList
         */
        slides: undefined,

        init: function () {
            console.log("app.demoZIndex.init", arguments);

            //---------- DisplayAbsolute ----------
            const rootEl = document.querySelector("#demoZIndex");
            this.buttonUp = rootEl.querySelector(".buttonUp");
            this.buttonUp.addEventListener("click", this.onClickUp.bind(this));
            this.buttonDown = rootEl.querySelector(".buttonDown");
            this.buttonDown.addEventListener("click", this.onClickDown.bind(this));
            this.sliderContainer = rootEl.querySelector(".slider-window");
            this.slides = this.sliderContainer.querySelectorAll(".slide");
            this.slides[this.slideIndex].classList.add("active");
        },
        onClickUp: function () {
            console.log("app.demoZIndex.onClickUp", arguments);
            this.slides[this.slideIndex].classList.remove("active");
            ++this.slideIndex;
            console.log(this.slideIndex);
            if (this.slideIndex >= this.slides.length) {
                this.slideIndex = 0;
            }
            this.slides[this.slideIndex].classList.add("active");
        },
        onClickDown: function () {
            console.log("app.demoZIndex.onClickUp", arguments);
            this.slides[this.slideIndex].classList.remove("active");
            --this.slideIndex;
            if (this.slideIndex < 0) {
                this.slideIndex = this.slides.length - 1;
            }
            this.slides[this.slideIndex].classList.add("active");
        }

    }
    // demoVisibility:{
    //     buttonAS1: undefined,
    //     buttonAS2: undefined,
    //     sliderContainer: undefined,
    //     /**
    //      * @type NodeList
    //      */
    //     slides: undefined,
    //
    //     init: function () {
    //         console.log("app.demoVisibility.init", arguments);
    //         //---------- Visibility ----------
    //         this.buttonAS1 = document.querySelector("#demoVisibility .buttonAS1");
    //         this.buttonAS1.addEventListener("click", this.onClickChangeSlide.bind(this));
    //         this.buttonAS2 = document.querySelector("#demoVisibility .buttonAS2");
    //         this.buttonAS2.addEventListener("click", this.onClickChangeSlide.bind(this));
    //         this.sliderContainer = document.querySelector("#demoVisibility .slider-container");
    //         this.slides = this.sliderContainer.querySelectorAll(".slide");
    //     },
    //     onClickChangeSlide: function () {
    //         console.log("app.demoVisibility.onClickNext", arguments);
    //         if(arguments[0]["target"].className === "buttonAS1"){
    //             this.slides[1].classList.remove("active");
    //             this.slides[0].classList.add("active");
    //             console.log(this.slides);
    //         } else {
    //             this.slides[0].classList.remove("active");
    //             this.slides[1].style.backgroundColor = "gold";
    //             this.slides[1].classList.add("active");
    //         }
    //         //
    //     },
    //     //
    // },
    // demoOpacity:{
    //     buttonAS1: undefined,
    //     buttonAS2: undefined,
    //     sliderContainer: undefined,
    //     /**
    //      * @type NodeList
    //      */
    //     slides: undefined,
    //
    //     init: function () {
    //         console.log("app.demoOpacity.init", arguments);
    //         //---------- Opacity ----------
    //         this.buttonAS1 = document.querySelector("#demoOpacity .buttonAS1");
    //         this.buttonAS1.addEventListener("click", this.onClickChangeSlide.bind(this));
    //         this.buttonAS2 = document.querySelector("#demoOpacity .buttonAS2");
    //         this.buttonAS2.addEventListener("click", this.onClickChangeSlide.bind(this));
    //         this.sliderContainer = document.querySelector("#demoOpacity .slider-container");
    //         this.slides = this.sliderContainer.querySelectorAll(".slide");
    //     },
    //     onClickChangeSlide: function () {
    //         console.log("app.demoOpacity.onClickNext", arguments);
    //         if(arguments[0]["target"].className==="buttonAS1"){
    //             this.slides[1].classList.remove("active");
    //             this.slides[0].classList.add("active");
    //             console.log(this.slides);
    //         } else {
    //             this.slides[0].classList.remove("active");
    //             this.slides[1].style.backgroundColor = "darkorange";
    //             this.slides[1].classList.add("active");
    //         }
    //         //
    //     }
    //
    // }
}