import MyForm from "http://localhost:3000/js/core/MyForm.js";
import DropDownInput from "http://localhost:3000/js/components/ddownInput/DropDownInput.js";

class ElementsForm extends MyForm {

    constructor(form, elementsRef, items) {
        super(form, [elementsRef.elementsInput]);
        this.input = new DropDownInput(this.form.elements[elementsRef.elementsInput], elementsRef, items);
    }

    input;





}


export default ElementsForm