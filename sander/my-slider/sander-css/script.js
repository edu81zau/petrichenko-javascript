const app = {
    init: function () {
        console.log("app.init", arguments);
        this.demoDisplay.init();
        this.demoVisibility.init();
        this.demoOpacity.init();
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
            this.buttonAS1.addEventListener("click", this.slide1Activation.bind(this));
            this.buttonAS2 = document.querySelector("#demoDisplay .buttonAS2");
            this.buttonAS2.addEventListener("click", this.slide1Activation.bind(this));
            this.sliderContainer = document.querySelector("#demoDisplay .slider-container");
            this.slides = this.sliderContainer.querySelectorAll(".slide");
        },
        slide1Activation: function () {
            console.log("app.demoDisplay.slide1Activation", arguments);
            this.slides[0].classList.add("active");
             //
        }
    },
    demoVisibility:{
        buttonAS1: undefined,
        buttonAS2: undefined,
        sliderContainer: undefined,
        /**
         * @type NodeList
         */
        slides: undefined,

        init: function () {
            console.log("app.demoVisibility.init", arguments);
            //---------- Visibility ----------
            this.buttonAS1 = document.querySelector("#demoVisibility .buttonAS1");
            this.buttonAS1.addEventListener("click", this.slide1Activation.bind(this));
            this.buttonAS2 = document.querySelector("#demoVisibility .buttonAS2");
            this.buttonAS2.addEventListener("click", this.slide1Activation.bind(this));
            this.sliderContainer = document.querySelector("#demoVisibility .slider-container");
            this.slides = this.sliderContainer.querySelectorAll(".slide");
        },
        slide1Activation: function () {
            console.log("app.demoVisibility.slide1Activation", arguments);
            this.slides[0].classList.add("active");
            //
        },
        //
    },
    demoOpacity:{
        buttonAS1: undefined,
        buttonAS2: undefined,
        sliderContainer: undefined,
        /**
         * @type NodeList
         */
        slides: undefined,

        init: function () {
            console.log("app.demoOpacity.init", arguments);
            //---------- Opacity ----------
            this.buttonAS1 = document.querySelector("#demoOpacity .buttonAS1");
            this.buttonAS1.addEventListener("click", this.slide1Activation.bind(this));
            this.buttonAS2 = document.querySelector("#demoOpacity .buttonAS2");
            this.buttonAS2.addEventListener("click", this.slide1Activation.bind(this));
            this.sliderContainer = document.querySelector("#demoOpacity .slider-container");
            this.slides = this.sliderContainer.querySelectorAll(".slide");
        },
        slide1Activation: function () {
            console.log("app.demoOpacity.slide1Activation", arguments);
            this.slides[0].classList.add("active");
            //
        }

    }
}