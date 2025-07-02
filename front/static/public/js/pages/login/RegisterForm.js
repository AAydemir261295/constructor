import { EmailInput } from "/js/pages/login/libs/EmailInput.js";
import Form from "/js/core/MyForm.js";
import { Csrf } from "/js/libs/csrf/Csrf.js";
import { request } from "/js/libs/request/fetch.js";
import { RegisterInput } from "/js/pages/login/libs/RegisterInput.js";

const url = (csrf, email) => `http://localhost:4000/register/${csrf}/${email}`;

export class RegisterForm extends Form {

    email;
    isValid;
    isRegistered;
    errorContainer;

    constructor(elements) {
        super(elements.ref.registerForm, [elements.ref.emailInput]);
        this.emailInput = new RegisterInput(this.form.elements[elements.ref.emailInput], elements.ref.errorContainer);
        this.onSubmit();
    }

    async onSubmit() {
        this.form.addEventListener("submit", async (ev) => {
            this.isValid = this.emailInput.validate();
            if (this.isValid) {
                this.email = this.emailInput.getValue();
                let csrf = new Csrf();
                let response = await request(url(csrf.get(), this.email));
                if (response) {
                    if (response.result) {
                        this.isRegistered = true;
                    } else {
                        this.emailInput.showContainerError();
                        this.emailInput.showInputError();
                    }
                    csrf.update(response.csrf);
                }
            }
        })
    }

    hide() {
        this.form.classList.add("invisible");
        setTimeout(() => {
            this.form.classList.add("hidden");
        }, 200)
    }

    show() {
        setTimeout(() => {
            this.form.classList.remove("hidden");
        }, 200)
        setTimeout(() => {
            this.form.classList.remove("invisible");
        }, 300)
    }
}