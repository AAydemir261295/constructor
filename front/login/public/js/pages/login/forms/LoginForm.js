import MyForm from "http://localhost:3000/js/core/MyForm.js";
import { request } from "http://localhost:3000/js/libs/request/fetch.js";
import { EmailInput } from "/js/pages/login/libs/EmailInput.js";



const urls = {
    login: (csrf, email) => `http://localhost:4000/login/${csrf}/${email}`,
    pincode: (csrf, email, pincode) => `http://localhost:4000/pincode/${csrf}/${email}/${pincode}`
};

export class LoginForm extends MyForm {


    constructor(form, elementsRef, router, csrf) {
        super(form, [elementsRef.emailInput]);
        this.csrf = csrf;
        this.router = router;
        this.emailInput = new EmailInput(this.form.elements[elementsRef.emailInput],);
        this.registerBtn = document.querySelector(elementsRef.registerBtn);
        this.onSubmit();
        this.toRegisterForm();
    }

    emailInput;
    registerBtn;
    router;
    csrf;

    onSubmit() {
        this.form.addEventListener("submit", async (ev) => {
            let isValid = this.emailInput.validate();
            if (isValid) {
                let email = this.emailInput.getValue();
                let response = await request(urls.login(this.csrf.get(), email));
                if (response) {
                    if (response.result) {
                        this.router.redirect({ nested: true, path: "/pincode", anchorType: "login", anchorName: "pincodeForm", csrf: this.csrf.get(), email: email })
                    } else {
                        this.emailInput.showInputError();
                    }
                    this.csrf.update(response.csrf);
                }
            }
        })
    }

    toRegisterForm() {
        this.registerBtn.addEventListener("click", () => {
            this.router.redirect({ nested: true, path: "/register", anchorType: "login", anchorName: "registerForm", csrf: this.csrf.get() });
        })
    }

}