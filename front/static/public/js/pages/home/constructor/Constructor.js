import Container from "/js/pages/home/constructor/libs/components/Container.js";
import Button from "/js/pages/home/constructor/libs/components/Button.js";

import Canvaz from "/js/pages/home/constructor/libs/Canvaz.js";

class Constructor {

    constructor(elementsRef, componentsData, domInteractions, components) {
        this.board = document.querySelector(elementsRef.container);
        this.canvaz = new Canvaz(this.board.querySelector(elementsRef.canvaz));
        this.componentsData = componentsData;
        this.domInteractions = domInteractions;
        this.components = components;
    }

    board;
    canvaz;
    components;
    ids = [];
    componentsData;
    lastId = 0;


    createComponent(type, parent, board, componentName, compId, componentRefs) {
        switch (type) {
            case "кнопка":
                return new Button(parent, board, componentName, compId);
            case "контейнер":
                return new Container(parent, board, componentName, compId);
            // case "навигация":
            //     return new Navigation(parent, board, componentName, compId, componentRefs);
        }
    }

    async addOnBoard(componentName, componentRefs) {
        let compId = this.lastId++;

        let tmp = this.componentsData[componentName];
        
        console.log(tmp);
        
        let parent = await this.domInteractions.createElement(tmp);
        await this.domInteractions.buildTree(tmp.childs, parent);
        this.board.appendChild(parent);

        let component = this.createComponent(componentName, parent, this.board, componentName, compId, componentRefs);
        this.components.add(component);

    }
}


export default Constructor