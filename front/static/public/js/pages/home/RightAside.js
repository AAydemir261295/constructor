import ElementsForm from "/js/pages/home/libs/ElementsForm.js";

class RightAside {

    constructor(form, elementsRef, items) {
        this.form = new ElementsForm(form, elementsRef, items);
    }

    form;
}

export default RightAside
