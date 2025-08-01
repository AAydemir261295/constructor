import Aside from "/js/pages/home/core/Aside.js";
import ElementsForm from "/js/pages/home/libs/ElementsForm.js";

class RightAside extends Aside {

    constructor(form, elementsRef, items, addElement) {
        super(elementsRef.rightAside, elementsRef.showBtn, elementsRef.hideBtn);

        this.form = new ElementsForm(form, elementsRef, items, this.showSelectedElements.bind(this));
        this.addElementFn = addElement;

        this.resultElementsContainer = document.querySelector(elementsRef.elementsResult);
        this.resultElements = Array.from(this.resultElementsContainer.children);


        this.selectListener();
    }

    form;
    selectableElements;
    resultElementsContainer;
    addElementFn;
    currentItem;


    selectListener() {
        this.resultElements.forEach((ele) => {
            ele.addEventListener("click", () => {
                this.addElementFn(this.currentItem);
            })
        })
    }

    showSelectedElements(itemName, idx) {
        if (this.currentItem != itemName) {
            this.currentItem = itemName;
            this.resultElements.forEach((ele, q) => {
                if (q == idx) {
                    this.resultElements[q].classList.remove("hidden");
                } else {
                    this.resultElements[q].classList.add("hidden");
                }
            })
        }
    }
}

export default RightAside
