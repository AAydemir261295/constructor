import { Router } from 'express';
import { getCredentials, isLogined } from '../src/db/cookie';
import { firstVisitCookie } from '../src/middlewares/firstCookie';
import { initCookie, initCsrf, updateCsrf } from '../src/security';

var router = Router();


router.get("/", firstVisitCookie, async function (req, res, next) {

    let timeStamp = Date.now();
    let clientCookie = req.cookies;
    let cookieIsExist = await isLogined(clientCookie.token, timeStamp);
    if (cookieIsExist.length == 1) {
        res.redirect('/home');
    } else {
        let serverCookie = await getCredentials(clientCookie.token, timeStamp);
        if (serverCookie.length == 1) {
            let newCsrf = await updateCsrf(serverCookie[0].token);
            if (newCsrf) {
                res.render("index", { csrf: newCsrf.csrf });
            } else {
                res.sendStatus(404);
            }
        } else {
            let cookie = await initCookie();
            if (cookie) {
                let csrf = await initCsrf(cookie.token);
                if (csrf) {
                    res.cookie("token", cookie.token, { httpOnly: true });
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

router.get("/*splat", firstVisitCookie, async function (req, res, next) {

    let timeStamp = Date.now();
    let clientCookie = req.cookies;
    let cookieIsExist = await isLogined(clientCookie.token, timeStamp);
    if (cookieIsExist.length == 1) {
        res.redirect('/home');
    } else {
        let serverCookie = await getCredentials(clientCookie.token, timeStamp);
        if (serverCookie.length == 1) {
            let newCsrf = await updateCsrf(serverCookie[0].token);
            if (newCsrf) {
                res.render("index", { csrf: newCsrf.csrf });
            } else {
                res.sendStatus(404);
            }
        } else {
            let cookie = await initCookie();
            if (cookie) {
                let csrf = await initCsrf(cookie.token);
                if (csrf) {
                    res.cookie("token", cookie.token, { httpOnly: true });
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
