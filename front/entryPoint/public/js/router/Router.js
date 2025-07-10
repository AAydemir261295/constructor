import Route from "/js/router/Route.js";
import { AuthGuard } from "/js/libs/guards/AuthGuard.js";
import { Modules } from "/js/libs/Modules/Modules.js";
import History from "/js/router/libs/History.js";


const notLoginedPaths = [
    "/", "/login", "/register",
]


export class Router {

    constructor(pathname, loader, csrf) {
        this.loader = loader;
        this.authGuard = new AuthGuard();
        this.history = new History(this.authGuard);
        this.pathname = this.resolvePath(pathname);
        this.modules = new Modules();
        this.csrf = csrf;
        this.resolveRoute(this.pathname);
        this.routeChanges();
    }

    currentRoute;
    authGuard;
    modules;
    pathName;

    routeChanges() {

        this.history.subscribe("back", async (state) => {
            if (state.data.nested) {
                this.currentRoute.editRoute(state.data);
            } else {
                // let path = data.prevPath;
                // let restricted = ["/login", "/register", "/", "/pincode", "/success"];
                // let loginedPaths = ['/home'];
                // if (loginedPaths.includes(data.path) && restricted.includes(data.prevPath)) {
                //     var isLogined = this.authGuard.checkAuth();
                //     if (!isLogined) {
                //         let module = this.modules.get(data.path);
                //         this.currentRoute = new Route(data.path, getRouteTitle(data.path), this, module);
                //         await this.currentRoute.resolve();
                //     } else {

                //     }
                // }
            }
        })

        // window.addEventListener('popstate', async (event) => {
        //     const data = event.state;

        //     console.log(event);
        //     console.log("event");

        //     console.log(data);
        //     console.log("popstate");


        //     if (data.nested) {
        //         this.currentRoute.editRoute(data);
        //     } else {
        //         let path = this.resolvePath(data.path);

        //         if (["/login", "/register"] == path) {
        //             var isLogined = await this.authGuard.checkAuth();
        //             console.log("here11");
        //             if (!isLogined) {
        //                 console.log("here22");
        //                 let module = this.modules.get(data.path);
        //                 this.currentRoute = new Route(data.path, getRouteTitle(data.path), this, module);
        //                 await this.currentRoute.resolve();
        //             }
        //         } else {
        //             console.log("ASD");
        //             let module = this.modules.get(data.path);
        //             this.currentRoute = new Route(data.path, getRouteTitle(data.path), this, module);
        //             await this.currentRoute.resolve();
        //         }
        //     }

        //     document.title = getRouteTitle(data.path);
        // });
    }

    updateHistory(data) {
        this.history.pushState(data)
    }


    redirect(data) {
        if (data.nested) {
            this.updateHistory(data);
            this.currentRoute.editRoute(data);
        } else {
            this.setRoute(data.path)
            this.updateHistory(data);
        }
    }

    permanentRedirect(data) {
        this.setRoute(data.path, this.resolvePath(data.path));
    }

    async setRoute(path) {
        if (this.currentRoute) {
            this.currentRoute.page.hidePage();
        }
        let module = await this.modules.set(path);
        this.currentRoute = new Route(path, this, module.value, this.csrf);
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


    async resolveRoute(path) {
        let isLogined = await this.authGuard.checkAuth();
        if (isLogined) {
            await this.setRoute("/home");
        } else {

            if (path == "/home") {
                await this.setRoute("/login")
            } else {
                await this.setRoute(path)
            }
        }
        // this.loader.stop();

    }


}

