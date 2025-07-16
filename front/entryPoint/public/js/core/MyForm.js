// import { MyEvent } from "/js/core/MyEvent.js";

class MyForm {
    constructor(form, inputNames) {
        this.#form = form;
        var that = this;

        this.form.addEventListener("submit", (ev) => {
            ev.preventDefault();
            new FormData(this.form);
        })

        this.form.addEventListener("formdata", (ev) => {
            let formData = ev.formData;
            inputNames.forEach((inputName) => {
                formData.set(inputName, formData.get(inputName))
                console.log(formData.get(inputName));
            });
            that.#formData = formData;
        })
    }

    #form;
    #formData;
    #inputs;

    get inputs() {
        return this.#inputs;
    }

    set inputs(value) {
        this.#inputs = value;
    }

    get formData() {
        return this.#formData;
    }

    get form() {
        return this.#form;
    }

    // set form(id) {
    set form(form) {

        // this.#form = document.querySelector(`#${id}`)
        this.#form = form;
    }

    set formData(formData) {
        this.#formData = formData;
    }



}

export default MyForm;
