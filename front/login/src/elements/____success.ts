export const success = {
    tree: {
        ele: "div", anchor: { toAttach: false, type: "login", name: "success" }, css: ["invisible"], styles: ["loginContainerSuccess"], options: { id: "register-success-container" }, childs: [
            { ele: "p", options: { innerText: "Вы успешно зарегистрировались!" } },
            { ele: "button", css: ["nostyle-btn"], styles: ["loginContainerBtn"], options: { id: "to-login-btn", innerText: "Войти" } }
        ]
    },
    elements: {
        success: {
            ref: {
                container: "#register-success-container",
                btn: "#to-login-btn"
            }
        }
    },
    stylez: {
        loginContainerBtn: {
            "border-radius": "8px",
            "height": "24px",
            "width": "180px",
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