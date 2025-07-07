import MyForm from "http://localhost:3000/js/core/MyForm.js";
import { request } from "http://localhost:3000/js/libs/request/fetch.js";

import { EmailInput } from "/js/pages/login/libs/EmailInput.js";
import { PincodeContainer } from "/js/pages/login/libs/PincodeContainer.js";



const urls = {
    login: (csrf, email) => `http://localhost:4000/login/${csrf}/${email}`,
    pincode: (csrf, email, pincode) => `http://localhost:4000/pincode/${csrf}/${email}/${pincode}`
};

export class LoginForm extends MyForm {


    constructor(elements, redirect, csrf) {
        super(elements.ref.loginForm, [elements.ref.emailInput]);

        this.csrf = csrf;
        this.redirect = redirect;
        this.emailInput = new EmailInput(this.form.elements[elements.ref.emailInput], elements.animations.hide);
        this.registerBtn = document.querySelector(elements.ref.registerBtn);
        this.onSubmit();
    }

    emailInput;
    isPincodeTime;
    email;
    pincode;
    registerBtn;
    redirect;
    csrf;

    toRegisterForm(){
        
    }

    onSubmit() {
        this.form.addEventListener("submit", async (ev) => {
            let isValid = this.emailInput.validate();
            if (isValid) {
                this.email = this.emailInput.getValue();
                let response = await request(urls.login(this.csrf.get(), this.email));
                if (response) {
                    if (response.result) {
                        this.redirect("/pincode", "pincode", "login", { email: this.email });
                    } else {
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