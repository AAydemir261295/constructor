
const modules = {
    login: ["LoginPage", "LoginForm", "RegisterForm"]
}

export class PageRouter {
    constructor(pathname, loader, csrf, modules) {
        this.pathname = pathname;
        this.loader = loader;
        this.csrf = csrf;
        this.modules = modules;
    }

    modules;
    pathname;
    loader;
    csrf;

    redirect() { }


    nestedRedirect() { }


    async setRoute(path,) {
        // let module = await this.modules.set(path);
        // this.currentRoute = new Route(path, title, this, module.value, this.csrf);
        // await this.currentRoute.resolve();
        // this.loader.stop();
    }

}