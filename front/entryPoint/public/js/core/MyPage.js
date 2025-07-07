class MyPage {
    constructor(pageData, router, domInteractions, csrf) {
        this.router = router;
        this.csrf = csrf;
        this.domInteractions = domInteractions;
        this.pageData = pageData;

    }

    router;
    pageData;
    domInteractions;
    body;
    container;



    anchorParents = {};
    pageElements = {};
    // activeAnchor = "";


    appendChild() {

    }

    async buildTree(eleArr, parent) {
        if (eleArr.hasOwnProperty("childs")) {
            if (eleArr.hasOwnProperty("anchorParent")) {
                var child = parent.appendChild(await this.createElement(eleArr));
                console.log(child);
                this.anchorParents[eleArr.anchorParent.type] = child;
                var childs = eleArr.childs;
                for (let q = 0; q < childs.length; q++) {
                    await this.buildTree(childs[q], child);
                }
            } else {
                var child = parent.appendChild(await this.createElement(eleArr));
                var childs = eleArr.childs;
                for (let q = 0; q < childs.length; q++) {
                    await this.buildTree(childs[q], child);
                }
            }
        } else {
            if (eleArr.length) {
                for (let q = 0; q < eleArr.length; q++) {
                    const child = eleArr[q];
                    if (child.hasOwnProperty("childs")) {
                        var innerChild = parent.appendChild(await this.createElement(child));
                        var childs = child.childs;
                        if (child.hasOwnProperty("anchorParent")) {
                            this.anchorParents[child.anchorParent.type] = innerChild;
                            console.log(innerChild);

                        }
                        for (let q = 0; q < childs.length; q++) {
                            await this.buildTree(child.childs[q], innerChild);
                        }
                    } else {
                        if (child.hasOwnProperty("anchorParent")) {
                            var anchorParent = parent.appendChild(await this.createElement(child));
                            this.anchorParents[child.anchorParent.type] = anchorParent;
                            return;
                        } else {
                            parent.appendChild(await this.createElement(child));
                            return;
                        }
                    }
                }
            } else {
                parent.appendChild(await this.createElement(eleArr));
                return;
            }
        }
    }


    async addStyles(ele, classList) {
        classList.forEach((className) => {
            var cssBlock = this.pageData.stylez[className];
            var cssPropertiesKeys = Object.keys(cssBlock);
            for (const propertyKey of cssPropertiesKeys) {
                ele.style[propertyKey] = cssBlock[propertyKey];
            }
        })
    }

    async createElement(eleData) {
        var ele = document.createElement(eleData.ele);
        if (eleData.hasOwnProperty("styles")) {
            await this.addStyles(ele, eleData.styles);
        }
        if (eleData.hasOwnProperty("css")) {
            ele.classList.add(...eleData.css)
        }
        if (eleData.hasOwnProperty("options")) {
            let options = eleData.options;
            var keys = Object.keys(options);
            keys.forEach(k => ele[k] = options[k]);
        }
        return ele;
    }


    async render() {
        var mainParent = await this.createElement(this.pageData.elements.main.tree);
        await this.buildTree(this.pageData.elements.main.tree.childs, mainParent);


        let keys = Object.keys(this.pageData.elements);
        for (const key of keys) {
            if (key != "main") {
                let parent = await this.createElement(this.pageData.elements[key].tree);
                await this.buildTree(this.pageData.elements[key].tree.childs, parent);
                let tmp = {};
                tmp[key] = parent;
                this.pageElements[key] = parent;
                if (this.pageData.elements[key].tree.hasOwnProperty("anchor") && this.pageData.elements[key].tree.anchor.active) {
                    let type = this.pageData.elements[key].tree.anchor.type
                    this.anchorParents[type].appendChild(parent);
                }
            }
        }

        console.log(this.pageElements);

        var tmp = document.body;
        tmp.appendChild(mainParent);
        mainParent.classList.remove("hidden");
        mainParent.style.animation = "show 0.1s linear forwards";
    }

    // showPage() {
    //     this.container.classList.remove("hidden");
    //     this.container.style.animation = "show 0.1s linear forwards";
    // }


    async changeAnchorContent(type, anchorName) {
        // var parentElement = await this.createElement(this.anchors[type].anchors[anchorName]);
        // await this.buildElement(this.anchors[type].anchors[anchorName].childs, parentElement);
        // this.anchorParents[type].innerHTML = "";
        // this.anchorParents[type].appendChild(parentElement);
        this.anchorParents[type].innerHTML = "";
        this.anchorParents[type].appendChild(this.pageElements[anchorName]);
    }

    async nestedRedirect(path, anchorName, anchorType, data) {
        await this.domInteractions.changeAnchorContent(anchorType, anchorName);
        await this.domInteractions.setActualPageData(this.pageData.tree, anchorName, anchorType);
        this.router.redirect({ elements: this.pageData, path: path, data: data });
    }

    redirect(path, changes) {
        // let newElements = this.domInteractions.loginTree(this.pageData, changes)
        // this.router.redirect({ elements: newElements, path: "/login", moduleName: "/login" }, true);
    }




}

export default MyPage