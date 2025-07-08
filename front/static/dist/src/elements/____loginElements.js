"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginElements = void 0;
exports.loginElements = {
    tree: {
        ele: "main", css: ["main", "hidden"], options: { id: "main" }, styles: [], childs: [
            {
                ele: "div", anchorParent: { type: "login" }, styles: ["loginContainer"], childs: []
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
        }
    }
};
