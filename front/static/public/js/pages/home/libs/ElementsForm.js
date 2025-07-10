import MyForm from "http://localhost:3000/js/core/MyForm.js";
import DropDownInput from "http://localhost:3000/js/components/ddownInput/DropDownInput.js";

class ElementsForm extends MyForm {

    constructor(form, elementsRef) {
        super(form, [elementsRef.elementsInput]);
        // this.input = new DropDownInput();
    }

    input;





}


export default ElementsForm