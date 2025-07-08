"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginElements = void 0;
exports.loginElements = {
    tree: {
        ele: "main", classList: ["main"], childs: [
            {
                ele: "div", classList: ["login-container"], childs: [
                    {
                        ele: "form", classList: ["login-container__form"], options: { id: "login-form" }, childs: [
                            {
                                ele: "div", classList: ["login-container__input-container"], childs: [
                                    { ele: "input", classList: ["login-container__input", "input", "nostyle-input"], options: { placeholder: "Электронная почта", type: "text", name: "email-input" } },
                                    {
                                        ele: 'div', classList: ["login-container__pincode-container", "pincode-container", "hidden"],
                                        childs: [
                                            {
                                                ele: "input", classList: ["pincode-container__input", "input", "nostyle-input",],
                                                options: { name: "pincode0", type: "text", maxLength: "1" }
                                            },
                                            {
                                                ele: "input", classList: ["pincode-container__input", "input", "nostyle-input"],
                                                options: { name: "pincode1", type: "text", maxLength: "1", tabindex: "-1" }
                                            },
                                            {
                                                ele: "input", classList: ["pincode-container__input", "input", "nostyle-input"],
                                                options: { name: "pincode2", type: "text", maxLength: "1", tabindex: "-1" }
                                            },
                                            {
                                                ele: "input", classList: ["pincode-container__input", "input", "nostyle-input"],
                                                options: { name: "pincode3", type: "text", maxLength: "1", tabindex: "-1" }
                                            },
                                            {
                                                ele: "input", classList: ["pincode-container__input", "input", "nostyle-input"],
                                                options: { name: "pincode4", type: "text", maxLength: "1", tabindex: "-1" }
                                            },
                                            {
                                                ele: "input", classList: ["pincode-container__input", "input", "nostyle-input"],
                                                options: { name: "pincode5", type: "text", maxLength: "1", tabindex: "-1" }
                                            },
                                        ]
                                    }
                                ]
                            },
                            {
                                ele: "div", classList: ["login-container__btns"], childs: [
                                    { ele: "button", classList: ["login-container__btn", "btn-submit", "nostyle-btn"], options: { type: "submit", innerText: "Войти" } },
                                    { ele: "button", classList: ["login-container__btn", "btn-submit", "nostyle-btn"], options: { type: "button", innerText: "Регистрация" } },
                                ]
                            },
                        ]
                    },
                ]
            }
        ],
    },
    elements: {
        loginForm: {
            ref: {
                loginForm: "login-form",
                emailInput: "email-input",
                pincodesIds: ["pincode0", "pincode1", "pincode2", "pincode3", "pincode4", "pincode5"],
                pincodeContainer: "pincode-container"
            },
            animations: {
                show: "show 0.1s linear 0.1s forwards",
                hide: "hide 0.1s linear forwards",
            }
        }
    },
    styles: [
        "style.css",
    ]
};
