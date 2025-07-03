import MyDom from "/js/libs/dom/index.js";
import { csrfElement } from "/js/elements/csrfEle.js";
import { Router } from "/js/router/Router.js";
import { Loader } from "/js/components/loader/loader.js";
import { Cookie } from "/js/src/services/Cookie.js";

class App {

    body;
    domInteractions;
    router;
    currentPage;
    urlPathname;
    csrf;
    loader;


    constructor() {
        this.urlPathname = window.location.pathname == "/" ? "/login" : window.location.pathname;
        this.body = document.querySelector('.body');
        
        this.loader = new Loader();
        this.loader.start();
        
        this.router = new Router(this.urlPathname, this.loader);
        
        this.domInteractions = new MyDom();
    }
}

export const app = new App();





