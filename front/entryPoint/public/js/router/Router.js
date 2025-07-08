import { EventEmitter } from "/js/libs/eventEmitter/EventEmitter.js";
import Route from "/js/router/Route.js";
import { AuthGuard } from "/js/libs/guards/AuthGuard.js";
import { getRouteTitle } from "/js/router/libs/getRouteTitle.js";
import { Modules } from "/js/libs/Modules/Modules.js";


const notLoginedPaths = [
    "/", "/login", "/register",
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
        this.pathname = this.resolvePath(pathname);
        this.modules = new Modules();
        this.csrf = csrf;
        this.resolveRoute(this.pathname, getRouteTitle(this.pathname));
        this.routeChanges();
    }

    routeChanges() {
        window.addEventListener('popstate', async (event) => {
            const data = event.state;
            if (data.nested) {
                this.currentRoute.editRoute(data);
            } else {
                // let module = this.modules.get(data.path);
                // this.body.innerHTML = "";
                // this.currentRoute = new Route(data.path, getRouteTitle(data.path), this, module);
                // await this.currentRoute.resolve();
            }

            document.title = getRouteTitle(data.path);
        });
    }

    updateHistory(data) {
        history.pushState(data, "", data.path);
        document.title = getRouteTitle(data.path);

    }

    redirect(data) {
        this.updateHistory(data);
        if (data.nested) {
            this.currentRoute.editRoute(data);
        }
    }

    async setRoute(path, title) {
        let module = await this.modules.set(path);
        this.currentRoute = new Route(path, title, this, module.value, this.csrf);
        await this.currentRoute.resolve();
        this.loader.stop();
    }

    resolvePath(path) {
        if (path == "/pincode") {
            path = "/login";
        } else if (path == "/success") {
            path = "/login";
        } else if (path == "/") {
            path = "/login";
        }
        return path;
    }


    async resolveRoute(path, title) {
        let resolvedPath = this.resolvePath(path);

        let isLogined = await this.authGuard.checkAuth();
        if (isLogined) {
            await this.setRoute("/home", title);
            this.currentRoute.updateHistory();
        } else {

            if (!isLogined && notLoginedPaths.indexOf(resolvedPath) == -1) {
                window.location.replace("/login");
            } else {
                if (resolvedPath == "/") {
                    await this.setRoute(resolvedPath, title)
                } else {
                    await this.setRoute(resolvedPath, title)
                }
            }
        }
    }


}

