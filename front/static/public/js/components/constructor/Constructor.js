class Constructor {

    constructor(elementsRef, components) {
        this.constructorEle = document.querySelector(elementsRef.container);
        this.canvaz = this.constructorEle.querySelector(elementsRef.canvaz);
        this.componentsData = components;
        console.log(this.componentsData);
    }

    constructorEle;
    canvaz;
    components = [];
    componentsData;


    addComponent(componentName) {
        console.log(this.componentsData[componentName]);
    }


}


export default Constructor