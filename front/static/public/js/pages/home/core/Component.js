import DragResize from "/js/pages/home/constructor/libs/DragResize.js";

class Component extends DragResize {

    constructor(ele, parent, componentType, componentId) {
        super(ele, parent);
        this.type = componentType;
        this.id = componentId;
        this.listeners();
    }

    position;
    childs = [];
    type;
    id;


    // remove() {
        // this.emit("delete");
        // this.ele.remove();
    // }



    setWidth(value) {
        let isNumber = Number.isInteger(value);
        if (isNumber && value >= this.minimumWidth) {
            let maxWidth = this.parent.offsetWidth - 20;
            if (value > maxWidth) {
                this.ele.style.left = `${10}px`;
                this.ele.style.width = `${maxWidth}px`;
                return maxWidth;
            } else {
                let width = ~~value;
                let prevLeft = this.ele.offsetLeft;
                let currentLeft = Math.max(prevLeft - (width / 2), 10);
                this.ele.style.left = `${currentLeft}px`;
                this.ele.style.width = `${width}px`;
                return undefined;

            }
            // if (value > this.maxWidth) {
            //     this.ele.style.width = `${this.maxWidth}px`
            //     return this.maxWidth;
            // } else {
            //     let width = ~~value;
            //     this.ele.style.width = `${width}px`
            //     return undefined;
            // }
        }
    }

    setHeight(value) {
        let isNumber = Number.isInteger(value);

        if (isNumber && value >= this.minimumHeight) {
            let maxHeight = this.parent.offsetHeight - 20;
            if (value > maxHeight) {
                this.ele.style.top = `${10}px`;
                this.ele.style.height = `${maxHeight}px`;
                return maxHeight
            } else {
                let height = ~~value;
                let prevTop = this.ele.offsetTop;
                let currentTop = Math.max(prevTop - (height / 2), 10);
                this.ele.style.top = `${currentTop}px`;
                this.ele.style.height = `${height}px`
                return undefined;

            }
            // if (value > this.maxHeight) {
            //     this.ele.style.height = `${this.maxHeight}px`;
            //     return this.maxHeight;
            // } else {
            //     let height = ~~value;
            //     this.ele.style.height = `${height}px`
            //     return undefined;
            // }
        }
    }



    setInnerText(value) {
        let text = this.sanitizeText(value);

        this.ele.children[0].textContent = text;

        if (this.ele.offsetWidth != this.currWidth) {
            let width = this.ele.offsetWidth;
            this.emit("resized", { propType: "width", propValue: width })
            this.currWidth = width;
            if (this.minimumWidth > this.currWidth) {
                this.minimumWidth = width;
            }
        }

        if (this.ele.offsetHeight != this.currHeight) {
            let height = this.ele.offsetHeight;
            this.emit("resized", { propType: "height", propValue: height })
            this.currHeight = height;
            if (this.minimumHeight > this.currHeight) {
                this.minimumHeight = height;
            }
        }
    }

    sanitizeText(s) {
        return s.replace(/&/g, '').replace(/</g, '').replace(/"/g, '');
    }

    compare() { }





    //         case "навигация":
    //             return [{ propType: "width", propValue: this.ele.offsetWidth },
    //             { propType: "height", propValue: this.ele.offsetHeight },
    //             // {propType: "logo", propValue: ""},
    //             { propType: "title", propValue: this.ele.children[0].children[0].children[1].children[0].children[0].textContent },

    //             ]



    listeners() {
        this.ele.addEventListener("mousedown", () => {
            this.ele.style.removeProperty("box-shadow");
        })

        // this.ele.addEventListener("click", () => {
        //     this.emit("selected");
        // })
    }

}

export default Component;