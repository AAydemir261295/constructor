import { Csrf } from "/js/libs/csrf/Csrf.js";
import MyDom from "/js/libs/dom/index.js";
import { request } from "/js/libs/request/fetch.js";
import { EventEmitter } from "/js/libs/eventEmitter/EventEmitter.js";

const url = "http://localhost:3000";

const dataUrls = {
    "/": "",
    "/login": (csrf) => `http://localhost:3001/login/${csrf}`,
    "/register": (csrf) => `http://localhost:3001/register/${csrf}`,

}



const animations = {
    show: "show 0.2s linear forwards"
}

export default class Route {

    pathName;
    title;
    domInteractions;
    PageModule;
    page;
    pageData;
    router;
    body


    constructor(pathName, title, router, module) {
        this.body = document.querySelector(".body");
        this.router = router;
        this.pathName = pathName;
        this.title = title;
        this.domInteractions = new MyDom();
        this.PageModule = module;
    }

    updateHistory() {
        history.pushState({ ...this.data, ...{ csrf: this.data.csrf }, path: this.pathName }, "", this.pathName);
        document.title = this.title;
    }

    async getRouteData() {
        let cache = history.state;

        if (cache) {
            this.data = cache;
        } else {
            let csrf = new Csrf();
            this.data = await request(dataUrls[this.pathName](csrf.get()));
            csrf.update(this.data.csrf);
            this.updateHistory();
        }
    }

    async resolve() {
        await this.getRouteData();


        setTimeout(async () => {
            this.page = new this.PageModule(this.data.elements, this.router, this.domInteractions);
            await this.page.drawPage(this.body, this.data.elements);
            this.page.showPage();
            // this.page.container.style.animation = animations.show;
        }, 1500)
    }

}