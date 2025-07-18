import Component from "/js/pages/home/core/Component.js";

class Button extends Component {

    constructor(ele, parent, componentType, componentId) {
        super(ele, parent, componentType, componentId);
    }

    boundedEditPropsFn = this.editProperties.bind(this);

    editProperties(propName, propValue) {
        this.ele.style.left = `${this.ele.offsetLeft}px`;
        this.ele.style.top = `${this.ele.offsetTop}px`;
        this.ele.style.removeProperty("right");
        this.ele.style.removeProperty("bottom");


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


    getProperties() {
        return [{ propType: "width", propValue: this.ele.offsetWidth },
        { propType: "height", propValue: this.ele.offsetHeight },
        { propType: "text", propValue: this.ele.children[0].textContent }]
    }

}

export default Button;