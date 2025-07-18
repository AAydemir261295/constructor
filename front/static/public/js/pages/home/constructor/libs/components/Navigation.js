import Component from "/js/pages/home/core/Component.js";


class Navigation extends Component {

    constructor(ele, parent, componentType, componentId, componentRefs) {
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
            case "logo":
                break;
            case "title":
                return this.setTitle(propValue);
        }
    }


    getProperties() {
        return [
            { propType: "width", propValue: this.ele.offsetWidth },
            { propType: "height", propValue: this.ele.offsetHeight },
            // {propType: "logo", propValue: ""},
            { propType: "title", propValue: this.ele.children[0].children[0].children[1].children[0].children[0].textContent },
        ]
    }



}

export default Navigation;