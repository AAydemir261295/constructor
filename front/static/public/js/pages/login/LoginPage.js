import { RegisterForm } from "/js/pages/login/RegisterForm.js";
import MyDom from "/js/libs/dom/index.js";
import { LoginForm } from "/js/pages/login/LoginForm.js";
import { SuccessMessage } from "/js/pages/login/SuccessMessage.js";
import { EventEmitter } from "/js/libs/eventEmitter/EventEmitter.js";

const changes = ["hidden", "invisible"];

export class LoginPage extends EventEmitter {


    constructor(loginElements, router) {
        super();
        this.router = router;
        this.elements = loginElements;
        this.body = document.querySelector('.body');
        this.domInteractions = new MyDom();
        this.domInteractions.buildTree(loginElements.tree, this.body);
        this.container = document.querySelector(".main");
        this.successContainer = new SuccessMessage(loginElements.elements.success);
        this.loginForm = new LoginForm(loginElements.elements.loginForm, router);
        this.registerForm = new RegisterForm(loginElements.elements.registerForm);

        this.changeForm();
        this.onSuccessRegister();
        this.onSuccessReturnToLogin();
    }

    router;
    elements;
    domInteractions;
    body;
    loginForm;
    registerForm;
    successContainer;
    returnBtn;
    container;

    onSuccessReturnToLogin() {
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
            let newElements = this.domInteractions.editRegisterTree(this.elements, changes)
            this.router.redirect({ elements: newElements, path: "/register", moduleName: "/login" }, true);
        })

        this.registerForm.returnBtn.addEventListener("click", () => {
            this.registerForm.hide();
            this.loginForm.show();
            let newElements = this.domInteractions.editLoginTree(this.elements, changes)
            this.router.redirect({ elements: newElements, path: "/login", moduleName: "/login" }, true);
        })
    }


}


