export const registerForm = {
    tree: {
        ele: "form", anchor: { toAttach: false, type: "login", name: "register" }, styles: ["loginContainerForm"], options: { id: "register-form" }, childs: [
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
    elements: {
        registerForm: {
            ref: {
                registerForm: "#register-form",
                emailInput: "register-input",
                errorContainer: "#register-error-container",
                btn: "#return-btn"

            }
        }
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
    },
}