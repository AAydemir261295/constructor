class Navigation {
    constructor(elementsRef) {
        this.ele = document.querySelector(elementsRef.navigation);
        this.showHideBtn = document.querySelector(elementsRef.showHideBtn);

        this.listeners();
    }


    ele;
    showHideBtn;
    isMouseOver;

    delayedCall = this.onMouseLeave.bind(this);

    onMouseLeave() {
        if (!this.isMouseOver) {
            this.hide(this.ele);
            setTimeout(() => {
                this.show(this.showHideBtn);
            }, 200)
        }
    }

    listeners() {
        this.showHideBtn.addEventListener("click", () => {
            this.hide(this.showHideBtn);
            setTimeout(() => {
                this.show(this.ele);
            }, 200)
        })

        this.ele.addEventListener("mouseover", (ev) => {
            this.isMouseOver = true;
        })

        this.ele.addEventListener("mouseleave", (ev) => {
            this.isMouseOver = false;
            setTimeout(this.delayedCall, 2000);
        })
    }

    show(hideableEle) {
        hideableEle.classList.remove("hidden");

        setTimeout(() => {
            hideableEle.classList.remove("invisible");
        }, 100);
    }

    hide(hideableEle) {
        hideableEle.classList.add("invisible");

        setTimeout(() => {
            hideableEle.classList.add("hidden");
        }, 200);
    }
}

export default Navigation;