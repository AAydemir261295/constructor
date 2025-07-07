"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pincodeForm = void 0;
exports.pincodeForm = {
    tree: {
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
    elements: {
        pincodeForm: {
            ref: {
                pincodeForm: "#pincode-form",
                pincodesIds: ["pincode0", "pincode1", "pincode2", "pincode3", "pincode4", "pincode5"],
                pincodeContainer: "#pincode-container",
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
    },
};
