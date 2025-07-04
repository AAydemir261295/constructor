"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeElements = void 0;
exports.homeElements = {
    tree: {
        ele: "main", classList: ["main-home"], childs: [
            { ele: "main", classList: ["container"] },
            {
                ele: "header", classList: ["home-header"], childs: [
                    {
                        ele: "nav", classList: ["nav"], childs: [
                            {
                                ele: "ul", classList: ["nav__list", "nostyle-list"], childs: [
                                    {
                                        ele: "div", classList: ["nav__list-items-wrapp"], childs: [
                                            {
                                                ele: "li", classList: ["nav__list-item", "nav__list-item-btn"], childs: [
                                                    { ele: "button", classList: ["nav__list-btn", "nav-btn", "nostyle-btn"] }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        ele: "li", classList: ["nav__list-item", "nav__list-item-logo"], childs: [
                                            { ele: "h6", classList: ["nav__logo", "logo"] }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
        ]
    },
    elements: {},
    styles: [
        "style.css",
    ]
};
