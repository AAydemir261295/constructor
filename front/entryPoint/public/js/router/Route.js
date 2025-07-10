import MyDom from "/js/libs/dom/dom.js";
import { request } from "/js/libs/request/fetch.js";

const dataUrls = {
    "/": "",
    "/login": (csrf) => `http://localhost:3001/login/${csrf}`,
    "/register": (csrf) => `http://localhost:3001/register/${csrf}`,
    "/home": (csrf) => `http://localhost:3001/home/${csrf}`
}


export default class Route {

    pathName;
    domInteractions;
    PageModule;
    page;
    pageData;
    router;
    body


    constructor(pathName, router, module, csrf) {
        this.body = document.querySelector(".body");
        this.router = router;
        this.csrf = csrf;
        this.pathName = pathName;
        this.domInteractions = new MyDom();

        this.PageModule = module;
    }


    async getRouteData() {
        let cache = history.state;

        if (cache && cache.hasOwnProperty("data")) {
            this.data = cache;
        } else {
            this.data = await request(dataUrls[this.pathName](this.csrf.get()));
            this.csrf.update(this.data.csrf);
        }
    }

    async editRoute(data) {
        await this.page.nestedRedirect(data.anchorType, data.anchorName);
        this.page.restore(data);
    }


    async resolve() {
        await this.getRouteData();


        setTimeout(async () => {
            this.page = new this.PageModule(this.data.elements, this.router, this.domInteractions, this.csrf);
            await this.page.renderPage(this.pathName);


            if (this.pathName == "/home") {
                this.router.updateHistory({ ...this.data, nested: false, path: this.pathName, csrf: this.csrf.get() });
            } else {
                this.router.updateHistory({ ...this.data, nested: false, path: this.pathName, anchorType: "login", anchorName: "loginForm", csrf: this.csrf.get() });
            }
        }, 1500)
    }

}