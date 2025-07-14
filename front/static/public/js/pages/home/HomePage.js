import MyPage from "http://localhost:3000/js/core/MyPage.js";
import Constructor from "/js/components/Constructor.js";
import RightAside from "/js/pages/home/RightAside.js";


export class HomePage extends MyPage {
    constructor(homeElements, router, domInteractions, csrf) {
        super(homeElements, router, domInteractions, csrf);
    }

    myConstructor;
    rightAside;
    leftAside;
    navigation;

    addSelectedElement(itemIdx) {
        console.log(itemIdx);
    }

    restore(data) {

    }

    async renderPage(path, data) {
        await this.render();
        this.myConstructor = new Constructor(this.pageData.elements.main.ref.container);
        this.rightAside = new RightAside(
            document.forms[this.pageData.elements.main.ref.rightAside.elementsForm],
            this.pageData.elements.main.ref.rightAside,
            this.pageData.elements.main.items.ddownItems,
            this.addSelectedElement.bind(this),
        );
    }
}


