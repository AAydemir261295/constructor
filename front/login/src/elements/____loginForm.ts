export const loginForm = {
    tree:
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
    elements: {
        loginForm: {
            ref: {
                loginForm: "#login-form",
                emailInput: "login-input",
                registerBtn: "#register-btn"
            }
        },
    },
    stylez: {
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
        loginContainerBtn: {
            "border-radius": "8px",
            "height": "24px",
            "width": "180px",
        },
    },
}