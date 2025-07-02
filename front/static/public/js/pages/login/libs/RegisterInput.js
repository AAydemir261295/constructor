export class RegisterInput {

    input;
    animation;
    errorContainer;
    emailPattern = new RegExp(
        /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/
    );

    constructor(element, errorContainer) {
        this.input = element;
        this.errorContainer = document.querySelector(`.${errorContainer}`);
        this.onChange();
    }

    getValue() {
        return this.input.value;
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


    showInputError() {
        this.input.classList.add("input--error");
    }

    hideError() {
        this.input.classList.remove("input--error");

    }

    validate() {
        let email = this.input.value;
        let isValid = this.emailPattern.test(email);
        if (isValid) {
            return true;
        } else {
            this.showInputError();
            return false;
        }
    }

    hide() {
        this.input.style.animation = this.animation;
        setTimeout(() => {
            this.input.classList.add("hidden");
        }, 100)
    }


    onChange() {
        this.input.addEventListener("input", (ev) => {
            this.hideError();
            this.hideContainerError();
        })
    }

}