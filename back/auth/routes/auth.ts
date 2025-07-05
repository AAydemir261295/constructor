import { Router } from 'express';
import { getCredentials } from '../src/db/cookie';
import { getCsrf } from '../src/db/csrf';

var router = Router();

router.get('/:csrf', async function (req, res, next) {
    let clientCookie = req.cookies;
    let clientCsrf = req.params.csrf;
    let timeStamp = Date.now();
    let cookieIsExist = await getCredentials(clientCookie.token, timeStamp);
    if (cookieIsExist.length == 1) {
        let serverCookie = cookieIsExist[0];
        let serverCsrf = await getCsrf(serverCookie.token, timeStamp);
        if (serverCsrf.length == 1) {
            if (clientCsrf == serverCsrf[0].csrf) {
                if (serverCookie.value.hasOwnProperty("userId")) {
                    // res.redirect("/home");
                    console.log("HERE");
                    res.send({ result: true });
                } else {
                    console.log("HERE!!!!!!!!!!!");

                    res.send({ result: false });
                }
            } else {
                res.sendStatus(404);
            }
        } else {
            res.sendStatus(404);
        }
    } else {
        console.log("here");
        res.send({ result: false });
    }
});


export default router;
