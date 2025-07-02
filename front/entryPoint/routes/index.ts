import { Router } from 'express';
import { getCredentials, isLogined, setCredentials } from '../src/db/cookie';
import { Security } from "../src/security";

var router = Router();
var security = new Security();


router.get('/', async function (req, res, next) {
    res.header("Cache-control", "no-cache");
    if (Object.keys(req.cookies).length === 0) {
        console.log("here");

        let cookie = await security.initCookie();
        if (cookie) {
            let csrf = await security.initCsrf(cookie.token);
            if (csrf) {
                res.cookie("token", cookie.token, { httpOnly: true });
                res.render("index", { csrf: csrf.csrf });
            } else {
                res.sendStatus(404);
            }
        } else {
            res.sendStatus(404);
        }
    } else {
        let timeStamp = Date.now();
        let clientCookie = req.cookies;
        let cookieIsExist = await isLogined(clientCookie.token, timeStamp);
        if (cookieIsExist.length == 1) {
            res.redirect('/home');
        } else {
            let serverCookie = await getCredentials(clientCookie.token, timeStamp);
            if (serverCookie.length == 1) {
                let newCsrf = await security.updateCsrf(serverCookie[0].token);
                if (newCsrf) {
                    res.render("index", { csrf: newCsrf.csrf });
                } else {
                    res.sendStatus(404);
                }
            } else {
                let cookie = await security.initCookie();
                if (cookie) {
                    let csrf = await security.initCsrf(cookie.token);
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
    }
});


router.get('/login', async function (req, res, next) {
    res.header("Cache-control", "no-cache");

    console.log('here');
    if (Object.keys(req.cookies).length === 0) {
        let cookie = await security.initCookie();
        if (cookie) {
            let csrf = await security.initCsrf(cookie.token);
            console.log(csrf);
            console.log("csrf1");

            if (csrf) {
                res.cookie("token", cookie.token, { httpOnly: true });
                res.render("index", { csrf: csrf.csrf });
            } else {
                res.sendStatus(404);
            }
        } else {
            res.sendStatus(404);
        }
    } else {
        let timeStamp = Date.now();
        let clientCookie = req.cookies;
        let cookieIsExist = await isLogined(clientCookie.token, timeStamp);
        if (cookieIsExist.length == 1) {
            res.redirect('/home');
        } else {
            let serverCookie = await getCredentials(clientCookie.token, timeStamp);
            if (serverCookie.length == 1) {
                let newCsrf = await security.updateCsrf(serverCookie[0].token);
                console.log(newCsrf);
                console.log("newCsrf");
                if (newCsrf) {
                    res.render("index", { csrf: newCsrf.csrf });
                } else {
                    res.sendStatus(404);
                }
            } else {
                let cookie = await security.initCookie();
                if (cookie) {
                    let csrf = await security.initCsrf(cookie.token);
                    console.log(csrf);
                    console.log("csrf2");
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
    }
});


export default router;
