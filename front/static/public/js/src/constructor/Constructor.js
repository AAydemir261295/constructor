import Component from "/js/src/constructor/core/Component.js";

class Constructor {

    constructor(elementsRef, components, domInteractions) {
        this.board = document.querySelector(elementsRef.container);
        this.canvaz = this.board.querySelector(elementsRef.canvaz);
        this.componentsData = components;
        this.domInteractions = domInteractions;

    }

    board;
    canvaz;
    components = [];
    ids = [];
    componentsData;

    lastId = 0;


    async addComponent(componentName) {
        let compId = this.lastId++;

        let tmp = this.componentsData[componentName];
        let parent = await this.domInteractions.createElement(tmp);
        await this.domInteractions.buildTree(tmp.childs, parent);
        this.board.appendChild(parent);

        let component = new Component(parent, this.board, componentName, compId)
        this.components.push(component);

        return component;
    }


}


export default Constructor