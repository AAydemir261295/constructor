import { EventEmitter } from "/js/libs/eventEmitter/EventEmitter.js";

export default class MyDom extends EventEmitter {

    head;

    constructor(stylez) {
        super();
        this.head = document.querySelector(".head");
        this.styles = stylez;
        console.log(stylez);
    }


    async addStyles(styles, urlPath) {
        var that = this;
        styles.forEach((css) => {
            const element = { ele: "link", options: { rel: 'stylesheet', href: `http://localhost:3001/css/${css}`, type: 'text/css' } }
            let cssLink = that.createElement(element);
            that.head.appendChild(cssLink);
        })
    }

    buildTree(eleArr, parentEle) {
        if (eleArr.hasOwnProperty("childs")) {
            var child = parentEle.appendChild(this.createElement(eleArr));
            var childs = eleArr.childs;
            for (let q = 0; q < childs.length; q++) {
                this.buildTree(childs[q], child);
            }
        } else {
            if (eleArr.length) {
                for (let q = 0; q < eleArr.length; q++) {
                    const child = eleArr[q];
                    if (child.hasOwnProperty("childs")) {
                        var innerChild = parentEle.appendChild(this.createElement(child));
                        var childs = child.childs;
                        for (let q = 0; q < childs.length; q++) {
                            this.buildTree(child.childs[q], innerChild);
                        }
                    } else {
                        parentEle.appendChild(this.createElement(child));
                        return;
                    }
                }
            } else {
                parentEle.appendChild(this.createElement(eleArr));
                return;
            }
        }
    }

    editRegisterTree(elements, changes) {
        var result = elements;

        result.tree.childs[0].childs[0].classList = [...elements.tree.childs[0].childs[0].classList, ...changes];
        result.tree.childs[0].childs[1].classList = elements.tree.childs[0].childs[1].classList.filter((v) => changes.indexOf(v) == -1);
        return result;
    }

    editLoginTree(elements, changes) {
        var result = elements;

        result.tree.childs[0].childs[0].classList = elements.tree.childs[0].childs[1].classList.filter((v) => changes.indexOf(v) == -1);
        result.tree.childs[0].childs[1].classList = [...elements.tree.childs[0].childs[0].classList, ...changes];

        return result;
    }

    setStyles(ele, classList) {
        classList.forEach((className) => {
            var cssBlock = this.styles[className];
            if(cssBlock == undefined){
                console.log(className);
                console.log(classList);
            }
            var cssPropertiesKeys = Object.keys(cssBlock);
            for (const propertyKey of cssPropertiesKeys) {
                
                ele.style[propertyKey] = cssBlock[propertyKey];
            }
        })
    }

    createElement(eleData) {
        var ele = document.createElement(eleData.ele);
        if (eleData.hasOwnProperty("classList")) {
            if (eleData.hasOwnProperty("css")) {
                ele.classList.add(...eleData.css)
            }
            this.setStyles(ele, eleData.classList);
        }
        if (eleData.hasOwnProperty("options")) {
            let options = eleData.options;
            var keys = Object.keys(options);
            keys.forEach(k => ele[k] = options[k]);
        }
        return ele;
    }
}



// buildTree(eleArr, parentEle) {
//     if (eleArr.hasOwnProperty("childs")) {
//         var child = parentEle.appendChild(this.createElement(eleArr));
//         var childs = eleArr.childs;
//         for (let q = 0; q < childs.length; q++) {
//             this.buildTree(eleArr.childs[q], child);
//         }
//     } else {
//         parentEle.appendChild(this.createElement(eleArr));
//         return;
//     }
// }
