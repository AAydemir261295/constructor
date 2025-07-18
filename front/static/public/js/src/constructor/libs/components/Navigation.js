class Navigation {

    constructor(ele, parent, componentType, componentId) {
        super(componentRefs, ele, parent, componentType, componentId);
    }

    boundedEditPropsFn = this.editProperties.bind(this);


    editProperties(propName, propValue) {
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