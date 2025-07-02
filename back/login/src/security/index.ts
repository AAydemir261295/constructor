import crypto from "crypto";
import { NextFunction, Request, Response } from "express";
import { getCredentials, } from "../db/repos/cookieRepo";
import { getCsrf, updateCsrf } from "../db/repos/csrfRepo";

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

    async compareCsrf(req: Request, res: Response, next: NextFunction) {
        let clientCsrf = req.params.csrf;
        let clientCookie = req.cookies;
        console.log(clientCookie);
        console.log("clientCookie");

        let timeStamp = Date.now()
        let tmp1 = await getCredentials(clientCookie.token, timeStamp);
        let tmp = await getCsrf(clientCookie.token, timeStamp);
        console.log(tmp);
        console.log("tmp");

        console.log(tmp1);
        console.log("tmp1");


        if (tmp.length == 1 && tmp1.length == 1) {
            let serverCsrf = tmp[0].csrf;
            console.log(tmp);
            console.log("tmp");

            console.log(serverCsrf)
            console.log("serverCsrf")
            console.log(clientCsrf);
            console.log("clientCsrf");

            let serverCookies = tmp1[0];
            if (serverCsrf == clientCsrf) {

                let expiry = Date.now() + 1 * 60 * 60 * 1000;
                let csrf = crypto.randomBytes(32).toString("hex");
                let isSaved = await updateCsrf(serverCookies.token, csrf, expiry);
                if (isSaved) {
                    req["newCsrf"] = csrf;
                    console.log("1");
                    next()
                } else {
                    next()
                }
            } else {
                console.log("2");
                next();
            }
        } else {
            console.log("3");
            next();
        }
    }

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


