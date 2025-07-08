export class EmailInput {

    input;
    animation;
    emailPattern = new RegExp(
        /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/
    );

    constructor(element) {
        this.input = element;
        this.onChange();
    }

    getValue() {
        return this.input.value;
    }

    setValue(value) {
        this.input.value = value;
    }

    showInputError() {
        this.input.classList.add("input--error");
    }

    hideInputError() {
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

    onChange() {
        this.input.addEventListener("input", (ev) => {
            this.hideInputError();
        })
    }

}