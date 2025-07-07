"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginElements = void 0;
exports.loginElements = {
    tree: {
        ele: "main", css: ["main", "hidden"], options: { id: "main" }, styles: [], childs: [
            {
                ele: "div", anchorParent: { type: "login" }, styles: ["loginContainer"], childs: [
                    {
                        ele: "form", anchor: { toAttach: false, type: "login", name: "pincode" }, css: ["invisible"], styles: ["loginContainerForm"], options: { id: "pincode-form" }, childs: [
                            {
                                ele: 'div', styles: ["pincodeContainer"], options: { id: "pincode-container" },
                                childs: [
                                    {
                                        ele: "input", css: ['input', "nostyle-input"], styles: ["pincodeContainerInput"],
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
                            },
                            { ele: "button", css: ['btn-submit', "nostyle-btn"], styles: ["loginContainerBtn"], options: { id: "submit-btn", type: "submit", innerText: "Войти" } },
                        ]
                    },
                    {
                        ele: "form", anchor: { toAttach: true, type: "login", name: "login" }, css: ["invisible"], styles: ["loginContainerForm"], options: { id: "login-form" }, childs: [
                            {
                                ele: "div", styles: ["loginContainerInputContainer"], childs: [
                                    { ele: "input", styles: ["loginContainerInput"], css: ['input', "nostyle-input"], options: { placeholder: "Электронная почта", type: "text", name: "login-input" } },
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
                ]
            }
        ],
    },
    elements: {
        main: {
            ref: "#main"
        },
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
        loginContainerBtns: {
            "display": "flex",
            "flex-direction": "column",
            "justify-content": "space-between",
            "align-items": "center",
            "height": "60px",
            "width": "100%",
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
        loginContainerBtn: {
            "border-radius": "8px",
            "height": "24px",
            "width": "180px",
        },
    }
};
