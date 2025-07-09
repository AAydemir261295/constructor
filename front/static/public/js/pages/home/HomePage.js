import MyPage from "http://localhost:3000/js/core/MyPage.js";



export class HomePage extends MyPage {
    constructor(homeElements, router, domInteractions, csrf) {
        super(homeElements, router, domInteractions, csrf);
    }


    restore(data) {

    }

    async renderPage(path, data) {
        await this.render();
    }
}


