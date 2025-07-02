export class EmailInput {

    input;
    animation;
    emailPattern = new RegExp(
        /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/
    );

    constructor(element, animation) {
        this.input = element;
        this.animation = animation;
        this.onChange();
    }

    getValue() {
        return this.input.value;
    }

    showError() {
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
            this.showError();
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
        })
    }

}