import { Csrf } from "/js/libs/csrf/Csrf.js";
import { request } from "/js/libs/request/fetch.js";

const urls = {
    auth: (csrf) => `http://localhost:4001/auth/${csrf}`,
}

export class AuthGuard {

    constructor() { }

    async checkAuth() {
        let csrf = new Csrf();
        let isLogined = await request(urls.auth(csrf.get()));
        return isLogined ? isLogined.result : false;
    }
}