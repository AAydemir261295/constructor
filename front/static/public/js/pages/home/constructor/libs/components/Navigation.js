import Component from "/js/pages/home/core/Component.js";
import Button from "/js/pages/home/constructor/libs/components/Button.js";

class Navigation extends Component {

    constructor(ele, parent, componentType, componentId, componentRefs) {
        super(ele, parent, componentType, componentId);
        this.refs = componentRefs;
        let buttonsRefs = this.ele.querySelectorAll(this.refs.buttons)
        // console.log(buttonsRefs);
        let id = new Number(componentId);

        console.log(this.ele);

        buttonsRefs.forEach((btn) => {
            this.buttons.push(new Button(btn, this.ele, "test button", ++id));
        });

        console.log(this.buttons);

        // let tmp = new Button(ele, parent, componentType, componentId)
    }

    refs;
    buttons = [];
    // logo;
    // title;

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
            { propType: "title", propValue: this.ele.querySelector(this.refs.title).textContent },
        ]
    }



}

export default Navigation;