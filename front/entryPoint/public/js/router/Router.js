import { EventEmitter } from "/js/libs/eventEmitter/EventEmitter.js";
import Route from "/js/router/Route.js";
import { AuthGuard } from "/js/libs/guards/AuthGuard.js";



export class Router extends EventEmitter {

    history;
    // localStorage;
    cached;
    currentRoute;
    authGuard;
    body;



    constructor(pathname) {
        super();
        this.authGuard = new AuthGuard();
        this.body = document.querySelector(".body");
        this.pathname = pathname;

        // this.localStorage = new LocalStorage();
        // this.cached = this.local.getItem(this.pathname);

        this.resolvePath(pathname, this.getRouteTitle(pathname));
    }


    async resolvePath(url, title) {
        let isLogined = await this.authGuard.checkAuth();
        if (isLogined) {

        } else {
            // this.currentRoute = new Route(url, title);
            this.currentRoute = new Route("/login", "login");
            await this.currentRoute.resolve();
            this.emit("resolved");
        }
    }

    redirect(url) { }

    getRouteTitle(pathname) {
        let tmp = pathname.split("/");
        return tmp[1];
    }
}

