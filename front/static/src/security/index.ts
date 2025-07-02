import crypto from "crypto";
import { setCredentials, tokenIsExist } from "../db/cookie";
import { csrfIsExist, setCsrf, updateCsrf } from "../db/csrf";

export class Security {
    constructor() { }

    async initCookie() {
        let expiry = this.getExpiry(1);
        let token = this.getToken();
        let tokenNotExist = await tokenIsExist(token, Date.now());
        if (tokenNotExist) {
            let isSaved = await setCredentials(token, { expiry: expiry });
            if (isSaved) {
                return { token: token, values: { expiry: expiry } };
            } else {
                return false;
            }
        } else {
            this.initCookie();
        }
    }


    async initCsrf(token) {
        let expiry = this.getExpiry(1);
        let csrf = this.getCsrf();
        let csrfNotExist = await csrfIsExist(csrf);
        if (csrfNotExist) {
            let isSaved = await setCsrf(token, csrf, expiry);
            if (isSaved) {
                return { csrf: csrf, expiry: expiry };
            } else {
                return false;
            }
        } else {
            this.initCsrf(token);
        }
    }


    async updateCsrf(token: string) {
        let expiry = this.getExpiry(1);
        let csrf = this.getCsrf();
        let isSaved = await updateCsrf(token, csrf, expiry);
        if (isSaved) {
            return { csrf: csrf, expiry: expiry };
        } else {
            return false;
        }
    }


    getExpiry(hours: number) {
        return Date.now() + hours * 60 * 60 * 1000;
    }

    getCsrf() {
        return crypto.randomBytes(32).toString("hex");
    }

    getToken() {
        return crypto.randomBytes(32).toString("hex");
    }


}


