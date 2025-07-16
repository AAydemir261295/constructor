export const homeElements = {
    elements: {
        main: {
            tree:
            {
                ele: "main", css: ["main", "hidden", "invisible"], styles: ["main"], childs: [
                    {
                        ele: "main", styles: ["mainContainer"], childs: [
                            {
                                ele: "aside", styles: ["aside", "leftAside"], options: { id: "left-aside" }, childs: [
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
                                            { ele: "div", css: ["pointer", "hidden", "invisible", "result-element", "hideable"], styles: ["containerMin"], },
                                            { ele: "button", css: ["pointer", "hidden", "invisible", "hideable", "result-element", "btn-submit", "nostyle-btn"], styles: ["buttonMin", "resultsButtonMin"], options: { type: "button", innerText: "текст" } },
                                            {
                                                ele: "nav", css: ["pointer", "hidden", "invisible", "result-element", "hideable"], styles: ["navMin"], childs: [
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
                                            { ele: "input", css: ["pointer", "hidden", "invisible", "hideable", "result-element", "input", "nostyle-input"], styles: ["inputMin"], options: { placeholder: "поле ввода", type: "text", readOnly: true } },
                                            {
                                                ele: "aside", css: ["pointer", "hidden", "invisible", "result-element", "hideable"], styles: ["asideMin"], childs: [
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
                container: {
                    container: "#container",
                    canvaz: "#canvaz"
                },
                rightAside: {
                    elementsForm: "elements-form",
                    elementsInput: "elements-input",
                    elementsDdown: "#elements-input-ddown",
                    elementsItem: ".ddown-item",
                    elementsResult: "#elements-result",
                },
                leftAside: {
                    contentContainer: "#left-aside-content",
                    "кнопка": {
                        form: "#button-form",
                        inputs: ["width", "height", "text"]
                    }
                }
            },
            items: {
                ddownItems: [
                    "контейнер",
                    "кнопка",
                    "навигация",
                    "поле ввода",
                    "боковая панель",
                ],
                components: {
                    "кнопка": {
                        ele: "div", css: ["pointer"], styles: ["newComponent"], childs: [
                            { ele: "button", css: ["pointer", "btn-submit", "nostyle-btn"], styles: ["buttonMinBoard"], options: { type: "button", innerText: "текст" } },
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
                        ele: "li", css: ["hidden", "invisible"], styles: ["leftAsideListItem"], childs: [
                            {
                                ele: "header", styles: ["leftAsideListItemHeader"], childs: [
                                    { ele: "h4", styles: ["leftAsideListItemTitle"], options: { innerText: "кнопка" } }
                                ]
                            },
                            {
                                ele: "form", styles: ["leftAsideInputsContainer"], options: { id: "button-form" }, childs: [
                                    { ele: "label", styles: ["leftAsideInputLabel"], options: { for: "width", innerText: "ширина" } },
                                    { ele: "input", css: ["input", "nostyle-input"], styles: ["leftAsideInput"], options: { name: "width", value: "59", type: "text" } },
                                    { ele: "label", styles: ["leftAsideInputLabel"], options: { for: "height", innerText: "высота" } },
                                    { ele: "input", css: ["input", "nostyle-input"], styles: ["leftAsideInput"], options: { name: "height", value: "39", type: "text" } },
                                    { ele: "label", styles: ["leftAsideInputLabel"], options: { for: "text", innerText: "текст" } },
                                    { ele: "input", css: ["input", "nostyle-input"], styles: ["leftAsideInput"], options: { name: "text", value: "текст", type: "text" } },

                                    // { ele: "label", styles: ["leftAsideInputLabel"], options: { for: "color", innerText: "цвет фона" } },
                                    // { ele: "input", css: ["input", "nostyle-input"], styles: ["leftAsideInput"], options: { name: "color", value: "цвет", type: "text" } },

                                    // { ele: "label", styles: ["leftAsideInputLabel"], options: { for: "border", innerText: "обводка" } },
                                    // { ele: "input", css: ["input", "nostyle-input"], styles: ["leftAsideInput"], options: { name: "text", value: "текст", type: "text" } },

                                ]
                            },

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
            "min-height": "100vh",
            "padding": "20px",
        },
        mainContainer: {
            "position": "relative",
            "width": "1300px",
            "height": "calc(100vh - 120px)",
            "min-height": "820px",
            "margin-bottom": "20px",
        },
        aside: {
            "position": "absolute",
            "height": "inherit",
            "min-height": "820px",
            "width": "300px",
            "border-radius": "30px",
            "border": "2px solid var(--gray20)",
            "z-index": "9"
        },
        leftAside: {
            "left": "-325px"
        },
        leftAsideHeader: {
            "height": "50px",
            "width": "100%",
            "text-align": "center",
        },
        leftAsideTitle: {
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
        rightAside: {
            "right": "-330px",
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
            "position": "fixed",
            "min-height": "820px",
            "height": "inherit",
            "width": "1300px",
            "border-radius": "30px",
            "border": "2px solid var(--gray20)",
            "z-index": "10",
            "background-color": "var(--gray10)",
        },
        canvaz: {
            "position": "absolute",
            "top": "0px",
            "width": "100%",
            "height": "100%",
        },
        homeHeader: {
            "position": "relative",
            "width": "1200px",
            "min-height": "60px",
            "height": "60px",
            "border-radius": "20px",
            "border": "2px solid var(--gray20)",
            "margin-bottom": "40px",
        },
        nav: {
            "height": "inherit",
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
            "border-radius": "15px",
            "box-shadow": "3px 3px 0px 0px var(--red100)," +
                "-3px -3px 0px 0px var(--red100)," +
                "3px -3px 0px 0px var(--red100)," +
                "-3px 3px 0px 0px var(--red100)",
            "transition": "box-shadow 0.2s",
        }
    },
}

//   <!-- <aside class="left-aside aside">
//     <header class="left-aside__header">
//       <h3 class="left-aside__title">
//         детали
//       </h3>
//     </header>

//     <main class="left-aside__main">
//       <ul class="left-aside__list nostyle-list">
//         <li class="left-aside__list-item">
//           <header class="left-aside__list-item-header">
//             <h4 class="left-aside__liste-item-title">кнопка</h4>
//           </header>

//           <div class="left-aside__inputs-container">
//             <label class="left-aside__input-label" for="width">ширина</label>
//             <input name="width" class="left_aside__input input nostyle-input" type="text">
//             <label class="left-aside__input-label" for="height">высота</label>
//             <input name="height" class="left_aside__input input nostyle-input" type="text">
//             <label class="left-aside__input-label" for="text">текст</label>
//             <input name="text" class="left_aside__input input nostyle-input" type="text">
//           </div>
//         </li>
//       </ul>
//     </main>

//   </aside> -->


// .left-aside {
//     position: absolute;
//     height: 100%;
//     width: 300px;
//     min-height: 800px;
//     border-radius: 30px;
//     border: 2px solid var(--gray20);
//     /* z-index: 9; */
// }

// .left-aside__header {
//     height: 50px;
//     width: 100%;
//     text-align: center;
// }


// .left-aside__title {
//     font-family: bold;
//     line-height: 0px;
//     text-transform: uppercase;
//     color: var(--gray200);
// }

// .left-aside__main {
//     height: 90%;
// }

// .left-aside__list {
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: center;
// }

// .left-aside__list-item {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin-bottom: 15px;
//     width: 260px;
//     min-height: 50px;
//     padding: 10px;
//     border: 2px solid var(--gray20);
//     word-break: break-all;
//     border-radius: 15px;
// }

// .left-aside__list-item-header {
//     width: 100%;
//     text-align: center;
//     height: 20px;
// }

// .left-aside__liste-item-title {
//     font-family: medium;
//     margin-top: 5px;
//     line-height: 0px;
// }

// .left-aside__inputs-container {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     height: auto;
//     padding: 5px 0px;
// }

// .left_aside__input {
//     margin-bottom: 10px;
//     height: 30px;
//     border-radius: 10px;
// }

// .left-aside__input-label {
//     font-size: 15px;
//     font-family: regular;
// }