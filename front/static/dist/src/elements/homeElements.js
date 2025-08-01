"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeElements = void 0;
exports.homeElements = {
    elements: {
        main: {
            tree: {
                ele: "main", css: ["main", "hidden"], styles: ["main"], childs: [
                    {
                        ele: "main", styles: ["mainContainer"], childs: [
                            {
                                ele: "div", css: ["hidden"], styles: ["expander", "leftAsideExpander", "pointer"], options: { id: "left-aside-show" }, childs: [
                                    {
                                        ele: "svg", options: { width: 37, height: 22, fill: "none" }, xmlns: "http://www.w3.org/2000/svg", childs: [
                                            { ele: "path", options: { d: "M6 21H31C33.7614 21 36 18.7614 36 16V6C36 3.23858 33.7614 1 31 1H6M6 21C3.23857 21 1 18.7614 1 16V6C1 3.23858 3.23857 1 6 1M6 21H11V1H6", stroke: "var(--gray10)" }, xmlns: "http://www.w3.org/2000/svg" },
                                            { ele: "path", options: { d: "M11 1V21H6C3.23857 21 1 18.7614 1 16V6C1 3.23858 3.23857 1 6 1H11Z", fill: "var(--gray10)" }, xmlns: "http://www.w3.org/2000/svg" }
                                        ]
                                    }
                                ]
                            },
                            {
                                ele: "aside", css: [], styles: ["aside", "leftAside"], options: { id: "left-aside" }, childs: [
                                    {
                                        ele: "div", styles: ["expander", "leftAsideExpanderInner", "pointer"], options: { id: "left-aside-hide" }, childs: [
                                            {
                                                ele: "svg", options: { width: 37, height: 22, fill: "none" }, xmlns: "http://www.w3.org/2000/svg", childs: [
                                                    { ele: "path", options: { d: "M6 21H31C33.7614 21 36 18.7614 36 16V6C36 3.23858 33.7614 1 31 1H6M6 21C3.23857 21 1 18.7614 1 16V6C1 3.23858 3.23857 1 6 1M6 21H11V1H6", stroke: "var(--gray10)" }, xmlns: "http://www.w3.org/2000/svg" },
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        ele: "header", styles: ["leftAsideHeader"], childs: [
                                            { ele: "h3", styles: ["leftAsideTitle"], options: { innerText: "детали" } }
                                        ]
                                    },
                                    {
                                        ele: "main", styles: ["leftAsideMain"], childs: [
                                            {
                                                ele: "ul", css: ["nostyle-list"], styles: ["leftAsideList"], options: { id: "left-aside-content" }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                ele: "div", styles: ["container"], options: { id: "container" }, childs: [
                                    { ele: "canvas", styles: ["canvaz"], options: { id: "canvaz" } }
                                ]
                            },
                            {
                                ele: "div", css: ["hidden"], styles: ["expander", "rightAsideExpander", "pointer"], options: { id: "right-aside-show" }, childs: [
                                    {
                                        ele: "svg", options: { width: 37, height: 22, fill: "none" }, xmlns: "http://www.w3.org/2000/svg", childs: [
                                            { ele: "path", options: { d: "M31 21H6C3.23858 21 1 18.7614 1 16V6C1 3.23858 3.23858 1 6 1H31M31 21C33.7614 21 36 18.7614 36 16V6C36 3.23858 33.7614 1 31 1M31 21H26V1H31", stroke: "var(--gray10)" }, xmlns: "http://www.w3.org/2000/svg" },
                                            { ele: "path", options: { d: "M26 1V21H31C33.7614 21 36 18.7614 36 16V6C36 3.23858 33.7614 1 31 1H26Z", fill: "var(--gray10)" }, xmlns: "http://www.w3.org/2000/svg" }
                                        ]
                                    }
                                ]
                            },
                            {
                                ele: "aside", css: [], styles: ["aside", "rightAside"], options: { id: "right-aside" }, childs: [
                                    {
                                        ele: "div", styles: ["expander", "rightAsideExpanderInner", "pointer"], options: { id: "right-aside-hide" }, childs: [
                                            {
                                                ele: "svg", options: { width: 37, height: 22, fill: "none" }, xmlns: "http://www.w3.org/2000/svg", childs: [
                                                    { ele: "path", options: { d: "M31 21H6C3.23858 21 1 18.7614 1 16V6C1 3.23858 3.23858 1 6 1H31M31 21C33.7614 21 36 18.7614 36 16V6C36 3.23858 33.7614 1 31 1M31 21H26V1H31", stroke: "var(--gray10)" }, xmlns: "http://www.w3.org/2000/svg" },
                                                ]
                                            }
                                        ]
                                    },
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
                                                        ele: "ul", css: ["hidden", "nostyle-list"], styles: ["typeInputContainerDdown"], options: { id: "elements-input-ddown" }, childs: [
                                                            { ele: "li", css: ["ddown-item"], styles: ["typeInputContainerDdownItem"], options: { innerText: "изображение" } },
                                                            { ele: "li", css: ["ddown-item"], styles: ["typeInputContainerDdownItem"], options: { innerText: "контейнер" } },
                                                            { ele: "li", css: ["ddown-item"], styles: ["typeInputContainerDdownItem"], options: { innerText: "кнопка" } },
                                                            { ele: "li", css: ["ddown-item"], styles: ["typeInputContainerDdownItem"], options: { innerText: "поле ввода" } },
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        ele: "div", styles: ["elementsResultContainer"], options: { id: "elements-result" }, childs: [
                                            {
                                                ele: "div", css: ["pointer", "hidden", "result-element", "hideable"], styles: ["imageWrapp"], childs: [
                                                    { ele: "img", styles: ["imageMin"] }
                                                ]
                                            },
                                            { ele: "div", css: ["pointer", "hidden", "result-element", "hideable"], styles: ["containerMin"], },
                                            { ele: "button", css: ["pointer", "hidden", "hideable", "result-element", "btn-submit", "nostyle-btn"], styles: ["buttonMin", "resultsButtonMin"], options: { type: "button", innerText: "текст" } },
                                            { ele: "input", css: ["pointer", "hidden", "hideable", "result-element", "input", "nostyle-input"], styles: ["inputMin"], options: { placeholder: "поле ввода", type: "text", readOnly: true } },
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    // {
                    //     ele: "div", styles: ["expander", "navExpander", "pointer"], options: { id: "nav-expander" }, childs: [
                    //         {
                    //             ele: "svg", options: { width: 38, height: 10, fill: "var(--gray10)" }, xmlns: "http://www.w3.org/2000/svg", childs: [
                    //                 { ele: "path", options: { d: "M12 6V4C12 2.34315 13.3431 1 15 1H34C35.6569 1 37 2.34315 37 4V6C37 7.65685 35.6569 9 34 9H15C13.3431 9 12 7.65685 12 6Z" }, xmlns: "http://www.w3.org/2000/svg" },
                    //                 { ele: "path", options: { d: "M1 6V4C1 2.34315 2.34315 1 4 1H6C7.65685 1 9 2.34315 9 4V6C9 7.65685 7.65685 9 6 9H4C2.34315 9 1 7.65685 1 6Z" }, xmlns: "http://www.w3.org/2000/svg" }
                    //             ]
                    //         }
                    //     ]
                    // },
                    // {
                    //     ele: "header", css: ["hidden"], styles: ["homeHeader"], options: { id: "navigation" }, childs: [
                    //         {
                    //             ele: "nav", styles: ["nav"], childs: [
                    //                 {
                    //                     ele: "ul", css: ["nostyle-list"], styles: ["navList"], childs: [
                    //                         {
                    //                             ele: "div", styles: ["navListItemsWrapp"], childs: [
                    //                                 {
                    //                                     ele: "li", styles: ["navListItem"], childs: [
                    //                                         { ele: "button", css: ["nav-btn", "nostyle-btn"], options: { innerText: "проекты" } }
                    //                                     ]
                    //                                 }
                    //                             ]
                    //                         },
                    //                         {
                    //                             ele: "li", styles: ["navListItem"], childs: [
                    //                                 { ele: "h6", styles: ["navLogo", "logo"], options: { innerText: "лого" } }
                    //                             ]
                    //                         }
                    //                     ]
                    //                 }
                    //             ]
                    //         }
                    //     ]
                    // },
                ]
            },
            ref: {
                container: {
                    container: "#container",
                    canvaz: "#canvaz"
                },
                rightAside: {
                    rightAside: "#right-aside",
                    elementsForm: "elements-form",
                    elementsInput: "elements-input",
                    elementsDdown: "#elements-input-ddown",
                    elementsItem: ".ddown-item",
                    elementsResult: "#elements-result",
                    showBtn: "#right-aside-show",
                    hideBtn: "#right-aside-hide",
                },
                leftAside: {
                    leftAside: "#left-aside",
                    contentContainer: "#left-aside-content",
                    form: "#aside-form",
                    removeBtn: "#remove-btn",
                    showBtn: "#left-aside-show",
                    hideBtn: "#left-aside-hide",
                    "изображение": {
                        inputs: ["width", "height"],
                    },
                    "кнопка": {
                        inputs: ["width", "height", "text"]
                    },
                    "контейнер": {
                        inputs: ["width", "height"],
                    },
                    // "навигация": {
                    //     title: "#nav-min-title",
                    //     buttons: ".hoverable",
                    //     inputs: []
                    // }
                },
                navigation: {
                    showHideBtn: "#nav-expander",
                    navigation: "#navigation",
                }
            },
            items: {
                ddownItems: [
                    "изображение",
                    "контейнер",
                    "кнопка",
                    "поле ввода",
                ],
                components: {
                    "изображение": {
                        ele: "div", css: ["pointer"], styles: ["newComponent", "borderRadius15px"], childs: [
                            {
                                ele: "div", styles: ["imageWrapp"], childs: [
                                    { ele: "img", styles: ["imageMin"] }
                                ]
                            },
                            { ele: "div", css: ["left"], styles: ["resizerLine", "eCursor", "left"] },
                            { ele: "div", css: ["left-top"], styles: ["resizerCorner", "seCursor", "leftTop"] },
                            { ele: "div", css: ["top"], styles: ["resizerLine", "sCursor", "top"] },
                            { ele: "div", css: ["right-top"], styles: ["resizerCorner", "neCursor", "rightTop"] },
                            { ele: "div", css: ["right"], styles: ["resizerLine", "eCursor", "right"] },
                            { ele: "div", css: ["right-bottom"], styles: ["resizerCorner", "seCursor", "rightBottom"] },
                            { ele: "div", css: ["bottom"], styles: ["resizerLine", "sCursor", "bottom"] },
                            { ele: "div", css: ["left-bottom"], styles: ["resizerCorner", "neCursor", "leftBottom"] },
                        ]
                    },
                    "кнопка": {
                        ele: "div", css: ["pointer"], styles: ["newComponent", "borderRadius15px"], childs: [
                            { ele: "button", css: ["btn-submit", "nostyle-btn"], styles: ["buttonMinBoard"], options: { type: "button", innerText: "текст" } },
                            { ele: "div", css: ["left"], styles: ["resizerLine", "eCursor", "left"] },
                            { ele: "div", css: ["left-top"], styles: ["resizerCorner", "seCursor", "leftTop"] },
                            { ele: "div", css: ["top"], styles: ["resizerLine", "sCursor", "top"] },
                            { ele: "div", css: ["right-top"], styles: ["resizerCorner", "neCursor", "rightTop"] },
                            { ele: "div", css: ["right"], styles: ["resizerLine", "eCursor", "right"] },
                            { ele: "div", css: ["right-bottom"], styles: ["resizerCorner", "seCursor", "rightBottom"] },
                            { ele: "div", css: ["bottom"], styles: ["resizerLine", "sCursor", "bottom"] },
                            { ele: "div", css: ["left-bottom"], styles: ["resizerCorner", "neCursor", "leftBottom"] },
                        ]
                    },
                    "контейнер": {
                        ele: "div", css: ["pointer"], styles: ["newComponent", "widthHeightAtStartContainer", "borderRadius20px"], childs: [
                            { ele: "div", styles: ["containerMinBoard",] },
                            { ele: "div", css: ["left"], styles: ["resizerLine", "eCursor", "left"] },
                            { ele: "div", css: ["left-top"], styles: ["resizerCorner", "seCursor", "leftTop"] },
                            { ele: "div", css: ["top"], styles: ["resizerLine", "sCursor", "top"] },
                            { ele: "div", css: ["right-top"], styles: ["resizerCorner", "neCursor", "rightTop"] },
                            { ele: "div", css: ["right"], styles: ["resizerLine", "eCursor", "right"] },
                            { ele: "div", css: ["right-bottom"], styles: ["resizerCorner", "seCursor", "rightBottom"] },
                            { ele: "div", css: ["bottom"], styles: ["resizerLine", "sCursor", "bottom"] },
                            { ele: "div", css: ["left-bottom"], styles: ["resizerCorner", "neCursor", "leftBottom"] },
                        ]
                    },
                },
                asideItems: {
                    "кнопка": {
                        ele: "li", css: ["hidden"], styles: ["leftAsideListItem"], childs: [
                            {
                                ele: "header", styles: ["leftAsideListItemHeader"], childs: [
                                    { ele: "h4", styles: ["leftAsideListItemTitle"], options: { innerText: "кнопка" } }
                                ]
                            },
                            {
                                ele: "form", styles: ["leftAsideInputsContainer"], options: { id: "aside-form" }, childs: [
                                    { ele: "label", styles: ["leftAsideInputLabel"], options: { for: "width", innerText: "ширина" } },
                                    { ele: "input", css: ["input", "nostyle-input"], styles: ["leftAsideInput"], options: { name: "width", type: "text" } },
                                    { ele: "label", styles: ["leftAsideInputLabel"], options: { for: "height", innerText: "высота" } },
                                    { ele: "input", css: ["input", "nostyle-input"], styles: ["leftAsideInput"], options: { name: "height", type: "text" } },
                                    { ele: "label", styles: ["leftAsideInputLabel"], options: { for: "text", innerText: "текст" } },
                                    { ele: "input", css: ["input", "nostyle-input"], styles: ["leftAsideInput"], options: { name: "text", type: "text" } },
                                ]
                            },
                            {
                                ele: "footer", styles: ["leftAsideListItemFooter"], childs: [
                                    { ele: "button", css: ["btn-remove", "nostyle-btn"], styles: ["removeBtn"], options: { id: "remove-btn", type: "button", innerText: "удалить" } }
                                ]
                            }
                        ]
                    },
                    "контейнер": {
                        ele: "li", css: ["hidden"], styles: ["leftAsideListItem"], childs: [
                            {
                                ele: "header", styles: ["leftAsideListItemHeader"], childs: [
                                    { ele: "h4", styles: ["leftAsideListItemTitle"], options: { innerText: "контейнер" } }
                                ]
                            },
                            {
                                ele: "form", styles: ["leftAsideInputsContainer"], options: { id: "aside-form" }, childs: [
                                    { ele: "label", styles: ["leftAsideInputLabel"], options: { for: "width", innerText: "ширина" } },
                                    { ele: "input", css: ["input", "nostyle-input"], styles: ["leftAsideInput"], options: { name: "width", type: "text" } },
                                    { ele: "label", styles: ["leftAsideInputLabel"], options: { for: "height", innerText: "высота" } },
                                    { ele: "input", css: ["input", "nostyle-input"], styles: ["leftAsideInput"], options: { name: "height", type: "text" } },
                                ]
                            },
                            {
                                ele: "footer", styles: ["leftAsideListItemFooter"], childs: [
                                    { ele: "button", css: ["btn-remove", "nostyle-btn"], styles: ["removeBtn"], options: { id: "remove-btn", type: "button", innerText: "удалить" } }
                                ]
                            }
                        ]
                    },
                    "изображение": {
                        ele: "li", css: ["hidden"], styles: ["leftAsideListItem"], childs: [
                            {
                                ele: "header", styles: ["leftAsideListItemHeader"], childs: [
                                    { ele: "h4", styles: ["leftAsideListItemTitle"], options: { innerText: "кнопка" } }
                                ]
                            },
                            {
                                ele: "form", styles: ["leftAsideInputsContainer"], options: { id: "aside-form" }, childs: [
                                    { ele: "label", styles: ["leftAsideInputLabel"], options: { for: "width", innerText: "ширина" } },
                                    { ele: "input", css: ["input", "nostyle-input"], styles: ["leftAsideInput"], options: { name: "width", type: "text" } },
                                    { ele: "label", styles: ["leftAsideInputLabel"], options: { for: "height", innerText: "высота" } },
                                    { ele: "input", css: ["input", "nostyle-input"], styles: ["leftAsideInput"], options: { name: "height", type: "text" } },
                                    { ele: "label", styles: ["leftAsideInputLabel"], options: { for: "img", innerText: "загрузить изображение" } },
                                    { ele: "input", css: ["input", "nostyle-input"], styles: ["leftAsideInput"], options: { name: "img", type: "file" } },
                                ]
                            },
                            {
                                ele: "footer", styles: ["leftAsideListItemFooter"], childs: [
                                    { ele: "button", css: ["btn-remove", "nostyle-btn"], styles: ["removeBtn"], options: { id: "remove-btn", type: "button", innerText: "удалить" } }
                                ]
                            }
                        ]
                    }
                }
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
            "height": "100vh"
        },
        mainContainer: {
            "position": "relative",
            "width": "100%",
            "height": "100%",
        },
        container: {
            "position": "fixed",
            "width": "100%",
            "height": "inherit",
            "min-height": "350px",
            "background-color": "var(--gray10)",
            "z-index": "10",
            "overflow": "auto",
        },
        aside: {
            "position": "absolute",
            "height": "calc(100% - 40px)",
            "width": "300px",
            "min-height": "350px",
            "border-radius": "30px",
            "border": "2px solid var(--gray20)",
            "background-color": "var(--gray10)",
            "z-index": "11"
        },
        leftAsideHeader: {
            "height": "50px",
            "width": "100%",
            "text-align": "center",
        }, leftAsideTitle: {
            "font-family": "bold",
            "line-height": "0px",
            "text-transform": "uppercase",
            "color": "var(--gray200)",
        },
        leftAsideMain: {
            "height": "90%",
        },
        leftAsideList: {
            "display": "flex",
            "flex-direction": "column",
            "justify-content": "flex-start",
            "align-items": "center",
        },
        leftAsideListItem: {
            "display": "flex",
            "flex-direction": "column",
            "align-items": "center",
            "margin-bottom": "15px",
            "width": "100%",
            "min-height": "50px",
            "padding": "10px 0px",
            "border-top": "2px solid var(--gray20)",
            "border-bottom": "2px solid var(--gray20)",
            "word-break": "break-all",
            "transition": "opacity 0.2s",
        },
        leftAsideListItemHeader: {
            "width": "100%",
            "text-align": "center",
            "height": "20px",
        },
        leftAsideListItemTitle: {
            "font-family": "medium",
            "margin-top": "5px",
            "line-height": "0px",
        },
        leftAsideInputsContainer: {
            "display": "flex",
            "flex-direction": "column",
            "align-items": "center",
            "margin-top": "5px"
        },
        leftAsideInput: {
            "height": "30px",
            "border-radius": "10px",
            "text-align": "center",
        },
        leftAsideInputLabel: {
            "font-size": "15px",
            "font-family": "regular",
        },
        leftAsideListItemFooter: {
            "display": "flex",
            "flex-direction": "column",
            "align-items": "center",
            "margin-top": "10px",
        },
        removeBtn: {
            "width": "170px",
            "height": "30px",
            "border-radius": "10px",
        },
        expander: {
            "display": "flex",
            "flex-direction": "column",
            "justify-content": "center",
            "align-items": "center",
            "width": "40px",
            "height": "30px",
            "border-radius": "8px",
            "background-color": "var(--blue100)",
            "z-index": "11",
        },
        navExpander: {
            "left": "calc(50% - 20px)",
            "bottom": "20px",
        },
        leftAsideExpander: {
            "position": "fixed",
            "top": "20px",
            "left": "20px",
        },
        rightAsideExpander: {
            "position": "fixed",
            "right": "20px",
            "top": "20px"
        },
        leftAsideExpanderInner: {
            "position": "relative",
            "top": "20px",
            "left": "20px",
        },
        rightAsideExpanderInner: {
            "position": "relative",
            "top": "20px",
            "right": "-240px",
        },
        homeHeader: {
            "position": "fixed",
            "width": "calc(100% - 40px)",
            "min-height": "60px",
            "height": "60px",
            "border-radius": "20px",
            "border": "2px solid var(--gray20)",
            "bottom": "20px",
            "transition": "opacity 0.2s",
            "z-index": "11",
        },
        nav: {
            "height": "inherit",
        },
        leftAside: {
            left: "20px",
            top: "20px",
        },
        rightAside: {
            "right": "20px",
            "top": "20px"
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
        canvaz: {
            "position": "absolute",
            "top": "0px",
            "width": "100%",
            "height": "100%",
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
            "position": "relative",
            "top": "-60px",
        },
        logo: {
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
        resultsButtonMin: {
            "padding": "10px 30px",
            "width": "200px",
        },
        buttonMin: {
            "padding": "10px 30px",
            "width": "200px",
            "word-wrap": "break-word",
            "border-radius": "15px",
            "color": "var(--gray150)",
            "border": "1px solid var(--gray20)",
        },
        buttonMinBoard: {
            "padding": "10px 10px",
            "width": "100%",
            "height": "100%",
            "overflow": "hidden",
            "text-overflow": "ellipsis",
            "border": "1px solid var(--gray20)",
            "border-radius": "15px",
            "color": "var(--gray150)",
            "font-size": "14px",
        },
        containerMinBoard: {
            "width": "calc(100% - 4px)",
            "height": "calc(100% - 4px)",
            "border-radius": "20px",
            "border": "2px solid var(--gray20)",
        },
        navMinBoard: {
            "width": "calc(100% - 4px)",
            "height": "calc(100% - 4px)",
            "border-radius": "15px",
            "border": "2px solid var(--gray20)",
        },
        navMin: {
            "width": "230px",
            "height": "40px",
            "border-radius": "15px",
            "border": "2px solid var(--gray20)",
            "padding": "0px 5px",
        },
        navMinList: {
            "display": "flex",
            "flex-direction": "row",
            "justify-content": "space-between",
            "align-items": "center",
            "height": "100%",
        },
        navMinListItemBrand: {
            "width": "auto",
            "display": "flex",
            "flex-direction": "row",
            "align-items": "center",
            "margin-left": "5px",
        },
        navMinListItemLogo: {
            "width": "30px",
            "height": "30px",
            "border-radius": "10px",
            "background-color": "var(--blue200)",
        },
        navMinListItemHeader: {
            "margin-left": "10px",
        },
        navMinListItemTitle: {
            "font-family": "bold",
        },
        navMinListButtons: {
            "display": "flex",
            "flex-direction": "row",
            "justify-content": "space-between",
            "align-items": "center",
            "margin-right": "5px",
        },
        navMinListItemBtn: {
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
        navMinListItemBtnBoard: {
            "position": "relative",
            "margin-right": "10px"
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
        componentWrapp: {
            position: "absolute",
        },
        resizerCorner: {
            "position": "absolute",
            "width": "15px",
            "height": "15px",
            "background-color": "transparent",
        },
        resizerLine: {
            "position": "absolute",
            "background-color": "transparent",
        },
        seCursor: {
            "cursor": "se-resize",
        },
        neCursor: {
            "cursor": "ne-resize",
        },
        eCursor: {
            "cursor": "e-resize",
        },
        sCursor: {
            "cursor": "s-resize",
        },
        leftTop: {
            "left": "-10px",
            "top": "-10px",
        },
        rightTop: {
            "right": "-10px",
            "top": "-10px",
        },
        rightBottom: {
            "right": "-10px",
            "bottom": "-10px",
        },
        leftBottom: {
            "left": "-10px",
            "bottom": "-10px",
        },
        left: {
            'left': "-10px",
            'top': "5px",
            'width': "15px",
            'height': "calc(100% - 10px)",
        },
        top: {
            "left": "5px",
            "top": "-10px",
            "height": "15px",
            "width": "calc(100% - 10px)",
        },
        right: {
            "right": "-10px",
            "top": "5px",
            "width": "15px",
            "height": "calc(100% - 10px)",
        },
        bottom: {
            "left": "5px",
            "bottom": "-10px",
            "width": "calc(100% - 10px)",
            "height": "15px",
        },
        newComponent: {
            "position": "absolute",
            "left": "50%",
            "top": "50%",
            "box-shadow": "3px 3px 0px 0px var(--red100)," +
                "-3px -3px 0px 0px var(--red100)," +
                "3px -3px 0px 0px var(--red100)," +
                "-3px 3px 0px 0px var(--red100)",
            "transition": "box-shadow 0.2s",
        },
        imageWrapp: {
            "position": "relative",
            "width": "100px",
            "height": "100px",
            "border-radius": "15px",
            "overflow": "hidden",
        },
        imageMin: {
            "position": "absolute",
            "width": "calc(100% + 2px)",
            "height": "calc(100% + 2px)",
            "left": "-1px",
            "top": "-1px",
            "background-color": "var(--gray20)",
        },
        pointer: {
            cursor: "pointer",
        },
        widthHeightAtStartContainer: {
            "width": "250px",
            "height": "80px",
        },
        widthHeightAtStartNav: {
            "width": "320px",
            "height": "40px",
        },
        borderRadius20px: {
            "border-radius": "20px",
        },
        borderRadius15px: {
            "border-radius": "15px",
        },
    },
};
