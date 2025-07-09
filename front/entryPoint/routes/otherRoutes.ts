import { Router } from 'express';
import { getCredentials, } from '../src/db/cookie';
import { initCookie, initCsrf, updateCsrf } from '../src/security';

var router = Router();

router.get("/*splat", async function (req, res, next) {
    let clientCookie = req.cookies;
    let timeStamp = Date.now();
    console.log("asdfasdf");

    if (Object.keys(clientCookie).length === 0) {
        let cookie = await initCookie(timeStamp);
        if (cookie) {
            let csrf = await initCsrf(cookie.token, timeStamp);
            if (csrf) {
                req['newCsrf'] = csrf.csrf;
                res.cookie("token", cookie.token, { httpOnly: true, expires: cookie.values.expiry });
                res.render("index", { csrf: csrf.csrf });
            } else {
                res.sendStatus(404);
            }
        } else {
            res.sendStatus(404);
        }
    } else {
        let serverCookie = await getCredentials(clientCookie.token, timeStamp);
        if (serverCookie.length == 1) {
            let newCsrf = await updateCsrf(serverCookie[0].token, timeStamp);
            if (newCsrf) {
                res.render("index", { csrf: newCsrf.csrf });
            } else {
                res.sendStatus(404);
            }
        } else {
            let cookie = await initCookie(timeStamp);
            if (cookie) {
                let csrf = await initCsrf(cookie.token, timeStamp);
                if (csrf) {
                    res.cookie("token", cookie.token, { httpOnly: true, expires: cookie.values.expiry });
                    res.render("index", { csrf: csrf.csrf });
                } else {
                    res.sendStatus(404);
                }
            } else {
                res.sendStatus(404);
            }
        }
    }
});



export default router;