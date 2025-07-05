import { RegisterForm } from "/js/pages/login/RegisterForm.js";
import { LoginForm } from "/js/pages/login/LoginForm.js";
import { SuccessMessage } from "/js/pages/login/SuccessMessage.js";

const changes = ["hidden", "invisible"];

export class LoginPage {

    constructor(loginElements, router, domInteractions) {
        this.router = router;
        this.elements = loginElements;
        this.domInteractions = domInteractions;
        this.domInteractions.setStylez(loginElements.stylez);
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

    async drawPage(parent, loginElements) {
        await this.domInteractions.buildTree(loginElements.tree, parent);
        this.container = document.querySelector(loginElements.elements.main.ref);
        this.successContainer = new SuccessMessage(loginElements.elements.success);
        this.loginForm = new LoginForm(loginElements.elements.loginForm, this.router);
        this.registerForm = new RegisterForm(loginElements.elements.registerForm);

        this.changeForm();
        this.onSuccessRegister();
        this.onSuccessReturnToLogin();
    }


    showPage() {
        this.container.classList.remove("hidden");
        this.container.style.animation = "show 0.1s linear forwards";
    }

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
            let newElements = this.domInteractions.registerTree(this.elements, changes)
            this.router.redirect({ elements: newElements, path: "/register", moduleName: "/login" }, true);
        })

        this.registerForm.returnBtn.addEventListener("click", () => {
            this.registerForm.hide();
            this.loginForm.show();
            let newElements = this.domInteractions.loginTree(this.elements, changes)
            this.router.redirect({ elements: newElements, path: "/login", moduleName: "/login" }, true);
        })
    }


}


