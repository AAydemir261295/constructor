import Component from "/js/src/constructor/core/Component.js";


class Container extends Component {

    constructor(ele, parent, componentType, componentId) {
        super(ele, parent, componentType, componentId);
    }


    boundedEditPropsFn = this.editProperties.bind(this);


    editProperties(propName, propValue) {
        switch (propName) {
            case "width":
                return this.setWidth(+propValue);
            case "height":
                return this.setHeight(+propValue);
        }
    }


    getProperties() {
        return [{ propType: "width", propValue: this.ele.offsetWidth },
        { propType: "height", propValue: this.ele.offsetHeight }]
    }

}

export default Container;