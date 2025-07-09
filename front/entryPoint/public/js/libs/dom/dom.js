export default class MyDom {
    constructor() {
        // this.dom = document;
        this.body = document.body;
    }

    stylez;
    // dom;


    // anchorParents = {};
    // anchors = {};
    // activeAnchor = "";

    // container;

    body;
    // anchorParents = {};
    // pageAnchors = {};
    // activeAnchor = "";

    setStylez(styles) {
        this.stylez = styles;
    }

    async render(pageData) {
        var container = await this.createElement(pageData.elements.main.tree);

        var anchorParents = {};
        var pageAnchors = {};
        var activeAnchor = "";

        await this.buildTree(pageData.elements.main.tree.childs, container, anchorParents);


        let keys = Object.keys(pageData.elements);
        for (const key of keys) {
            if (key != "main") {
                let parent = await this.createElement(pageData.elements[key].tree);
                await this.buildTree(pageData.elements[key].tree.childs, parent);
                let tmp = {};
                tmp[key] = parent;
                pageAnchors[key] = parent;
                if (pageData.elements[key].tree.hasOwnProperty("anchor") && pageData.elements[key].tree.anchor.name == pageData.activeAnchor) {
                    let type = pageData.elements[key].tree.anchor.type;
                    anchorParents[type].appendChild(parent);
                    pageAnchors[key].classList.remove("invisible");
                    activeAnchor = pageData.elements[key].tree.anchor.name;
                }
            }
        }


        let bodyIsExist = this.body.querySelector(".main");
        if (bodyIsExist) {
            this.body.removeChild(bodyIsExist);
        }

        this.body.appendChild(container);


        return { container: container, anchorParents: anchorParents, pageAnchors: pageAnchors, activeAnchor: activeAnchor };
    }




    async buildTree(eleArr, parent, anchorParents) {
        if (eleArr.hasOwnProperty("childs")) {
            if (eleArr.hasOwnProperty("anchorParent")) {
                var child = parent.appendChild(await this.createElement(eleArr));
                anchorParents[eleArr.anchorParent.type] = child;
                var childs = eleArr.childs;
                for (let q = 0; q < childs.length; q++) {
                    await this.buildTree(childs[q], child, anchorParents);
                }
            } else {
                var child = parent.appendChild(await this.createElement(eleArr));
                var childs = eleArr.childs;
                for (let q = 0; q < childs.length; q++) {
                    await this.buildTree(childs[q], child, anchorParents);
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
                            anchorParents[child.anchorParent.type] = innerChild;
                        }
                        for (let q = 0; q < childs.length; q++) {
                            await this.buildTree(child.childs[q], innerChild, anchorParents);
                        }
                    } else {
                        if (child.hasOwnProperty("anchorParent")) {
                            var anchorParent = parent.appendChild(await this.createElement(child));
                            anchorParents[child.anchorParent.type] = anchorParent;
                            return;
                        } else {
                            parent.appendChild(await this.createElement(child));
                        }
                    }
                }
            } else {
                // console.log(eleArr);
                console.log(parent);
                parent.appendChild(await this.createElement(eleArr));
                return;
            }
        }
    }


    async changeAnchorContent(pageData, anchorParents, pageAnchors, activeAnchor, anchorType, anchorName) {
        pageAnchors[activeAnchor].classList.add("invisible");
        pageData.activeAnchor = anchorName;

        setTimeout(() => {
            anchorParents[anchorType].innerHTML = "";
            anchorParents[anchorType].appendChild(pageAnchors[anchorName]);
        }, 200)

        setTimeout(() => {
            pageAnchors[anchorName].classList.remove("invisible");
        }, 400)
    }


    async addStyles(ele, classList) {
        classList.forEach((className) => {
            var cssBlock = this.stylez[className];
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


    // async setActualPageData(eleArr, anchorName, anchorType) {
    //     if (eleArr.hasOwnProperty("anchorParent")) {
    //         if (eleArr.anchorParent.type == anchorType) {
    //             await this.setActualPageData(eleArr.childs, anchorName, anchorType);
    //         }
    //     } else if (eleArr.hasOwnProperty("childs")) {
    //         await this.setActualPageData(eleArr.childs, anchorName, anchorType);

    //     } else if (eleArr.length) {
    //         for (let q = 0; q < eleArr.length; q++) {
    //             const child = eleArr[q];
    //             if (child.hasOwnProperty("anchor")) {
    //                 if (child.anchor.type == anchorType && child.anchor.name == anchorName) {
    //                     child.anchor.toAttach = true;
    //                 } else {
    //                     child.anchor.toAttach = false;
    //                 }
    //             } else {
    //                 if (child.hasOwnProperty("anchorParent")) {
    //                     if (child.anchorParent.type == anchorType) {
    //                         await this.setActualPageData(child.childs, anchorName, anchorType);
    //                         break;
    //                     }
    //                 } else if (childs.hasOwnProperty("childs")) {
    //                     await this.setActualPageData(child.childs, anchorName, anchorType);
    //                 }
    //             }
    //         }
    //         return;
    //     }
    // }

    // async buildElement(eleArr, parent) {
    //     if (eleArr.hasOwnProperty("childs")) {
    //         var child = parent.appendChild(await this.createElement(eleArr));
    //         var childs = eleArr.childs;
    //         for (let q = 0; q < childs.length; q++) {
    //             await this.buildTree(childs[q], child);
    //         }
    //     } else {
    //         if (eleArr.length) {
    //             for (let q = 0; q < eleArr.length; q++) {
    //                 const child = eleArr[q];
    //                 if (child.hasOwnProperty("childs")) {
    //                     var innerChild = parent.appendChild(await this.createElement(child));
    //                     var childs = child.childs;
    //                     for (let q = 0; q < childs.length; q++) {
    //                         await this.buildTree(child.childs[q], innerChild);
    //                     }
    //                 } else {
    //                     parent.appendChild(await this.createElement(child));
    //                     return;
    //                 }
    //             }
    //         } else {
    //             parent.appendChild(await this.createElement(eleArr));
    //             return;
    //         }
    //     }
    // }


    // async changeAnchorContent(type, anchorName) {
    //     var parentElement = await this.createElement(this.anchors[type].anchors[anchorName]);
    //     await this.buildElement(this.anchors[type].anchors[anchorName].childs, parentElement);
    //     this.anchorParents[type].innerHTML = "";
    //     this.anchorParents[type].appendChild(parentElement);
    // }




    // async buildTree(eleArr, parent = this.dom.body) {
    //     if (eleArr.hasOwnProperty("childs")) {
    //         if (eleArr.hasOwnProperty("anchorParent")) {
    //             var child = parent.appendChild(await this.createElement(eleArr));
    //             this.anchorParents[eleArr.anchorParent.type] = child;
    //             var childs = eleArr.childs;
    //             for (let q = 0; q < childs.length; q++) {
    //                 await this.buildTree(childs[q], child);
    //             }
    //         } else {
    //             if (eleArr.hasOwnProperty("anchor")) {
    //                 if (!this.anchors.hasOwnProperty(eleArr.anchor.type)) {
    //                     this.anchors[eleArr.anchor.type] = { anchors: {} };
    //                     this.anchors[eleArr.anchor.type].anchors[eleArr.anchor.name] = eleArr;
    //                 } else {
    //                     this.anchors[eleArr.anchor.type].anchors[eleArr.anchor.name] = eleArr;
    //                 }
    //                 if (eleArr.anchor.toAttach) {
    //                     var child = parent.appendChild(await this.createElement(eleArr));
    //                     var childs = eleArr.childs;
    //                     for (let q = 0; q < childs.length; q++) {
    //                         await this.buildTree(childs[q], child);
    //                     }
    //                 }
    //             } else {
    //                 var child = parent.appendChild(await this.createElement(eleArr));
    //                 var childs = eleArr.childs;
    //                 for (let q = 0; q < childs.length; q++) {
    //                     await this.buildTree(childs[q], child);
    //                 }
    //             }
    //         }
    //     } else {
    //         if (eleArr.length) {
    //             for (let q = 0; q < eleArr.length; q++) {
    //                 const child = eleArr[q];
    //                 if (child.hasOwnProperty("childs")) {
    //                     if (child.hasOwnProperty("anchorParent")) {
    //                         var innerChild = parent.appendChild(await this.createElement(child));
    //                         this.anchorParents[child.anchorParent.type] = innerChild;
    //                         var childs = child.childs;
    //                         for (let q = 0; q < childs.length; q++) {
    //                             await this.buildTree(child.childs[q], innerChild);
    //                         }
    //                     } else {
    //                         if (child.hasOwnProperty("anchor")) {
    //                             if (!this.anchors.hasOwnProperty(eleArr.anchor.type)) {
    //                                 this.anchors[eleArr.anchor.type] = { anchors: {} };
    //                                 this.anchors[eleArr.anchor.type].anchors[eleArr.anchor.name] = eleArr;
    //                             } else {
    //                                 this.anchors[eleArr.anchor.type].anchors[eleArr.anchor.name] = eleArr;
    //                             }
    //                             if (child.anchor.toAttach) {
    //                                 var innerChild = parent.appendChild(await this.createElement(child));
    //                                 var childs = child.childs;
    //                                 for (let q = 0; q < childs.length; q++) {
    //                                     await this.buildTree(child.childs[q], innerChild);
    //                                 }
    //                             }
    //                         } else {
    //                             var innerChild = parent.appendChild(await this.createElement(child));
    //                             var childs = child.childs;
    //                             for (let q = 0; q < childs.length; q++) {
    //                                 await this.buildTree(child.childs[q], innerChild);
    //                             }
    //                         }
    //                     }
    //                 } else {
    //                     if (child.hasOwnProperty("anchorParent")) {
    //                         parent.appendChild(await this.createElement(child));
    //                         this.anchorParents[child.anchorParent.type] = child;
    //                         return;
    //                     } else {
    //                         if (child.hasOwnProperty("anchor")) {
    //                             if (!this.anchors.hasOwnProperty(eleArr.anchor.type)) {
    //                                 this.anchors[eleArr.anchor.type] = { anchors: {} };
    //                                 this.anchors[eleArr.anchor.type].anchors[eleArr.anchor.name] = eleArr;
    //                             } else {
    //                                 this.anchors[eleArr.anchor.type].anchors[eleArr.anchor.name] = eleArr;
    //                             }
    //                             if (child.anchor.toAttach) {
    //                                 parent.appendChild(await this.createElement(child));
    //                                 return;
    //                             }
    //                         } else {
    //                             parent.appendChild(await this.createElement(child));
    //                             return;
    //                         }
    //                     }
    //                 }
    //             }
    //         } else {
    //             if (eleArr.hasOwnProperty("anchor")) {
    //                 if (eleArr.anchor.toAttach) {
    //                     parent.appendChild(await this.createElement(eleArr));
    //                     return;
    //                 }
    //             } else {
    //                 parent.appendChild(await this.createElement(eleArr));
    //                 return;
    //             }
    //         }
    //     }
    // }



    // registerTree(elements, changes) {
    //     var result = elements;
    //     console.log(result.tree.childs[0].childs[0]);
    //     result.tree.childs[0].childs[0].css = [...elements.tree.childs[0].childs[0].css, ...changes];

    //     result.tree.childs[0].childs[1].css = elements.tree.childs[0].childs[1].css.filter((v) => changes.indexOf(v) == -1);
    //     return result;
    // }

    // loginTree(elements, changes) {
    //     var result = elements;
    //     result.tree.childs[0].childs[0].css = elements.tree.childs[0].childs[1].css.filter((v) => changes.indexOf(v) == -1);
    //     result.tree.childs[0].childs[1].css = [...elements.tree.childs[0].childs[0].css, ...changes];
    //     return result;
    // }


    // async addStyles(ele, classList) {
    //     classList.forEach((className) => {
    //         var cssBlock = this.stylez[className];
    //         var cssPropertiesKeys = Object.keys(cssBlock);
    //         for (const propertyKey of cssPropertiesKeys) {
    //             ele.style[propertyKey] = cssBlock[propertyKey];
    //         }
    //     })
    // }

    // async createElement(eleData) {
    //     var ele = document.createElement(eleData.ele);
    //     if (eleData.hasOwnProperty("styles")) {
    //         await this.addStyles(ele, eleData.styles);
    //     }
    //     if (eleData.hasOwnProperty("css")) {
    //         ele.classList.add(...eleData.css)
    //     }
    //     if (eleData.hasOwnProperty("options")) {
    //         let options = eleData.options;
    //         var keys = Object.keys(options);
    //         keys.forEach(k => ele[k] = options[k]);
    //     }
    //     return ele;
    // }

    // resetBody() {
    //     this.dom.body.innerHTML = "";
    // }
}
