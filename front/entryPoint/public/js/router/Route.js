import { Csrf } from "/js/libs/csrf/Csrf.js";
import MyDom from "/js/libs/dom/index.js";
import { request } from "/js/libs/request/fetch.js";


const url = "http://localhost:3000";

const dataUrls = {
    "/": "",
    "/login": (csrf) => `http://localhost:3001/login/${csrf}`,
}

const moduleUrls = {
    "/login": "http://localhost:3001/js/pages/login/LoginPage.js"
}

const animations = {
    show: "show 0.2s linear forwards"
}

export default class Route {

    pathName;
    title;
    domInteractions;
    PageModule;
    pageData;

    constructor(pathName, title) {
        this.pathName = pathName;
        this.title = title;
        this.domInteractions = new MyDom();
    }


    getModuleName() {
        let prefix = this.title.substring(0, 1).toUpperCase() + this.title.substring(1, this.title.length);
        console.log(prefix);
        return `${prefix}Page`;
    }

    async setModule() {
        let module = await import(moduleUrls[this.pathName])
        this.PageModule = module[this.getModuleName()];
        await this.domInteractions.addStyles(this.data.elements.styles, this.pathName);
    }

    setHistory() {
        history.pushState(this.data, "", `${url}${this.pathName}`);
        document.title = this.title;
    }

    async resolve() {
        let csrf = new Csrf();
        this.data = await request(dataUrls[this.pathName](csrf.get()));
        csrf.update(this.data.csrf);

        this.setHistory();
        await this.setModule();


        setTimeout(() => {
            this.currentPage = new this.PageModule(this.data.elements);
            this.currentPage.container.style.animation = animations.show;
        }, 1500)
    }

}