import { NextFunction, Request, Response } from "express";
import { initCookie, initCsrf } from "../security";


export async function firstVisitCookie(req: Request, res: Response, next: NextFunction) {

    // if (Object.keys(req.cookies).length === 0) {
    //     // let cookie = await initCookie();
    //     if (cookie) {
    //         // let csrf = await initCsrf(cookie.token);
    //         if (csrf) {
    //             console.log("M");
    //             req['newCsrf'] = csrf.csrf;
    //             res.cookie("token", cookie.token, { httpOnly: true, expires: cookie.values.expiry });
    //             next();
    //             // res.render("index", { csrf: csrf.csrf });
    //         } else {
    //             next();
    //             // res.sendStatus(404);
    //         }
    //     } else {
    //         next();
    //         // res.sendStatus(404);
    //     }
    // } else {
    //     next();
    // }
}