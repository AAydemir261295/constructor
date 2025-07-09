export const homeElements = {
    elements: {
        main: {
            tree:
            {
                ele: "main", styles: ["mainHome"], childs: [
                    { ele: "main", styles: ["container"] },
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
        }
    },
    activeAnchor: "loginForm",
    stylez: {
        mainHome: {
            "display": "flex",
            "flex-direction": "column",
            "justify-content": "space-between",
            "align-items": "center",
            "width": "100%",
            "height": "100vh",
            "min-height": "900px",
            /* opacity: 0; */
        },
        container: {
            "margin-top": "20px",
            "margin-bottom": "20px",
            "height": "100%",
            "width": "90%",
            "min-height": "800px",
            "min-width": "1500px",
            "border-radius": "30px",
            "border": "2px solid var(--gray20)",
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
        }


    }

}