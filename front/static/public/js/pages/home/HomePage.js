import MyPage from "http://localhost:3000/js/core/MyPage.js";
import Constructor from "/js/components/Constructor.js";


export class HomePage extends MyPage {
    constructor(homeElements, router, domInteractions, csrf) {
        super(homeElements, router, domInteractions, csrf);
        this.myConstructor = new Constructor(homeElements.elements.main.ref);
    }

    myConstructor;

    restore(data) {

    }

    async renderPage(path, data) {
        await this.render();
    }
}


