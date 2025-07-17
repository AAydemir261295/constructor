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
    currentItemType;
    itemId;



    async prepareItems(elements) {
        this.elements = await this.domInteractions.createNestedElements(elements);
    }

    setItemProperties(itemName, itemId, component) {
        if (this.currentItem) {
            this.currentItem.hide();
        }

        this.currentItemType = itemName;
        this.itemId = itemId;

        console.log(itemName);

        let form = this.elements[itemName].querySelector(this.references.form);

        this.currentItem = new AsideElement(form,
            this.references[itemName],
            this.elements[itemName],
            component.getItemProperties(),
            component.boundedEditComponentFn);



        this.contentContainer.appendChild(this.currentItem.ele);

        this.currentItem.show();

        component.subscribe("resized", (data) => {
            this.currentItem.editInputsValue(data.propType, data.propValue);
        })

    }

    editItemProperties(itemId, props) {
        if (this.itemId != itemId) {
            this.itemId = itemId;
            props.forEach((prop) => {
                this.currentItem.editInputsValue(prop.propType, prop.propValue);
            })
        }
    }


}

export default LeftAside