import { EmailInput } from "/js/pages/login/libs/EmailInput.js";
import { PincodeContainer } from "/js/pages/login/libs/PincodeContainer.js";
import Form from "/js/core/MyForm.js";
import { Csrf } from "/js/libs/csrf/Csrf.js";
import { request } from "/js/libs/request/fetch.js";


const urls = {
    login: (csrf, email) => `http://localhost:4000/login/${csrf}/${email}`,
    pincode: (csrf, email, pincode) => `http://localhost:4000/pincode/${csrf}/${email}/${pincode}`
};

export class LoginForm extends Form {


    constructor(elements) {
        console.log(elements);
        super(elements.ref.loginForm, [elements.ref.emailInput, ...elements.ref.pincodesIds]);
        this.emailInput = new EmailInput(this.form.elements[elements.ref.emailInput], elements.animations.hide);
        this.pincodeContainer = new PincodeContainer(elements.ref.pincodeContainer,
            [this.form.elements[elements.ref.pincodesIds[0]],
            this.form.elements[elements.ref.pincodesIds[1]],
            this.form.elements[elements.ref.pincodesIds[2]],
            this.form.elements[elements.ref.pincodesIds[3]],
            this.form.elements[elements.ref.pincodesIds[4]],
            this.form.elements[elements.ref.pincodesIds[5]]],
            elements.animations.show);
        this.registerBtn = document.querySelector(elements.ref.registerBtn);
        this.onSubmit();
    }

    emailInput;
    pincodeContainer;
    email;
    pincode;
    registerBtn;
    isPincodeTime = false;


    hideRegisterBtn() {
        this.registerBtn.style.opacity = 0;
        setTimeout(() => {
            this.registerBtn.classList.add("hidden");
        }, 200)
    }

    onSubmit() {
        this.form.addEventListener("submit", async (ev) => {
            if (this.isPincodeTime) {
                let isValid = this.pincodeContainer.validate();
                if (isValid) {
                    let csrf = new Csrf();
                    let pincode = this.pincodeContainer.getValue();
                    let response = await request(urls.pincode(csrf.get(), this.email, pincode));
                    console.log(response);
                    if (response) {
                        if (response.result) {
                            window.location.replace("/home");
                        } else {
                            this.pincodeContainer.showError();
                        }
                        csrf.update(response.csrf);
                    }
                }
            } else {
                let isValid = this.emailInput.validate();
                if (isValid) {
                    let csrf = new Csrf();
                    this.email = this.emailInput.getValue();
                    let response = await request(urls.login(csrf.get(), this.email));
                    console.log(response);
                    if (response) {
                        if (response.result) {
                            this.isPincodeTime = true;
                            this.emailInput.hide();
                            this.pincodeContainer.show();
                            this.hideRegisterBtn();
                        } else {
                            this.emailInput.showInputError();
                        }
                        csrf.update(response.csrf);
                    }
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