export class Csrf {

    csrf;

    constructor() {
        this.csrf = document.querySelector("#csrf");
    }

    update(value) {
        this.csrf.value = value;
        console.log(this.csrf.value);
    }

    get() {
        return this.csrf.value;
    }
}