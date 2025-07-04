import MyDom from "/js/libs/dom/index.js";
import { Router } from "/js/router/Router.js";
import { Loader } from "/js/components/loader/loader.js";

class App {

    router;

    constructor() {
        let pathName = window.location.pathname;
        var loader = new Loader();
        loader.start();
        this.router = new Router(pathName, loader);
    }
}

export const app = new App();





