import AsideElement from "/js/pages/home/libs/AsideElement.js";

class LeftAside {

    constructor(elementsRef, domInteractions) {
        this.domInteractions = domInteractions;
        this.contentContainer = document.querySelector(elementsRef.contentContainer);
        this.references = elementsRef;
    }

    references;
    elements;
    currentItem;

    async prepareItems(elements) {
        this.elements = await this.domInteractions.createNestedElements(elements);
    }

    setItemProperties(itemName, itemId, component) {
        if (this.currentItem) {
            this.currentItem.hide();
        }
        let form = this.elements[itemName].querySelector(this.references[itemName].form);

        this.currentItem = new AsideElement(form, this.references[itemName], this.elements[itemName], itemName, itemId, component.boundedEditComponentFn);

        this.contentContainer.appendChild(this.currentItem.ele);

        this.currentItem.show();

        component.subscribe("resized", (data) => {
            this.currentItem.editInputsValue(data.propType, data.propValue);
        })
    }
}

export default LeftAside