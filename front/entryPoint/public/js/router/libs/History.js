import EventEmitter from "/js/libs/eventEmitter/EventEmitter.js";

class History extends EventEmitter {


    constructor(authGuard) {
        super();
        this.history = history;
        this.authGuard = authGuard;
        this.popStateListener();
    }

    history;
    states = [];

    popStateListener() {
        window.addEventListener("popstate", async (ev) => {
            let lastState = this.states[this.states.length - 1];
            
            if (lastState.data.nested) {
                if (!["/pincode", "/success"].includes(lastState.data.path)) {
                    this.emit("back", { data: { ...this.states[this.states.length - 2].data, nested: true } });
                } else {
                    this.history.forward();
                }
            } else {
                let loginedPaths = ["/home"];
                let notLoginedPaths = ["/login", "/register"];
                let isLogined = this.authGuard.checkAuth();
                let forwardState = this.states[this.states.length - 2];

                if (loginedPaths.includes(lastState.path) && !isLogined && notLoginedPaths.includes(forwardState.data.path)) {
                    this.emit("back", { data: { ...forwardState.data, nested: false } });
                } else {
                    this.history.forward();
                }
            }
        })

    }


    getRouteTitle(pathName) {
        switch (pathName) {
            case "/login":
                return "Вход";
            case "/pincode":
                return "Вход";
            case "/register":
                return "Регистрация";
            case "/success":
                return "Регистрация";
            case "/":
                return "Конструктор";
            case "/home":
                return "Главная";
        }
    }

    pushState(data) {
        this.states.push({ data: data });
        this.history.pushState({}, "", data.path);
        document.title = this.getRouteTitle(data.path);
    }
}

export default History;