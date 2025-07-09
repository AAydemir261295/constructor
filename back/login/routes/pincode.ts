import { Router } from 'express';
import { initAuthorizedCookie } from '../src/security';
import { comparePincode } from '../src/db/repos/usersRepo';
import { csrf } from '../src/middlewares/csrf';

var router = Router();


router.get('/:csrf/:email/:pincode', csrf, async function (req, res, next) {

    if (req.hasOwnProperty("newCsrf")) {
        let email = req.params.email;
        let pincode = req.params.pincode;
        let token = req.cookies.token;
        let isEqual = await comparePincode(email, +pincode)

        if (isEqual.length == 1) {
            let userId = isEqual[0].id;
            let newToken = await initAuthorizedCookie(token, userId);

            if (newToken) {
                res.cookie("token", newToken.token, { httpOnly: true, expires: newToken.values.expiry });
                res.cookie("userId", userId, { httpOnly: true, expires: newToken.values.expiry });
                res.send(JSON.stringify({ result: true, csrf: req['newCsrf'] }))
            } else {
                console.log("here22222");
                res.send(JSON.stringify({ result: false, csrf: req['newCsrf'], error: "new token error" }))
            }
        } else {
            res.send(JSON.stringify({ result: false, csrf: req['newCsrf'] }))
        }
    } else {
        console.log("here2");
        res.sendStatus(404);
    }
});




export default router;
