import { NextFunction, Request, Response } from "express";
import crypto from "crypto";
import { getCredentials } from "../db/cookie";



export async function csrf(req: Request, res: Response, next: NextFunction) {
    let clientCsrf = req.params.csrf;
    let clientCookie = req.cookies;


    let timeStamp = Date.now()
    let tmp1 = await getCredentials(clientCookie.token, timeStamp);
    // let tmp = await getCsrf(clientCookie.token, timeStamp);

    // if (tmp.length == 1 && tmp1.length == 1) {
    //     let serverCsrf = tmp[0].csrf;

    //     let serverCookies = tmp1[0];
    //     if (serverCsrf == clientCsrf) {

    //         let expiry = Date.now() + 1 * 60 * 60 * 1000;
    //         let csrf = crypto.randomBytes(32).toString("hex");
    //         // let isSaved = await updateCsrf(serverCookies.token, csrf, expiry);
    //         if (isSaved) {
    //             req["newCsrf"] = csrf;
    //             next()
    //         } else {
    //             next()
    //         }
    //     } else {
    //         next();
    //     }
    // } else {
    //     next();
    // }
}