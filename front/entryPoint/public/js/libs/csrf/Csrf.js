export class Csrf {

    csrf;

    constructor() {
        this.csrf = document.querySelector("#csrf");
    }

    update(value) {
        this.csrf.value = value;
    }

    get() {
        return this.csrf.value;
    }
}