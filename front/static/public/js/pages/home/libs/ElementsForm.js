import MyForm from "http://localhost:3000/js/core/MyForm.js";
import DropDownInput from "http://localhost:3000/js/components/ddownInput/DropDownInput.js";

class ElementsForm extends MyForm {

    constructor(form, elementsRef, items) {
        super(form, [elementsRef.elementsInput]);
        this.input = new DropDownInput(this.form.elements[elementsRef.elementsInput], elementsRef, items);
        // this.selectableItems = this.input.itemsRef;

        // listeners();
    }

    input;
    // selectableItems;


    // listeners() {
    //     this.selectableItems.forEach((item) => {
    //         item.addEventListener("click", () => {
    //             console.log("clicked");
    //         })
    //     })
    // }

}


export default ElementsForm