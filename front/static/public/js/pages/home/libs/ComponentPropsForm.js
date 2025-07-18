import MyForm from "http://localhost:3000/js/core/MyForm.js";

class ComponentPropsForm extends MyForm {

    constructor(form, removeBtnSelector, elementsRef, ele, component) {
        super(form, elementsRef.inputs);
        this.ele = ele;
        this.removeBtn = this.ele.querySelector(removeBtnSelector);
        this.component = component

        this.setInputsValue(component.getProperties());
        this.onFormChangeListener();
    }

    ele;
    editProperty;

    boundedInputHandler = this.onInputHandler.bind(this);


    setInputsValue(props) {
        props.forEach((prop) => {
            this.form.elements[prop.propType].value = prop.propValue;
        })
    }

    onInputHandler(e) {
        let inputName = e.target.name;
        let value = e.target.value;
        let isBigger = this.component.boundedEditPropsFn(inputName, value)
        if (isBigger) {
            e.target.value = isBigger;
        }
    }

    onFormChangeListener() {
        this.form.addEventListener("input", this.boundedInputHandler);
    }

    removeListeners() {
        this.form.removeEventListener("input", this.boundedInputHandler);
    }


    show() {
        setTimeout(() => {
            this.ele.classList.remove("hidden");

            setTimeout(() => {
                this.ele.classList.remove("invisible");
            }, 10)
        }, 200)
    }

    hide() {
        this.ele.classList.add("invisible");

        setTimeout(() => {
            this.ele.classList.add("hidden");
        }, 200)
    }

}

export default ComponentPropsForm;