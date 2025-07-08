class MyPage {
    constructor(pageData, router, domInteractions, csrf) {
        this.router = router;
        this.csrf = csrf;
        this.domInteractions = domInteractions;
        this.pageData = pageData;
        this.body = document.body;


        if (pageData.hasOwnProperty("restore") && pageData.nested) {
            this.anchorParents = pageData.anchorParents;
            this.pageAnchors = pageData.pageAnchors;
            this.activeAnchor = pageData.activeAnchor;
        }


    }

    router;
    pageData;
    domInteractions;
    body;
    container;


    anchorParents = {};
    pageAnchors = {};
    activeAnchor = "";


    async buildTree(eleArr, parent) {
        if (eleArr.hasOwnProperty("childs")) {
            if (eleArr.hasOwnProperty("anchorParent")) {
                var child = parent.appendChild(await this.createElement(eleArr));
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
                            for (let q = 0; q < eleArr.length; q++) {
                                const element = eleArr[q];
                                parent.appendChild(await this.createElement(element));
                            }
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
        this.container = await this.createElement(this.pageData.elements.main.tree);
        await this.buildTree(this.pageData.elements.main.tree.childs, this.container);


        let keys = Object.keys(this.pageData.elements);
        for (const key of keys) {
            if (key != "main") {
                let parent = await this.createElement(this.pageData.elements[key].tree);
                await this.buildTree(this.pageData.elements[key].tree.childs, parent);
                let tmp = {};
                tmp[key] = parent;
                this.pageAnchors[key] = parent;
                if (this.pageData.elements[key].tree.hasOwnProperty("anchor") && this.pageData.elements[key].tree.anchor.name == this.pageData.activeAnchor) {
                    let type = this.pageData.elements[key].tree.anchor.type;
                    this.anchorParents[type].appendChild(parent);
                    this.pageAnchors[key].classList.remove("invisible");
                    this.activeAnchor = this.pageData.elements[key].tree.anchor.name;
                }
            }
        }

        this.body.appendChild(this.container);
        this.showPage();
    }

    showPage() {
        this.container.classList.remove("hidden");
        this.container.style.animation = "show 0.1s linear forwards";
    }


    async changeAnchorContent(anchorType, anchorName) {
        this.pageAnchors[this.activeAnchor].classList.add("invisible");
        this.pageData.activeAnchor = anchorName;


        setTimeout(() => {
            this.anchorParents[anchorType].innerHTML = "";
            this.anchorParents[anchorType].appendChild(this.pageAnchors[anchorName]);
        }, 200)

        setTimeout(() => {
            this.pageAnchors[anchorName].classList.remove("invisible");
            this.activeAnchor = anchorName;
        }, 200)
    }
}

export default MyPage