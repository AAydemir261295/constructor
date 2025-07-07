import { EventEmitter } from "/js/libs/eventEmitter/EventEmitter.js";
import Route from "/js/router/Route.js";
import { AuthGuard } from "/js/libs/guards/AuthGuard.js";
import { getRouteTitle } from "/js/router/libs/getRouteTitle.js";
import { Modules } from "/js/libs/Modules/Modules.js";


const notLoginedPaths = [
    "/", "/login", "/register"
]


export class Router extends EventEmitter {

    cached;
    currentRoute;
    authGuard;
    body;
    modules;


    constructor(pathname, loader, csrf) {
        super();
        this.loader = loader;
        this.authGuard = new AuthGuard();
        this.body = document.querySelector(".body");
        this.pathname = pathname;
        this.modules = new Modules();
        this.csrf = csrf;
        this.resolveRoute(pathname, getRouteTitle(pathname));
        this.routeChanges();
    }

    routeChanges() {
        window.addEventListener('popstate', async (event) => {
            const data = event.state;
            
            let module = this.modules.get(data.path);
            this.body.innerHTML = "";
            this.currentRoute = new Route(data.path, getRouteTitle(data.path), this, module);
            await this.currentRoute.resolve();
            document.title = getRouteTitle(data.path);
        });
    }

    redirect(data) {
        history.pushState(data, "", data.path);
        document.title = getRouteTitle(data.path);
    }

    async setRoute(path, title) {
        let module = await this.modules.set(path);
        this.currentRoute = new Route(path, title, this, module.value, this.csrf);
        await this.currentRoute.resolve();
        this.loader.stop();
    }


    async resolveNestedRoute(path, title) {

    }


    async resolveRoute(path, title) {
        let isLogined = await this.authGuard.checkAuth();
        if (isLogined) {
            await this.setRoute("/home", title);
            this.currentRoute.updateHistory();
        } else {

            if (!isLogined && notLoginedPaths.indexOf(path) == -1) {
                window.location.replace("/login");
            } else {
                if (path == "/") {
                    await this.setRoute("/login", title)
                } else {
                    await this.setRoute(path, title)
                }
            }
        }
    }


}

