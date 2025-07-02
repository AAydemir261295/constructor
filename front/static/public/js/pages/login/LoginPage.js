import { RegisterForm } from "/js/pages/login/RegisterForm.js";
import MyDom from "/js/libs/dom/index.js";
import { LoginForm } from "/js/pages/login/LoginForm.js";
import { SuccessMessage } from "/js/pages/login/SuccessMessage.js";

export class LoginPage {

    domInteractions;
    body;
    loginForm;
    registerForm;
    successContainer;
    container;

    constructor(loginElements) {
        this.body = document.querySelector('.body');
        this.domInteractions = new MyDom();
        this.domInteractions.buildTree(loginElements.tree, this.body);
        this.container = document.querySelector(".main");
        this.successContainer = new SuccessMessage(loginElements.elements.success);
        this.loginForm = new LoginForm(loginElements.elements.loginForm);
        this.registerForm = new RegisterForm(loginElements.elements.registerForm);

        this.changeForm();
        this.onSuccessRegister();
        this.returnToLogin();
    }

    returnToLogin() {
        this.successContainer.btn.addEventListener("click", () => {
            this.successContainer.hide();
            this.loginForm.show();
        })
    }


    onSuccessRegister() {
        this.registerForm.form.addEventListener("submit", () => {
            if (this.registerForm.isRegistered) {
                this.registerForm.hide();
                this.successContainer.show();
            }
        })
    }


    changeForm() {
        this.loginForm.registerBtn.addEventListener("click", (e) => {
            this.loginForm.hide();
            this.registerForm.show();
        })
    }


}


