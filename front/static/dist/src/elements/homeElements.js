"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeElements = void 0;
exports.homeElements = {
    elements: {
        main: {
            tree: {
                ele: "main", css: ["main", "hidden", "invisible"], styles: ["main"], childs: [
                    {
                        ele: "main", styles: ["mainContainer"], childs: [
                            { ele: "aside", styles: ["aside", "leftAside"], options: { id: "left-aside" } },
                            { ele: "div", styles: ["container"], options: { id: "container" } },
                            {
                                ele: "aside", styles: ["aside", "rightAside"], options: { id: "right-aside" }, childs: [
                                    {
                                        ele: "header", styles: ["rightAsideHeader"], childs: [
                                            { ele: "h3", styles: ["rightAsideTitle"], options: { innerText: "меню" } }
                                        ]
                                    },
                                    {
                                        ele: "form", styles: ["rightAsideForm"], options: { id: "elements-form" }, childs: [
                                            {
                                                ele: "div", styles: ["typeInputContainer"], childs: [
                                                    { ele: "input", css: ["menu-input", "input", "nostyle-input"], styles: ["typeInputContainerInput"], options: { placeholder: "выберите элемент", name: "elements-input" } },
                                                    {
                                                        ele: "ul", css: ["invisible", "hidden", "nostyle-list"], styles: ["typeInputContainerDdown"], options: { id: "elements-input-ddown" }, childs: [
                                                            { ele: "li", css: ["ddown-item"], styles: ["typeInputContainerDdownItem"], options: { innerText: "контейнер" } },
                                                            { ele: "li", css: ["ddown-item"], styles: ["typeInputContainerDdownItem"], options: { innerText: "кнопка" } },
                                                            { ele: "li", css: ["ddown-item"], styles: ["typeInputContainerDdownItem"], options: { innerText: "навигация" } },
                                                            { ele: "li", css: ["ddown-item"], styles: ["typeInputContainerDdownItem"], options: { innerText: "поле ввода" } },
                                                            { ele: "li", css: ["ddown-item"], styles: ["typeInputContainerDdownItem"], options: { innerText: "боковая панель" } },
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        ele: "div", styles: ["elementsResultContainer"], options: { id: "elements-result" }, childs: [
                                            { ele: "div", css: ["hidden", "invisible", "hideable"], styles: ["containerMin"] },
                                            { ele: "button", css: ["hidden", "invisible", "hideable", "btn-submit", "nostyle-btn"], styles: ["buttonMin"], options: { type: "button", innerText: "текст" } },
                                            {
                                                ele: "nav", css: ["hidden", "invisible", "hideable"], styles: ["navMin"], childs: [
                                                    {
                                                        ele: "ul", css: ["nostyle-list"], styles: ["navMinList"], childs: [
                                                            { ele: "li", styles: ["navMinListItemLogo"] },
                                                            {
                                                                ele: "li", css: ["hoverable"], styles: ["navMinListItemBtn"], childs: [
                                                                    { ele: "span", styles: ["navMinListItemLine"] }
                                                                ]
                                                            },
                                                            {
                                                                ele: "li", css: ["hoverable"], styles: ["navMinListItemBtn"], childs: [
                                                                    { ele: "span", styles: ["navMinListItemLine"] }
                                                                ]
                                                            },
                                                            {
                                                                ele: "li", css: ["hoverable"], styles: ["navMinListItemBtn"], childs: [
                                                                    { ele: "span", styles: ["navMinListItemLine"] }
                                                                ]
                                                            },
                                                            {
                                                                ele: "li", css: ["hoverable"], styles: ["navMinListItemBtn"], childs: [
                                                                    { ele: "span", styles: ["navMinListItemLine"] }
                                                                ]
                                                            },
                                                        ]
                                                    }
                                                ]
                                            },
                                            { ele: "input", css: ["hidden", "invisible", "hideable", "input", "nostyle-input"], styles: ["inputMin"], options: { placeholder: "поле ввода", type: "text", readOnly: true } },
                                            {
                                                ele: "aside", css: ["hidden", "invisible", "hideable"], styles: ["asideMin"], childs: [
                                                    {
                                                        ele: "header", childs: [
                                                            { ele: "h2", styles: ["asideMinTitle"], options: { innerText: "заголовок" } }
                                                        ]
                                                    },
                                                    {
                                                        ele: "main", styles: ["asideMinContent"], childs: [
                                                            {
                                                                ele: "ul", css: ["nostyle-list"], styles: ["asideMinList"], childs: [
                                                                    {
                                                                        ele: "li", css: ["hoverable"], styles: ["asideMinListItem"], childs: [
                                                                            { ele: "span", styles: ["asideMinListItemLine"] }
                                                                        ]
                                                                    },
                                                                    {
                                                                        ele: "li", css: ["hoverable"], styles: ["asideMinListItem"], childs: [
                                                                            { ele: "span", styles: ["asideMinListItemLine"] }
                                                                        ]
                                                                    },
                                                                    {
                                                                        ele: "li", css: ["hoverable"], styles: ["asideMinListItem"], childs: [
                                                                            { ele: "span", styles: ["asideMinListItemLine"] }
                                                                        ]
                                                                    },
                                                                    {
                                                                        ele: "li", css: ["hoverable"], styles: ["asideMinListItem"], childs: [
                                                                            { ele: "span", styles: ["asideMinListItemLine"] }
                                                                        ]
                                                                    },
                                                                    {
                                                                        ele: "li", css: ["hoverable"], styles: ["asideMinListItem"], childs: [
                                                                            { ele: "span", styles: ["asideMinListItemLine"] }
                                                                        ]
                                                                    },
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        ele: "footer", styles: ["footer"], childs: [
                                                            {
                                                                ele: "ul", css: ["nostyle-list"], styles: ["footerList"], childs: [
                                                                    { ele: "li", css: ["hoverable"], styles: ["footerListItem"] },
                                                                    { ele: "li", css: ["hoverable"], styles: ["footerListItem"] },
                                                                    { ele: "li", css: ["hoverable"], styles: ["footerListItem"] },
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        ele: "header", styles: ["homeHeader"], childs: [
                            {
                                ele: "nav", styles: ["nav"], childs: [
                                    {
                                        ele: "ul", css: ["nostyle-list"], styles: ["navList"], childs: [
                                            {
                                                ele: "div", styles: ["navListItemsWrapp"], childs: [
                                                    {
                                                        ele: "li", styles: ["navListItem"], childs: [
                                                            { ele: "button", css: ["nav-btn", "nostyle-btn"], options: { innerText: "проекты" } }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                ele: "li", styles: ["navListItem"], childs: [
                                                    { ele: "h6", styles: ["navLogo", "logo"], options: { innerText: "лого" } }
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
            ref: {
                container: "#container",
                rightAside: {
                    elementsForm: "elements-form",
                    elementsInput: "elements-input",
                    elementsDdown: "#elements-input-ddown",
                    elementsItem: ".ddown-item",
                    elementsResult: "#elements-result",
                }
            },
            items: {
                ddownItems: [
                    "контейнер",
                    "кнопка",
                    "навигация",
                    "боковая панель",
                    "поле ввода",
                ]
            }
        }
    },
    stylez: {
        main: {
            "display": "flex",
            "flex-direction": "column",
            "justify-content": "space-between",
            "align-items": "center",
            "width": "100%",
            "height": "100vh",
            "min-height": "900px",
            /* opacity: 0; */
        },
        mainContainer: {
            "position": "relative",
            "margin-top": "20px",
            "margin-bottom": "20px",
            "height": "100%",
            "width": "1300px",
            "min-height": "800px"
        },
        aside: {
            "position": "absolute",
            "height": "100%",
            "width": "300px",
            "min-height": "800px",
            "border-radius": "30px",
            "border": "2px solid var(--gray20)",
            "z-index": "9"
        },
        leftAside: {
            "left": "-325px"
        },
        rightAside: {
            "right": "-330px",
            "border": "2px solid var(--gray20)",
            "border-radius": "30px",
        },
        rightAsideHeader: {
            "height": "50px",
            "width": "100%",
            "text-align": "center",
        },
        rightAsideTitle: {
            "font-family": "bold",
            "line-height": "0px",
            "text-transform": "uppercase",
            "color": "var(--gray200)",
        },
        rightAsideForm: {
            "width": "100%",
        },
        typeInputContainer: {
            "position": "relative",
            "display": "flex",
            "flex-direction": "column",
            "align-items": "center",
            "width": "100%",
            "height": "32px",
        },
        typeInputContainerInput: {
            "height": "28px",
            "border-radius": "10px",
            "width": "200px",
            "font-family": "regular",
            "text-align": "center",
        },
        typeInputContainerDdown: {
            "position": "absolute",
            "display": "flex",
            "flex-direction": "column",
            "align-items": "center",
            "width": "180px",
            "max-height": "100px",
            "padding": "10px",
            "background-color": "var(--gray10)",
            "border": "2px solid var(--blue100)",
            "border-radius": "10px",
            "top": "40px",
            "overflow-y": "auto",
            "overflow-x": "hidden",
            "transition": "0.2s",
        },
        typeInputContainerDdownItem: {
            "cursor": "pointer",
            "text-align": "center",
            "margin-bottom": "5px",
            "width": "100%",
            "height": "20px",
            "font-family": "medium",
            "border": "2px solid transparent",
            "border-radius": "8px",
            "transition": "0.2s",
        },
        elementsResultContainer: {
            "display": "flex",
            "flex-direction": "column",
            "align-items": "center",
            "height": "640px",
            "padding": "20px",
            "overflow-y": "auto",
            "overflow-x": "hidden",
        },
        container: {
            "position": "absolute",
            "height": "100%",
            "width": "1300px",
            "min-height": "800px",
            "border-radius": "30px",
            "border": "2px solid var(--gray20)",
            "z-index": "10",
            "background-color": "var(--gray10)",
        },
        homeHeader: {
            "width": "1200px",
            "min-height": "60px",
            "height": "60px",
            "border-radius": "20px",
            "border": "2px solid var(--gray20)",
            "margin-bottom": "20px",
        },
        nav: {
            "height": "60px",
        },
        navList: {
            "display": "flex",
            "flex-direction": "row",
            "justify-content": "space-between",
            "padding-left": "20px",
            "padding-right": "20px",
        },
        navListItemsWrapp: {
            "display": "flex",
            "flex-direction": "row",
            "justify-content": "space-between",
            "width": "auto",
            /* width: 120px; */
        },
        navListItem: {
            "max-height": "60px",
            "min-height": "60px",
        },
        navLogo: {
            /* cursor: pointer; */
            "position": "relative",
            "top": "-60px",
        },
        logo: {
            /* cursor: pointer; */
            "line-height": "0px",
            "font-size": "40px",
            "text-transform": "uppercase",
            "letter-spacing": -"1px",
            "color": "var(--gray200)",
            "font-family": "bold",
        },
        containerMin: {
            "width": "250px",
            "height": "80px",
            "border-radius": "20px",
            "border": "2px solid var(--gray20)",
        },
        buttonMin: {
            "padding": "10px 30px",
            "width": "200px",
            "word-wrap": "break-word",
            "border-radius": "15px",
            "color": "var(--gray150)",
            "border": "1px solid var(--gray20)",
        },
        navMin: {
            "width": "250px",
            "height": "40px",
            "border-radius": "15px",
            "border": "2px solid var(--gray20)",
        },
        navMinList: {
            "display": "flex",
            "flex-direction": "row",
            "justify-content": "space-around",
            "align-items": "center",
            "height": "100%",
        },
        navMinListItemLogo: {
            "width": "30px",
            "height": "30px",
            "border-radius": "10px",
            "background-color": "var(--blue200)",
        },
        navMinListItemBtn: {
            "cursor": "pointer",
            "display": "flex",
            "flex-direction": "column",
            "justify-content": "center",
            "align-items": "center",
            "width": "30px",
            "height": "15px",
            "border-radius": "5px",
            "border": "2px solid var(--gray20)",
            "transition": "0.2s",
            "text-align": "center",
        },
        navMinListItemLine: {
            "background": "var(--gray20)",
            "width": "26px",
            "height": "2px",
            "border-radius": "1px",
        },
        asideMin: {
            "display": "flex",
            "flex-direction": "column",
            "justify-content": "space-around",
            "align-items": "center",
            "width": "230px",
            "height": "380px",
            "padding": "10px",
            "border": "2px solid var(--gray20)",
            "border-radius": "20px",
        },
        asideMinTitle: {
            "line-height": "0px",
            "color": "var(--gray150)",
            "font-family": "bold",
        },
        asideMinContent: {
            "height": "230px",
            "width": "100%",
        },
        asideMinList: {
            "display": "flex",
            "flex-direction": "column",
            "justify-content": "space-between",
            "align-items": "center",
            "height": "100%",
        },
        asideMinListItem: {
            "cursor": "pointer",
            "display": "flex",
            "flex-direction": "column",
            "align-items": "center",
            "justify-content": "center",
            "border-radius": "10px",
            "border": "2px solid var(--gray20)",
            "height": "30px",
            "width": "100%",
            "transition": "0.2s",
        },
        asideMinListItemLine: {
            "background": "var(--gray20)",
            "width": "90%",
            "height": "3px",
            "border-radius": "1px",
        },
        footer: {
            "width": "230px",
            "height": "50px",
        },
        footerList: {
            "display": "flex",
            "flex-direction": "row",
            "justify-content": "space-around",
            "width": "100%",
            "height": "100%",
        },
        footerListItem: {
            "cursor": "pointer",
            "width": "50px",
            "height": "50px",
            "border-radius": "15px",
            "border": "2px solid var(--gray20)",
            "transition": " 0.2s",
        },
        inputMin: {
            "border-radius": "10px",
            "width": "200px",
            "height": "30px",
        },
    },
};
