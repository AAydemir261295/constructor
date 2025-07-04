"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginElements = void 0;
exports.loginElements = {
    tree: {
        // classList: ["main"]
        ele: "main", classList: [], childs: [
            {
                ele: "div", classList: ["loginContainer"], childs: [
                    {
                        ele: "form", classList: ["loginContainerForm"], options: { id: "login-form" }, childs: [
                            {
                                ele: "div", classList: ["loginContainerInputContainer"], childs: [
                                    { ele: "input", classList: ["loginContainerInput"], css: ['input', "nostyle-input"], options: { placeholder: "Электронная почта", type: "text", name: "login-input" } },
                                    {
                                        ele: 'div', css: ["hidden"], classList: ["pincodeContainer"],
                                        childs: [
                                            {
                                                ele: "input", classList: ["pincodeContainerInput"],
                                                options: { name: "pincode0", type: "text", maxLength: "1" }
                                            },
                                            {
                                                ele: "input", css: ['input', "nostyle-input"], classList: ["pincodeContainerInput"],
                                                options: { name: "pincode1", type: "text", maxLength: "1", tabindex: "-1" }
                                            },
                                            {
                                                ele: "input", css: ['input', "nostyle-input"], classList: ["pincodeContainerInput"],
                                                options: { name: "pincode2", type: "text", maxLength: "1", tabindex: "-1" }
                                            },
                                            {
                                                ele: "input", css: ['input', "nostyle-input"], classList: ["pincodeContainerInput"],
                                                options: { name: "pincode3", type: "text", maxLength: "1", tabindex: "-1" }
                                            },
                                            {
                                                ele: "input", css: ['input', "nostyle-input"], classList: ["pincodeContainerInput"],
                                                options: { name: "pincode4", type: "text", maxLength: "1", tabindex: "-1" }
                                            },
                                            {
                                                ele: "input", css: ['input', "nostyle-input"], classList: ["pincodeContainerInput"],
                                                options: { name: "pincode5", type: "text", maxLength: "1", tabindex: "-1" }
                                            },
                                        ]
                                    }
                                ]
                            },
                            {
                                ele: "div", classList: ["loginContainerBtns"], childs: [
                                    { ele: "button", css: ['btn-submit', "nostyle-btn"], classList: ["loginContainerBtn"], options: { id: "submit-btn", type: "submit", innerText: "Войти" } },
                                    { ele: "button", css: ['btn-submit', "nostyle-btn"], classList: ["loginContainerBtn"], options: { id: "register-btn", type: "button", innerText: "Регистрация" } },
                                ]
                            },
                        ]
                    },
                    {
                        ele: "form", css: ["hidden", "invisible"], classList: ["loginContainerForm"], options: { id: "register-form" }, childs: [
                            {
                                ele: "div", classList: ["loginContainerInputContainer"], childs: [
                                    { ele: "input", css: ["input", "nostyle-input"], classList: ["loginContainerInput"], options: { placeholder: "Электронная почта", type: "text", name: "register-input" } },
                                ]
                            },
                            {
                                ele: "div", css: ["hidden", "invisible"], classList: ["loginContainerInputContainerError"], childs: [
                                    { ele: "p", options: { innerText: "Электронная почта уже используется" } },
                                ]
                            },
                            {
                                ele: "div", classList: ["loginContainerBtns"], childs: [
                                    { ele: "button", css: ["nostyle-btn", "btn-submit"], classList: ["loginContainerBtn"], options: { id: "submit-btn", type: "submit", innerText: "Зарегистрироваться" } },
                                    { ele: "button", css: ["nostyle-btn", "btn-submit"], classList: ["loginContainerBtn"], options: { id: "return-btn", type: "button", innerText: "Войти" } },
                                ]
                            },
                        ]
                    },
                    {
                        ele: "div", css: ["hidden", "invisible"], classList: ["loginContainerSuccess"], childs: [
                            { ele: "p", options: { innerText: "Вы успешно зарегистрировались!" } },
                            { ele: "button", css: ["nostyle-btn"], classList: ["loginContainerBtn"], options: { id: "to-login-btn", innerText: "Войти" } }
                        ]
                    }
                ]
            }
        ],
    },
    // tree:
    // {
    //     ele: "main", classList: ["main"], childs: [
    //         {
    //             ele: "div", classList: ["login-container"], childs: [
    //                 {
    //                     ele: "form", classList: ["loginContainerForm"], options: { id: "login-form" }, childs: [
    //                         {
    //                             ele: "div", classList: ["login-container__input-container"], childs: [
    //                                 { ele: "input", classList: ["login-container__input", "input", "noStyleInput"], options: { placeholder: "Электронная почта", type: "text", name: "login-input" } },
    //                                 {
    //                                     ele: 'div', classList: ["pincode-container", "hidden"],
    //                                     childs: [
    //                                         {
    //                                             ele: "input", classList: ["pincodeContainerInput", "input", "noStyleInput",],
    //                                             options: { name: "pincode0", type: "text", maxLength: "1" }
    //                                         },
    //                                         {
    //                                             ele: "input", classList: ["pincodeContainerInput", "input", "noStyleInput"],
    //                                             options: { name: "pincode1", type: "text", maxLength: "1", tabindex: "-1" }
    //                                         },
    //                                         {
    //                                             ele: "input", classList: ["pincodeContainerInput", "input", "noStyleInput"],
    //                                             options: { name: "pincode2", type: "text", maxLength: "1", tabindex: "-1" }
    //                                         },
    //                                         {
    //                                             ele: "input", classList: ["pincodeContainerInput", "input", "noStyleInput"],
    //                                             options: { name: "pincode3", type: "text", maxLength: "1", tabindex: "-1" }
    //                                         },
    //                                         {
    //                                             ele: "input", classList: ["pincodeContainerInput", "input", "noStyleInput"],
    //                                             options: { name: "pincode4", type: "text", maxLength: "1", tabindex: "-1" }
    //                                         },
    //                                         {
    //                                             ele: "input", classList: ["pincodeContainerInput", "input", "noStyleInput"],
    //                                             options: { name: "pincode5", type: "text", maxLength: "1", tabindex: "-1" }
    //                                         },
    //                                     ]
    //                                 }
    //                             ]
    //                         },
    //                         {
    //                             ele: "div", classList: ["loginContainerBtns"], childs: [
    //                                 { ele: "button", classList: ["loginContainerBtn", "noStyleBtn"], options: { id: "submit-btn", type: "submit", innerText: "Войти" } },
    //                                 { ele: "button", classList: ["loginContainerBtn", "noStyleBtn"], options: { id: "register-btn", type: "button", innerText: "Регистрация" } },
    //                             ]
    //                         },
    //                     ]
    //                 },
    //                 {
    //                     ele: "form", classList: ["loginContainerForm", "hidden", "invisible"], options: { id: "register-form" }, childs: [
    //                         {
    //                             ele: "div", classList: ["login-container__input-container"], childs: [
    //                                 { ele: "input", classList: ["login-container__input", "input", "noStyleInput"], options: { placeholder: "Электронная почта", type: "text", name: "register-input" } },
    //                             ]
    //                         },
    //                         {
    //                             ele: "div", classList: ["login-container__input-container-error", "hidden", "invisible"], childs: [
    //                                 { ele: "p", options: { innerText: "Электронная почта уже используется" } },
    //                             ]
    //                         },
    //                         {
    //                             ele: "div", classList: ["loginContainerBtns"], childs: [
    //                                 { ele: "button", classList: ["loginContainerBtn", "noStyleBtn"], options: { id: "submit-btn", type: "submit", innerText: "Зарегистрироваться" } },
    //                                 { ele: "button", classList: ["loginContainerBtn", "noStyleBtn"], options: { id: "return-btn", type: "button", innerText: "Войти" } },
    //                             ]
    //                         },
    //                     ]
    //                 },
    //                 {
    //                     ele: "div", classList: ["login-container__success", "hidden", "invisible"], childs: [
    //                         { ele: "p", classList: ["login-container__success-msg"], options: { innerText: "Вы успешно зарегистрировались!" } },
    //                         { ele: "button", classList: ["loginContainerBtn", "noStyleBtn"], options: { id: "to-login-btn", innerText: "Войти" } }
    //                     ]
    //                 }
    //             ]
    //         }
    //     ],
    // },
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
    ],
    stylez: {
        loginContainer: {
            "display": "flex",
            "flex-direction": "column",
            "justify-content": "center",
            "width": "450px",
            "height": "300px",
            "border-radius": "20px",
            "border": "2px solid #e6e6e1",
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
};
// {
//     --gray10: #f4f4f0;
//     --gray20: #e6e6e1;
//     --gray100: #9a9a96;
//     --gray200: #2d2d2b;
//     --blue100: rgb(84, 120, 168);
//     --blue200: rgb(55, 87, 130);
//     /* --blue10: rgb(177, 186, 198); */
//     --green500: rgb(85, 117, 85);
//     --green490: rgb(95, 131, 95);
//     --red200: #9c4b4b;
//     --red100: indianred;
// }
