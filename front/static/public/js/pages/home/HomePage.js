import MyPage from "http://localhost:3000/js/core/MyPage.js";
import Constructor from "/js/pages/home/constructor/Constructor.js";
import RightAside from "/js/pages/home/RightAside.js";
import LeftAside from "/js/pages/home/LeftAside.js";
import Components from "/js/pages/home/core/Components.js";
import Navigation from "/js/pages/home/Navigation.js";


export class HomePage extends MyPage {

    constructor(homeElements, router, domInteractions, csrf) {
        super(homeElements, router, domInteractions, csrf);
        this.components = new Components();
    }


    myConstructor;
    rightAside;
    leftAside;
    navigation;
    components;


    async addSelectedElement(itemName) {
        await this.myConstructor.addOnBoard(itemName, this.pageData.elements.main.ref.leftAside[itemName]);
    }

    restore(data) {

    }

    async renderPage(path, data) {
        await this.render();
        this.myConstructor = new Constructor(this.pageData.elements.main.ref.container, this.pageData.elements.main.items.components, this.domInteractions, this.components);

        this.navigation = new Navigation(this.pageData.elements.main.ref.navigation);


        this.rightAside = new RightAside(
            document.forms[this.pageData.elements.main.ref.rightAside.elementsForm],
            this.pageData.elements.main.ref.rightAside,
            this.pageData.elements.main.items.ddownItems,
            this.addSelectedElement.bind(this),
        );

        this.leftAside = new LeftAside(this.pageData.elements.main.ref.leftAside, this.domInteractions, this.components);
        await this.leftAside.prepareItems(this.pageData.elements.main.items.asideItems);
    }
}


