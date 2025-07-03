import { EmailInput } from "/js/pages/login/libs/EmailInput.js";

export class RegisterInput extends EmailInput {


    errorContainer;

    constructor(element, errorContainer) {
        super(element);
        this.errorContainer = document.querySelector(`.${errorContainer}`);
        this.onChange();
    }


    showContainerError() {
        this.errorContainer.classList.remove("hidden");
        setTimeout(() => {
            this.errorContainer.classList.remove("invisible");
        }, 1)
    }

    hideContainerError() {
        this.errorContainer.classList.add("invisible");
        setTimeout(() => {
            this.errorContainer.classList.add("hidden");
        }, 200);
    }

    onChange() {
        this.input.addEventListener("input", (ev) => {
            this.hideInputError();
            this.hideContainerError();
        })
    }

}