import Container from "/js/src/constructor/libs/components/Container.js";
import Button from "/js/src/constructor/libs/components/Button.js";

import Canvaz from "/js/src/constructor/libs/Canvaz.js";

class Constructor {

    constructor(elementsRef, components, domInteractions) {
        this.board = document.querySelector(elementsRef.container);
        this.canvaz = new Canvaz(this.board.querySelector(elementsRef.canvaz));
        this.componentsData = components;
        this.domInteractions = domInteractions;

    }

    board;
    canvaz;
    components = [];
    ids = [];
    componentsData;

    lastId = 0;


    removeComponent(compId) {
        let comp = this.components.find(c => c.id == compId);
        let idx = this.components.indexOf(comp);
        this.components.splice(idx, 1);
        console.log(this.components);
    }


    createComponent(type, parent, board, componentName, compId, componentRefs) {
        switch (type) {
            case "кнопка":
                return new Button(parent, board, componentName, compId);
            case "контейнер":
                return new Container(parent, board, componentName, compId);
        }
    }


    async addOnBoard(componentName, componentRefs) {
        let compId = this.lastId++;

        let tmp = this.componentsData[componentName];
        let parent = await this.domInteractions.createElement(tmp);
        await this.domInteractions.buildTree(tmp.childs, parent);
        this.board.appendChild(parent);

        let component = this.createComponent(componentName, parent, this.board, componentName, compId, componentRefs);

        component.subscribe("delete", () => {
            this.removeComponent(component.id);
        })


        this.components.push(component);

        return component;
    }


}


export default Constructor