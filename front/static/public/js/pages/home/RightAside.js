import ElementsForm from "/js/pages/home/libs/ElementsForm.js";

class RightAside {

    constructor(form, elementsRef, items, addElement) {
        this.form = new ElementsForm(form, elementsRef, items, this.showSelectedElements.bind(this));
        this.addElementFn = addElement;

        // this.selectableElements = this.form.input.itemsRef;
        this.resultElementsContainer = document.querySelector(elementsRef.elementsResult);
        this.resultElements = this.resultElementsContainer.children;
    }

    form;
    selectableElements;
    resultElementsContainer;
    addElementFn;


    showSelectedElements(idx) {
        let resultElements = Array.from(this.resultElements);
        resultElements.forEach((ele, q) => {
            if (q == idx) {
                setTimeout(() => {
                    this.resultElements[q].classList.remove("hidden");
                    setTimeout(() => {
                        this.resultElements[q].classList.remove("invisible");
                    }, 10)
                }, 200);
                ele.addEventListener("click", () => {
                    this.addElementFn(idx);
                })
            } else {
                this.resultElements[q].classList.add("invisible");
                setTimeout(() => {
                    this.resultElements[q].classList.add("hidden");
                }, 200)
            }
        })
    }
}

export default RightAside
