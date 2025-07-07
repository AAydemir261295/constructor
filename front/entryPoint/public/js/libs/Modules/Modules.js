

const moduleUrls = {
    "/login": "http://localhost:3001/js/pages/login/LoginPage.js",
    "/register": "http://localhost:3001/js/pages/login/LoginPage.js",
    "/home": "http://localhost:3001/js/pages/home/HomePage.js",
}

export class Modules {
    constructor() { }

    modules = [];


    get(path) {
        let modulePath = this.resolvePath(path);
        return this.modules.find((v) => v.path == modulePath).value;
    }

    async set(path) {
        let tmp = await import(moduleUrls[path])
        let module = tmp[this.getModuleName(path)];
        let temp = { path: this.resolvePath(path), value: module };
        this.modules.push(temp);
        return temp;
    }


    resolvePath(path) {
        switch (path) {
            case "/register":
                return "/login";
            default:
                return path;
        }
    }

    getModuleName(path) {
        if (path == "/register") {
            let prefix = "/login".substring(1, 2).toUpperCase() + "/login".substring(2, "/login".length);
            return `${prefix}Page`;
        } else {
            let prefix = path.substring(1, 2).toUpperCase() + path.substring(2, path.length);
            return `${prefix}Page`
        }
    }


}