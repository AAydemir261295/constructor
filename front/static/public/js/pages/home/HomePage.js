import MyPage from "http://localhost:3000/js/core/MyPage.js";
import Constructor from "/js/src/constructor/Constructor.js";
import RightAside from "/js/pages/home/RightAside.js";
import LeftAside from "/js/pages/home/LeftAside.js";
// import Button from "/js//components/constructor/libs/components/Button";


export class HomePage extends MyPage {
    constructor(homeElements, router, domInteractions, csrf) {
        super(homeElements, router, domInteractions, csrf);
    }

    myConstructor;
    rightAside;
    leftAside;
    navigation;

    async addSelectedElement(itemName) {
        let component = await this.myConstructor.addComponent(itemName);
        this.leftAside.setItemProperties(itemName, component.id, component);
    }

    restore(data) {

    }

    async renderPage(path, data) {
        await this.render();
        this.myConstructor = new Constructor(this.pageData.elements.main.ref.container, this.pageData.elements.main.items.components, this.domInteractions);
        this.rightAside = new RightAside(
            document.forms[this.pageData.elements.main.ref.rightAside.elementsForm],
            this.pageData.elements.main.ref.rightAside,
            this.pageData.elements.main.items.ddownItems,
            this.addSelectedElement.bind(this),
        );

        this.leftAside = new LeftAside(this.pageData.elements.main.ref.leftAside, this.domInteractions,);
        await this.leftAside.prepareItems(this.pageData.elements.main.items.asideItems);
    }
}


