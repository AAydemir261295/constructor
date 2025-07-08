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
    title;
    domInteractions;
    PageModule;
    page;
    pageData;
    router;
    body


    constructor(pathName, title, router, module, csrf) {
        this.body = document.querySelector(".body");
        this.router = router;
        this.csrf = csrf;
        this.pathName = pathName;
        this.title = title;
        this.domInteractions = new MyDom();

        this.PageModule = module;
    }

    // updateHistory(data) {
    //     history.pushState(data, "", this.pathName);
    //     document.title = this.title;
    // }

    // replateHistory() {
    //     history.replaceState({ ...this.data, ...{ csrf: this.data.csrf }, path: this.pathName }, "", this.pathName);
    //     document.title = this.title;
    // }

    async getRouteData() {
        let cache = history.state;
        if (cache) {
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
            this.router.updateHistory({ ...this.data, nested: true, path: this.pathName, anchorType: "login", anchorName: "loginForm", csrf: this.csrf.get() });
        }, 1500)
    }

}