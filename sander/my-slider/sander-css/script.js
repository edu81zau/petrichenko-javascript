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
            this.buttonAS1.addEventListener("click", this.onClickChangeSlide.bind(this));
            this.buttonAS2 = document.querySelector("#demoDisplay .buttonAS2");
            this.buttonAS2.addEventListener("click", this.onClickChangeSlide.bind(this));
            this.sliderContainer = document.querySelector("#demoDisplay .slider-container");
            this.slides = this.sliderContainer.querySelectorAll(".slide");
        },
        onClickChangeSlide: function () {
            console.log("app.demoDisplay.onClickChangeSlide", arguments);
            if(arguments[0]["target"].className === "buttonAS1"){
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
            this.buttonAS1.addEventListener("click", this.onClickChangeSlide.bind(this));
            this.buttonAS2 = document.querySelector("#demoVisibility .buttonAS2");
            this.buttonAS2.addEventListener("click", this.onClickChangeSlide.bind(this));
            this.sliderContainer = document.querySelector("#demoVisibility .slider-container");
            this.slides = this.sliderContainer.querySelectorAll(".slide");
        },
        onClickChangeSlide: function () {
            console.log("app.demoVisibility.onClickChangeSlide", arguments);
            if(arguments[0]["target"].className === "buttonAS1"){
                this.slides[1].classList.remove("active");
                this.slides[0].classList.add("active");
                console.log(this.slides);
            } else {
                this.slides[0].classList.remove("active");
                this.slides[1].style.backgroundColor = "gold";
                this.slides[1].classList.add("active");
            }
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
            this.buttonAS1.addEventListener("click", this.onClickChangeSlide.bind(this));
            this.buttonAS2 = document.querySelector("#demoOpacity .buttonAS2");
            this.buttonAS2.addEventListener("click", this.onClickChangeSlide.bind(this));
            this.sliderContainer = document.querySelector("#demoOpacity .slider-container");
            this.slides = this.sliderContainer.querySelectorAll(".slide");
        },
        onClickChangeSlide: function () {
            console.log("app.demoOpacity.onClickChangeSlide", arguments);
            if(arguments[0]["target"].className==="buttonAS1"){
                this.slides[1].classList.remove("active");
                this.slides[0].classList.add("active");
                console.log(this.slides);
            } else {
                this.slides[0].classList.remove("active");
                this.slides[1].style.backgroundColor = "darkorange";
                this.slides[1].classList.add("active");
            }
            //
        }

    }
}