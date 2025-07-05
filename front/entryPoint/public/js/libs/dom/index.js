import { EventEmitter } from "/js/libs/eventEmitter/EventEmitter.js";

export default class MyDom extends EventEmitter {

    head;
    stylez;

    constructor() {
        super();
        this.head = document.querySelector(".head");
    }

    setStylez(styles) {
        this.stylez = styles;
    }


    // async addStyles(styles, urlPath) {
    //     var that = this;
    //     styles.forEach((css) => {
    //         const element = { ele: "link", options: { rel: 'stylesheet', href: `http://localhost:3001/css/${css}`, type: 'text/css' } }
    //         let cssLink = that.createElement(element);
    //         that.head.appendChild(cssLink);
    //     })
    // }

    async buildTree(eleArr, parentEle) {
        if (eleArr.hasOwnProperty("childs")) {
            var child = parentEle.appendChild(await this.createElement(eleArr));
            var childs = eleArr.childs;
            for (let q = 0; q < childs.length; q++) {
                await this.buildTree(childs[q], child);
            }
        } else {
            if (eleArr.length) {
                for (let q = 0; q < eleArr.length; q++) {
                    const child = eleArr[q];
                    if (child.hasOwnProperty("childs")) {
                        var innerChild = parentEle.appendChild(await this.createElement(child));
                        var childs = child.childs;
                        for (let q = 0; q < childs.length; q++) {
                            await this.buildTree(child.childs[q], innerChild);
                        }
                    } else {
                        parentEle.appendChild(await this.createElement(child));
                        return;
                    }
                }
            } else {
                parentEle.appendChild(await this.createElement(eleArr));
                return;
            }
        }
    }

    registerTree(elements, changes) {
        var result = elements;
        result.tree.childs[0].childs[0].css = [...elements.tree.childs[0].childs[0].css, ...changes];
        result.tree.childs[0].childs[1].css = elements.tree.childs[0].childs[1].css.filter((v) => changes.indexOf(v) == -1);
        return result;
    }

    loginTree(elements, changes) {
        var result = elements;
        result.tree.childs[0].childs[0].css = elements.tree.childs[0].childs[1].css.filter((v) => changes.indexOf(v) == -1);
        result.tree.childs[0].childs[1].css = [...elements.tree.childs[0].childs[0].css, ...changes];
        return result;
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
        if (eleData.hasOwnProperty("classList")) {
            await this.addStyles(ele, eleData.classList);
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
}
