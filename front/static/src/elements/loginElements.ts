export const loginElements =
{
    tree:
    {
        ele: "main", classList: ["main"], childs: [
            {
                ele: "div", classList: ["login-container"], childs: [
                    {
                        ele: "form", classList: ["login-container__form"], options: { id: "login-form" }, childs: [
                            {
                                ele: "div", classList: ["login-container__input-container"], childs: [
                                    { ele: "input", classList: ["login-container__input", "input", "nostyle-input"], options: { placeholder: "Электронная почта", type: "text", name: "login-input" } },
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
                                    { ele: "button", classList: ["login-container__btn", "btn-submit", "nostyle-btn"], options: { id: "submit-btn", type: "submit", innerText: "Войти" } },
                                    { ele: "button", classList: ["login-container__btn", "btn-submit", "nostyle-btn"], options: { id: "register-btn", type: "button", innerText: "Регистрация" } },
                                ]
                            },
                        ]
                    },
                    {
                        ele: "form", classList: ["login-container__form", "hidden", "invisible"], options: { id: "register-form" }, childs: [
                            {
                                ele: "div", classList: ["login-container__input-container"], childs: [
                                    { ele: "input", classList: ["login-container__input", "input", "nostyle-input"], options: { placeholder: "Электронная почта", type: "text", name: "register-input" } },
                                ]
                            },
                            {
                                ele: "div", classList: ["login-container__input-container-error", "hidden", "invisible"], childs: [
                                    { ele: "p", options: { innerText: "Электронная почта уже используется" } },
                                ]
                            },
                            {
                                ele: "div", classList: ["login-container__btns"], childs: [
                                    { ele: "button", classList: ["login-container__btn", "btn-submit", "nostyle-btn"], options: { id: "submit-btn", type: "submit", innerText: "Зарегистрироваться" } },
                                    { ele: "button", classList: ["login-container__btn", "btn-submit", "nostyle-btn"], options: { id: "return-btn", type: "button", innerText: "Войти" } },

                                ]
                            },
                        ]
                    },
                    {
                        ele: "div", classList: ["login-container__success", "hidden", "invisible"], childs: [
                            { ele: "p", classList: ["login-container__success-msg"], options: { innerText: "Вы успешно зарегистрировались!" } },
                            { ele: "button", classList: ["login-container__btn", "btn-submit", "nostyle-btn"], options: { id: "to-login-btn", innerText: "Войти" } }
                        ]
                    }
                ]
            }
        ],

    },
    elements: {
        loginForm: {
            ref: {
                loginForm: "login-form",
                emailInput: "login-input",
                pincodesIds: ["pincode0", "pincode1", "pincode2", "pincode3", "pincode4", "pincode5"],
                pincodeContainer: "pincode-container"
            },
            animations: {
                show: "show 0.1s linear 0.1s forwards",
                hide: "hide 0.1s linear forwards",
            }
        },
        registerForm: {
            ref: {
                registerForm: "register-form",
                emailInput: "register-input",
                errorContainer: "login-container__input-container-error",
                btn: "#return-btn"

            }
        },
        success: {
            ref: {
                container: "login-container__success",
                btn: "to-login-btn"
            }
        }

    },
    styles: [
        "style.css",
    ]
}




