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
            this.showBtn.classList.add("hidden");
            this.ele.classList.remove("hidden");
        }
    }

    hideAside() {
        this.isActive = false;
        this.ele.classList.add("hidden");
        this.showBtn.classList.remove("hidden");
    }



}

export default Aside;