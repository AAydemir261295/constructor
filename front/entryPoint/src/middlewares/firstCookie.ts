import { NextFunction, Request, Response } from "express";
import { initCookie, initCsrf } from "../security";


export async function firstVisitCookie(req: Request, res: Response, next: NextFunction) {

    if (Object.keys(req.cookies).length === 0) {
        let cookie = await initCookie();
        if (cookie) {
            let csrf = await initCsrf(cookie.token);
            if (csrf) {
                res.cookie("token", cookie.token, { httpOnly: true });
                req['newCsrf'] = csrf.csrf;
                res.render("index", { csrf: csrf.csrf });
            } else {
                res.sendStatus(404);
            }
        } else {
            res.sendStatus(404);
        }
    } else {
        next();
    }
}