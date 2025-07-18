import ComponentPropsForm from "/js/pages/home/libs/ComponentPropsForm.js";

class LeftAside {

    constructor(elementsRef, domInteractions, components) {
        this.domInteractions = domInteractions;
        this.contentContainer = document.querySelector(elementsRef.contentContainer);
        this.references = elementsRef;
        this.components = components;

        this.componentsInteractions();
    }

    references;
    elements;
    currentItem;
    itemId;

    boundedDeleteHandler = this.deleteHandler.bind(this);




    async prepareItems(elements) {
        this.elements = await this.domInteractions.createNestedElements(elements);
    }

    createNewForm(component) {
        let form = this.elements[component.type].querySelector(this.references.form);
        this.currentItem = new ComponentPropsForm(form,
            this.references.removeBtn,
            this.references[component.type],
            this.elements[component.type],
            component);

        this.contentContainer.appendChild(this.currentItem.ele);
        this.currentItem.show();
        this.deleteComponentListener();
    }

    editCurrentForm(component) {
        if (this.currentItem.component.id != component.id) {
            this.currentItem.removeBtn.removeEventListener("click", this.boundedDeleteHandler);
            this.currentItem.removeListeners();
            this.currentItem.component = component;
            this.currentItem.setInputsValue(component.getProperties());
            this.currentItem.onFormChangeListener();
            this.deleteComponentListener();
        } else {
            this.currentItem.setInputsValue(component.getProperties());
        }
    }


    setComponentForm(component) {
        if (this.currentItem) {
            if (this.currentItem.component.type != component.type) {
                this.currentItem.hide();
                this.currentItem.removeListeners();

                this.createNewForm(component);
            } else {
                this.editCurrentForm(component);
            }
        } else {
            this.createNewForm(component);
        }
    }

    deleteHandler() {
        this.currentItem.removeBtn.removeEventListener("click", this.boundedDeleteHandler);
        this.currentItem.removeListeners();
        this.currentItem.hide();

        setTimeout(() => {
            this.currentItem.ele.remove();
            this.currentItem.component.remove();
            this.currentItem = null;
        }, 200)
    }


    deleteComponentListener() {
        this.currentItem.removeBtn.addEventListener("click", this.boundedDeleteHandler);
    }

    componentsInteractions() {
        this.components.subscribe("selected", (component) => {
            this.setComponentForm(component);
        })

        this.components.subscribe("resized", (component) => {
            console.log("ASD");
            this.setComponentForm(component);
        })

        this.components.subscribe("add", (component) => {
            this.setComponentForm(component);
        })
    }
}

export default LeftAside