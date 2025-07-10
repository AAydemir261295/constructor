import { Router } from "/js/router/Router.js";
import { Loader } from "/js/components/loader/loader.js";
import { Csrf } from "/js/libs/csrf/Csrf.js";
// import DropDownInput from "/js/components/ddownInput/DropDownInput.js";


class App {

    router;

    constructor() {
        let pathName = window.location.pathname;
        var loader = new Loader();
        loader.start();
        this.csrf = new Csrf();
        this.router = new Router(pathName, loader, this.csrf);
        // let tmp = new DropDownInput();
    }
}

export const app = new App();





