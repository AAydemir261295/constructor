
export function getRouteTitle(pathName) {

    switch (pathName) {
        case "/login":
            return "Вход";
        case "/register":
            return "Регистрация";
        case "/":
            return "Конструктор";
    }

}