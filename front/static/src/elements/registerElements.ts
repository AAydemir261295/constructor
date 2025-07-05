export const registerElements =
{
    tree:
    {
        // styles: ["main"]
        ele: "main", css: ["main", "hidden"], options: { id: "main" }, styles: [], childs: [
            {
                ele: "div", styles: ["loginContainer"], childs: [
                    {
                        ele: "form", css: ["hidden", "invisible"], styles: ["loginContainerForm"], options: { id: "login-form" }, childs: [
                            {
                                ele: "div", styles: ["loginContainerInputContainer"], childs: [
                                    { ele: "input", styles: ["loginContainerInput"], css: ['input', "nostyle-input"], options: { placeholder: "Электронная почта", type: "text", name: "login-input" } },
                                    {
                                        ele: 'div', css: ["hidden"], styles: ["pincodeContainer"], options: { id: "pincode-container" },
                                        childs: [
                                            {
                                                ele: "input", styles: ["pincodeContainerInput"],
                                                options: { name: "pincode0", type: "text", maxLength: "1" }
                                            },
                                            {
                                                ele: "input", css: ['input', "nostyle-input"], styles: ["pincodeContainerInput"],
                                                options: { name: "pincode1", type: "text", maxLength: "1", tabindex: "-1" }
                                            },
                                            {
                                                ele: "input", css: ['input', "nostyle-input"], styles: ["pincodeContainerInput"],
                                                options: { name: "pincode2", type: "text", maxLength: "1", tabindex: "-1" }
                                            },
                                            {
                                                ele: "input", css: ['input', "nostyle-input"], styles: ["pincodeContainerInput"],
                                                options: { name: "pincode3", type: "text", maxLength: "1", tabindex: "-1" }
                                            },
                                            {
                                                ele: "input", css: ['input', "nostyle-input"], styles: ["pincodeContainerInput"],
                                                options: { name: "pincode4", type: "text", maxLength: "1", tabindex: "-1" }
                                            },
                                            {
                                                ele: "input", css: ['input', "nostyle-input"], styles: ["pincodeContainerInput"],
                                                options: { name: "pincode5", type: "text", maxLength: "1", tabindex: "-1" }
                                            },
                                        ]
                                    }
                                ]
                            },
                            {
                                ele: "div", styles: ["loginContainerBtns"], childs: [
                                    { ele: "button", css: ['btn-submit', "nostyle-btn"], styles: ["loginContainerBtn"], options: { id: "submit-btn", type: "submit", innerText: "Войти" } },
                                    { ele: "button", css: ['btn-submit', "nostyle-btn"], styles: ["loginContainerBtn"], options: { id: "register-btn", type: "button", innerText: "Регистрация" } },
                                ]
                            },
                        ]
                    },
                    {
                        ele: "form", css: [], styles: ["loginContainerForm"], options: { id: "register-form" }, childs: [
                            {
                                ele: "div", styles: ["loginContainerInputContainer"], childs: [
                                    { ele: "input", css: ["input", "nostyle-input"], styles: ["loginContainerInput"], options: { placeholder: "Электронная почта", type: "text", name: "register-input" } },
                                ]
                            },
                            {
                                ele: "div", css: ["hidden", "invisible"], styles: ["loginContainerInputContainerError"], options: { id: "register-error-container" }, childs: [
                                    { ele: "p", options: { innerText: "Электронная почта уже используется" } },
                                ]
                            },
                            {
                                ele: "div", styles: ["loginContainerBtns"], childs: [
                                    { ele: "button", css: ["nostyle-btn", "btn-submit"], styles: ["loginContainerBtn"], options: { id: "submit-btn", type: "submit", innerText: "Зарегистрироваться" } },
                                    { ele: "button", css: ["nostyle-btn", "btn-submit"], styles: ["loginContainerBtn"], options: { id: "return-btn", type: "button", innerText: "Войти" } },
                                ]
                            },
                        ]
                    },
                    {
                        ele: "div", css: ["hidden", "invisible"], styles: ["loginContainerSuccess"], options: { id: "register-success-container" }, childs: [
                            { ele: "p", options: { innerText: "Вы успешно зарегистрировались!" } },
                            { ele: "button", css: ["nostyle-btn"], styles: ["loginContainerBtn"], options: { id: "to-login-btn", innerText: "Войти" } }
                        ]
                    }
                ]
            }
        ],

    },
    elements: {
        main: {
            ref: "#main"
        },
        loginForm: {
            ref: {
                loginForm: "#login-form",
                emailInput: "login-input",
                pincodesIds: ["pincode0", "pincode1", "pincode2", "pincode3", "pincode4", "pincode5"],
                pincodeContainer: "#pincode-container",
                registerBtn: "#register-btn"
            },
            animations: {
                show: "show 0.1s linear 0.1s forwards",
                hide: "hide 0.1s linear forwards",
            }
        },
        registerForm: {
            ref: {
                registerForm: "#register-form",
                emailInput: "register-input",
                errorContainer: "#register-error-container",
                btn: "#return-btn"
            }
        },
        success: {
            ref: {
                container: "#register-success-container",
                btn: "#to-login-btn"
            }
        }

    },
    stylez: {
        loginContainer: {
            "display": "flex",
            "flex-direction": "column",
            "justify-content": "center",
            "width": "450px",
            "height": "300px",
            "border-radius": "20px",
            "border": "2px solid var(--gray20)",
        },
        loginContainerForm: {
            "display": "flex",
            "flex-direction": "column",
            "justify-content": "space-between",
            "align-items": "center",
            "width": "100%",
            "height": "45%",
            "transition": "0.2s",
        },
        loginContainerInputContainer: {
            "width": "220px"
        },
        loginContainerInput: {
            "height": "28px",
            "border-radius": "10px",
            "width": "100%",
            "margin-left": "-2px",
        },
        pincodeContainer: {
            "display": "flex",
            "flex-direction": "row",
            "justify-content": "space-between",
            "align-items": "center",
            "opacity": "0",
            "width": "100%",
        },
        pincodeContainerInput: {
            "text-align": "center",
            "border-radius": "8px",
            "width": "30px",
            "height": "28px",
        },
        loginContainerBtns: {
            "display": "flex",
            "flex-direction": "column",
            "justify-content": "space-between",
            "align-items": "center",
            "height": "60px",
            "width": "100%",
        },
        loginContainerBtn: {
            "border-radius": "8px",
            "height": "24px",
            "width": "180px",
        },
        loginContainerInputContainerError: {
            "display": "flex",
            "flex-direction": "column",
            "justify-content": "center",
            "width": "auto",
            "height": "30px",
            "padding": "0px 10px",
            "color": "indianred",
            "transition": "0.2s",
            "font-family": "bold",
            "font-weight": "bold",
        },
        loginContainerSuccess: {
            "display": "flex",
            "flex-direction": "column",
            "justify-content": "space-between",
            "align-items": "center",
            "width": "100%",
            "height": "45%",
            "transition": "0.2s",
            "font-family": "bold",
        }
    },
}
