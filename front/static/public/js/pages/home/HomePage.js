import MyPage from "http://localhost:3000/js/core/MyPage.js";
import Constructor from "/js/components/constructor/Constructor.js";
import RightAside from "/js/pages/home/RightAside.js";
// import Button from "/js//components/constructor/libs/components/Button";


export class HomePage extends MyPage {
    constructor(homeElements, router, domInteractions, csrf) {
        super(homeElements, router, domInteractions, csrf);

    }

    myConstructor;
    rightAside;
    leftAside;
    navigation;

    addSelectedElement(itemName) {
        this.myConstructor.addComponent(itemName);
        // let tmp = new Button()
    }

    restore(data) {

    }

    async renderPage(path, data) {
        await this.render();
        console.log(this.pageData);
        this.myConstructor = new Constructor(this.pageData.elements.main.ref.container, this.pageData.elements.main.items.components);
        this.rightAside = new RightAside(
            document.forms[this.pageData.elements.main.ref.rightAside.elementsForm],
            this.pageData.elements.main.ref.rightAside,
            this.pageData.elements.main.items.ddownItems,
            this.addSelectedElement.bind(this),
        );
    }
}


