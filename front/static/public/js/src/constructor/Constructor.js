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

 
    async getId() {
        let max = 1000000;
        let min = 0;
        let numb = Math.floor(Math.random() * (max - min + 1) + min);
        if (this.ids.indexOf(numb) == -1) {
            return numb;
        } else {
            await this.getId();
        }
    }

    async addComponent(componentName) {
        let compId = await this.getId();

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