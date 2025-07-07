// import { MyEvent } from "/js/core/MyEvent.js";

class MyForm {

    #form;
    #formData;

    constructor(id, inputNames) {
        this.#form = document.querySelector(id);
        var that = this;

        this.form.addEventListener("submit", (ev) => {
            ev.preventDefault();
            new FormData(this.form);
            // this.submit
        })

        this.form.addEventListener("formdata", (ev) => {
            let formData = ev.formData;
            inputNames.forEach(inputName => { formData.set(inputName, formData.get(inputName)) });
            that.#formData = formData;
        })
    }

    get formData() {
        return this.#formData;
    }

    get form() {
        return this.#form;
    }

    set form(id) {
        this.#form = document.querySelector(`#${id}`)
    }

    set formData(formData) {
        this.#formData = formData;
    }



}

export default MyForm;
