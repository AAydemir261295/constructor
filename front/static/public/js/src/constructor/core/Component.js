import DragResize from "/js/src/constructor/libs/DragResize.js";

class Component extends DragResize {

    constructor(ele, parent, componentType, componentId) {
        super(ele, parent,);
        this.type = componentType;
        this.id = componentId;
        this.listeners();

        // this.subscribe("resized", (data) => {
            // this.editComponent(data.propType, data.propValue);
        // })
    }

    position;
    #type;
    #id;

    boundedEditComponentFn = this.editComponent.bind(this);

    editComponent(propName, propValue) {
        console.log(propName, propValue);
        switch (propName) {
            case "width":
                return this.setWidth(+propValue);
            case "height":
                return this.setHeight(+propValue);
            case "text":
                this.setInnerText(propValue);
                break;
        }
    }

    setWidth(value) {
        let isNumber = Number.isInteger(value);
        if (isNumber && value >= this.minimumWidth) {
            if (value > this.maxWidth) {
                this.ele.style.width = `${this.maxWidth}px`
                return this.maxWidth;
            } else {
                this.ele.style.width = `${value}px`
                return undefined;
            }
        }
    }

    setHeight(value) {
        let isNumber = Number.isInteger(value);

        if (isNumber && value >= this.minimumHeight) {
            if (value > this.maxHeight) {
                this.ele.style.height = `${this.maxHeight}px`;
                return this.maxHeight;
            } else {
                this.ele.style.height = `${value}px`
                return undefined;
            }

        }
    }

    setInnerText(value) {

    }

    compare() { }


    listeners() {
        this.ele.addEventListener("mousedown", () => {
            this.ele.style.removeProperty("box-shadow");
        })
    }


    set type(value) {
        this.#type = value;
    }

    get type() {
        return this.#type;
    }

    set id(value) {
        this.#id = value;
    }

    get id() {
        return this.#id
    }

}

export default Component;