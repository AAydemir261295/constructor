class Constructor {

    constructor(elementsRef) {
        this.constructorEle = document.querySelector(elementsRef.container);
        this.canvaz = this.constructorEle.querySelector(elementsRef.canvaz);
    }

    constructorEle;
    canvaz;



}


export default Constructor