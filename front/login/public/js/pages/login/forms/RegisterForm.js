import { request } from "http://localhost:3000/js/libs/request/fetch.js";
import MyForm from "http://localhost:3000/js/core/MyForm.js";

import { RegisterInput } from "/js/pages/login/libs/RegisterInput.js";

const url = (csrf, email) => `http://localhost:4000/register/${csrf}/${email}`;

export class RegisterForm extends MyForm {
    constructor(elements, router, csrf) {
        super(elements.ref.registerForm, [elements.ref.emailInput]);
        this.csrf = csrf;
        this.router = router;
        this.emailInput = new RegisterInput(this.form.elements[elements.ref.emailInput], elements.ref.errorContainer);
        this.returnBtn = document.querySelector(elements.ref.btn);
        this.onSubmit();
    }

    email;
    isValid;
    isRegistered;
    errorContainer;
    returnBtn;
    csrf;

    async onSubmit() {
        this.form.addEventListener("submit", async (ev) => {
            this.isValid = this.emailInput.validate();
            if (this.isValid) {
                this.email = this.emailInput.getValue();
                let response = await request(url(this.csrf.get(), this.email));
                if (response) {
                    if (response.result) {
                        this.isRegistered = true;
                        // this.router
                    } else {
                        this.emailInput.showContainerError();
                        this.emailInput.showInputError();
                    }
                    this.csrf.update(response.csrf);
                }
            }
        })
    }

    hide() {
        this.form.classList.add("invisible");
    }

    show() {
        this.form.classList.remove("invisible");
    }
}