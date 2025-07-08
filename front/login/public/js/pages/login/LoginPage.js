import MyPage from "http://localhost:3000/js/core/MyPage.js";

import { RegisterForm } from "/js/pages/login/forms/RegisterForm.js";
import { LoginForm } from "/js/pages/login/forms/LoginForm.js";
import { PincodeForm } from "/js/pages/login/forms/PincodeForm.js";
import { SuccessMessage } from "/js/pages/login/SuccessMessage.js";


export class LoginPage extends MyPage {
    constructor(loginElements, router, domInteractions, csrf) {
        super(loginElements, router, domInteractions, csrf);
        // this.domInteractions.setStylez(loginElements.stylez);
    }

    pincodeForm;
    loginForm;
    registerForm;
    successContainer;

    restore(data) {
        if (data.hasOwnProperty("email")) {
            this.loginForm.emailInput.setValue(data.email);
        }
    }

    async renderPage(path, data) {
        await this.render();

        this.loginForm = new LoginForm(this.pageAnchors.loginForm, this.pageData.elements.loginForm.ref, this.router, this.csrf);
        this.registerForm = new RegisterForm(this.pageAnchors.registerForm, this.pageData.elements.registerForm.ref, this.router, this.csrf);
        this.pincodeForm = new PincodeForm(this.pageAnchors.pincodeForm, this.pageData.elements.pincodeForm.ref, this.router, this.csrf);
        this.successContainer = new SuccessMessage(this.pageAnchors.success, this.pageData.elements.success.ref, this.router, this.csrf);

    }
}


