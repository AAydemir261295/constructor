import MyPage from "http://localhost:3000/js/core/MyPage.js";

// import { PincodeForm } from "/js/pages/login/forms/PincodeForm.js";
import { RegisterForm } from "/js/pages/login/forms/RegisterForm.js";
import { LoginForm } from "/js/pages/login/forms/LoginForm.js";
// import { PincodeForm } from "./forms/PincodeForm";
// import { SuccessMessage } from "/js/pages/login/SuccessMessage.js";


const changes = ["hidden", "invisible"];

export class LoginPage extends MyPage {
    constructor(loginElements, router, domInteractions, csrf) {
        super(loginElements, router, domInteractions, csrf);
        this.domInteractions.setStylez(loginElements.stylez);
    }

    pincodeForm;
    loginForm;
    registerForm;
    pincodeForm;
    currentForm;
    successContainer;
    returnBtn;

    container;

    async renderPage(path, data) {
        await this.render();

        // this.successContainer = new SuccessMessage(this.pageData.elements.success);
        // this.pincodeForm = new PincodeForm()

        switch (path) {
            case "/login":
                this.currentForm = "loginForm";
                this.loginForm = new LoginForm(this.pageData.elements.loginForm, this.nestedRedirect, this.csrf);
                this.loginForm.show();
                break;
            case "/pincode":
                this.currentForm = "pincode";
                // this.pincodeForm = new PincodeForm(this.pageData.elements.pincodeForm, this.rou)
                break;
            case "/register":
                this.currentForm = "registerForm";
                this.registerForm = new RegisterForm(this.pageData.elements.registerForm, this.router, this.csrf);
                this.registerForm.show();
                break;
            case "/success":
                break;
        }


        this.changeFormListeners();

        // this.setListeners();
    }

    // setListeners() {
    // this.changeFormListeners();
    // this.onSuccessRegister();
    // this.onSuccessReturnToLogin();
    // }

    // onSuccessReturnToLogin() {
    //     this.successContainer.btn.addEventListener("click", () => {
    //         this.successContainer.hide();
    //         this.loginForm.show();
    //     })
    // }


    // onSuccessRegister() {
    //     this.registerForm.form.addEventListener("submit", () => {
    //         if (this.registerForm.isRegistered) {
    //             this.registerForm.hide();
    //             this.successContainer.show();
    //         }
    //     })
    // }

    changeFormListeners() {
        // if (this.currentForm == "loginForm") {
            this.loginForm.registerBtn.addEventListener("click", (e) => {
                // this.loginForm.hide();
                this.currentForm = "registerForm";

                this.changeAnchorContent("login", "registerForm");

                // setTimeout(() => {
                //     this.nestedRedirect("/register", "register", "login");
                // }, 200);

                // setTimeout(() => {
                //     if (!this.registerForm) {
                //         this.registerForm = new RegisterForm(this.pageData.elements.registerForm, this.csrf);
                //     }
                //     this.registerForm.show();
                // }, 200)

            })
        // }

        // if (this.currentForm == "registerForm") {
        //     this.registerForm.returnBtn.addEventListener("click", (e) => {
        //         console.log("clicked");
        //         this.registerForm.hide();
        //         this.currentForm = "loginForm";

        //         setTimeout(() => {
        //             this.nestedRedirect("/login", "login", "login");
        //         }, 200);

        //         setTimeout(() => {
        //             if (!this.loginForm) {
        //                 this.loginForm = new LoginForm(this.pageData.elements.registerForm, this.csrf);
        //             }
        //             this.loginForm.show();
        //         }, 200)

        //     })
        // }
    }


}


