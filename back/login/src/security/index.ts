import crypto from "crypto";
import { updateCsrf } from "../db/repos/csrfRepo";
import { tokenIsExist, updateCredentials } from "../db/repos/cookieRepo";


export async function initAuthorizedCookie(oldToken, userId) {
    let expiry = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    let token = getToken();
    let tokenNotExist = await tokenIsExist(token, Date.now());
    if (tokenNotExist) {
        let isSaved = await updateCredentials(oldToken, token, { expiry: expiry.getTime(), userId: userId });
        if (isSaved) {
            return { token: token, values: { expiry: expiry } };
        } else {
            return false;
        }
    } else {
        this.initCookie();
    }
};


function getToken() {
    return crypto.randomBytes(32).toString("hex");
}


export class Security {

    constructor() { }

    // async initCookie() {
    //     let expiry = this.getExpiry(1);
    //     let token = this.getToken();
    //     let tokenNotExist = await tokenIsExist(token, Date.now());
    //     if (tokenNotExist) {
    //         let isSaved = await setCredentials(token, { expiry: expiry });
    //         if (isSaved) {
    //             return { token: token, values: { expiry: expiry } };
    //         } else {
    //             return false;
    //         }
    //     } else {
    //         this.initCookie();
    //     }
    // }


    // async initCsrf(token) {
    //     let expiry = this.getExpiry(1);
    //     let csrf = this.getCsrf();
    //     let csrfNotExist = await csrfIsExist(csrf);
    //     if (csrfNotExist) {
    //         let isSaved = await setCsrf(token, csrf, expiry);
    //         if (isSaved) {
    //             return { csrf: csrf, expiry: expiry };
    //         } else {
    //             return false;
    //         }
    //     } else {
    //         this.initCsrf(token);
    //     }
    // }



    async updateCsrf(token) {
        let expiry = this.getExpiry(1);
        let csrf = this.getCsrf();
        let isSaved = await updateCsrf(token, csrf, expiry);
        if (isSaved) {
            return { csrf: csrf, expiry: expiry };
        } else {
            return false;
        }
    }

    getPincode() {
        const min = 100000;
        const max = 999999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
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


