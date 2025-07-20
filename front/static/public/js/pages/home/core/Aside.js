class Aside {
    constructor(asideEle, showBtn, hideBtn) {
        this.ele = document.querySelector(asideEle);
        this.showBtn = document.querySelector(showBtn);
        this.hideBtn = document.querySelector(hideBtn);
        this.listeners();
    }

    ele;
    showBtn;
    isMouseOver;
    isActive = false;


    listeners() {
        this.showBtn.addEventListener("click", () => {
            this.showAside();
        })

        this.hideBtn.addEventListener("click", () => {
            this.hideAside();
        })

    }

    showAside() {
        if (!this.isActive) {
            this.isActive = true;
            this.showBtn.classList.add("invisible");

            setTimeout(() => {
                this.showBtn.classList.add("hidden");
            }, 200);

            setTimeout(() => {
                this.ele.classList.remove("hidden");

                setTimeout(() => {
                    this.ele.classList.remove("invisible");
                }, 10);
            }, 200)
        }
    }

    hideAside() {
        this.isActive = false;

        this.ele.classList.add("invisible");

        setTimeout(() => {
            this.ele.classList.add("hidden");
        }, 200);

        setTimeout(() => {
            this.showBtn.classList.remove("hidden");

            setTimeout(() => {
                this.showBtn.classList.remove("invisible");
            }, 10);
        }, 200)
    }



}

export default Aside;