import MyForm from "http://localhost:3000/js/core/MyForm.js";

class AsideElement extends MyForm {

    constructor(form, elementsRef, ele, elementType, elementId, editProperty) {
        super(form, elementsRef.inputs);
        this.ele = ele;
        this.elementType = elementType;
        this.elementId = elementId;
        this.editProperty = editProperty;
        
        this.onFormChange();
    }

    ele;
    elementType;
    elementId;
    editProperty;


    editInputsValue(inputName, value) {
        this.form.elements[inputName].value = value;
    }

    onFormChange() {
        this.form.addEventListener("input", (e) => {
            let inputName = e.target.name;
            let value = e.target.value;
            let isBigger = this.editProperty(inputName, value)
            console.log(isBigger);
            if (isBigger) {
                e.target.value = isBigger;
            }
        })
    }


    show() {
        this.ele.classList.remove("hidden");

        setTimeout(() => {
            this.ele.classList.remove("invisible");
        }, 10)
    }

    hide() {
        setTimeout(() => {
            this.ele.classList.add("invisible");

            setTimeout(() => {
                this.ele.classList.add("hidden");
            }, 200)
        }, 200)
    }

}

export default AsideElement;