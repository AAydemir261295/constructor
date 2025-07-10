export const homeElements = {
    elements: {
        main: {
            tree:
            {
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
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    { ele: "div" }
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
                    elementsItem: ".ddown-item"
                }
            },
            items: {
                ddownItems: [
                    "контейнер",
                    "кнопка",
                    "навигация",
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

    },
}
