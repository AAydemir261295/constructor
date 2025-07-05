import { EventEmitter } from "/js/libs/eventEmitter/EventEmitter.js";
import Route from "/js/router/Route.js";
import { AuthGuard } from "/js/libs/guards/AuthGuard.js";
import { getRouteTitle } from "/js/router/libs/getRouteTitle.js";
import { Modules } from "/js/libs/Modules/Modules.js";




export class Router extends EventEmitter {

    // localStorage;
    cached;
    currentRoute;
    authGuard;
    body;
    modules;


    constructor(pathname, loader) {
        super();
        this.loader = loader;
        this.authGuard = new AuthGuard();
        this.body = document.querySelector(".body");
        this.pathname = pathname;
        this.modules = new Modules();

        // this.localStorage = new LocalStorage();
        // this.cached = this.local.getItem(this.pathname);

        this.resolvePath(pathname, getRouteTitle(pathname));
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

    redirect(data, isNestedRoute) {
        if (!isNestedRoute) {
            this.resolvePath(data.path, getRouteTitle(data.path));
        } else {
            history.pushState(data, "", data.path);
            document.title = getRouteTitle(data.path);
        }
    }

    async setRoute(path, title) {
        let module = await this.modules.set(path);
        this.currentRoute = new Route(path, title, this, module.value);
        await this.currentRoute.resolve();
        this.loader.stop();
    }

    async resolvePath(path, title) {
        let isLogined = await this.authGuard.checkAuth();
        if (isLogined) {
            this.setRoute("/home", title)
        } else {
            if (path == "/") {
                this.setRoute("/login", title)
            } else {
                this.setRoute(path, title)
            }
        }
    }


}

