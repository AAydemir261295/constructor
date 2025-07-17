import MyForm from "http://localhost:3000/js/core/MyForm.js";

class AsideElement extends MyForm {

    constructor(form, elementsRef, ele, componentProperties, editProperty) {
        super(form, elementsRef.inputs);
        this.ele = ele;
        this.editProperty = editProperty;

        componentProperties.forEach((props) => {
            this.editInputsValue(props.propType, props.propValue);
        })

        this.onFormChange();
    }

    ele;
    editProperty;


    editInputsValue(inputName, value) {
        this.form.elements[inputName].value = value;
    }

    onFormChange() {
        this.form.addEventListener("input", (e) => {
            let inputName = e.target.name;
            let value = e.target.value;
            let isBigger = this.editProperty(inputName, value)
            if (isBigger) {
                e.target.value = isBigger;
            }
        })
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

export default AsideElement;