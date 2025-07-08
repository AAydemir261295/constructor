import { request } from "http://localhost:3000/js/libs/request/fetch.js";
import MyForm from "http://localhost:3000/js/core/MyForm.js";

import { RegisterInput } from "/js/pages/login/libs/RegisterInput.js";

const url = (csrf, email) => `http://localhost:4000/register/${csrf}/${email}`;

export class RegisterForm extends MyForm {
    constructor(form, elementsRef, router, csrf) {
        super(form, [elementsRef.emailInput]);
        this.csrf = csrf;
        this.router = router;
        this.emailInput = new RegisterInput(this.form.elements[elementsRef.emailInput], form.querySelector(elementsRef.errorContainer));
        this.returnBtn = form.querySelector(elementsRef.btn);
        this.onSubmit();
        this.toLoginForm();
    }

    emailInput;
    returnBtn;
    router;
    csrf;

    async onSubmit() {
        this.form.addEventListener("submit", async (ev) => {
            let isValid = this.emailInput.validate();
            if (isValid) {
                let email = this.emailInput.getValue();
                let response = await request(url(this.csrf.get(), email));
                if (response) {
                    if (response.result) {
                        this.router.redirect({ nested: true, path: "/success", anchorType: "login", anchorName: "success", csrf: this.csrf.get(), email: email })
                    } else {
                        this.emailInput.showContainerError();
                        this.emailInput.showInputError();
                    }
                    this.csrf.update(response.csrf);
                }
            }
        })
    }

    toLoginForm() {
        this.returnBtn.addEventListener("click", () => {
            this.router.redirect({ nested: true, path: "/login", anchorType: "login", anchorName: "loginForm", csrf: this.csrf.get() });
        })
    }
}