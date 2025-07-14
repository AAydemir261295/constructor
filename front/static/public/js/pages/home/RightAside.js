import ElementsForm from "/js/pages/home/libs/ElementsForm.js";

class RightAside {

    constructor(form, elementsRef, items) {
        this.form = new ElementsForm(form, elementsRef, items);
        this.selectableElements = this.form.input.itemsRef;
        this.resultElementsContainer = document.querySelector(elementsRef.elementsResult);
        this.resultElements = this.resultElementsContainer.children;
        this.listeners();
    }

    form;
    selectableElements;
    resultElementsContainer;


    listeners() {
        this.selectableElements.forEach((ele, idx) => {
            ele.addEventListener("click", () => {

                let resultElements = Array.from(this.resultElements);

                resultElements.forEach((ele, q) => {

                    if (q == idx) {
                        setTimeout(() => {
                            this.resultElements[q].classList.remove("hidden");
                            setTimeout(() => {
                                this.resultElements[q].classList.remove("invisible");
                            }, 10)
                        }, 200);
                    } else {
                        this.resultElements[q].classList.add("invisible");
                        setTimeout(() => {
                            this.resultElements[q].classList.add("hidden");
                        }, 200)

                    }

                })
            })
        })
    }
}

export default RightAside
