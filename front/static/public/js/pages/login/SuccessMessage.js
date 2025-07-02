export class SuccessMessage {


    btn;
    container;


    constructor(elements) {
        this.container = document.querySelector(`.${elements.ref.container}`);
        this.btn = document.querySelector(`#${elements.ref.btn}`);
    }


    show() {
        setTimeout(() => {
            this.container.classList.remove("hidden");
        }, 200)
        setTimeout(() => {
            this.container.classList.remove("invisible");
        }, 300)
    }

    hide() {
        this.container.classList.add("invisible");
        setTimeout(() => {
            this.container.classList.add("hidden");
        }, 200)
    }
}