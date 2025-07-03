import { Router } from 'express';
import { updateCredentials } from '../src/db/repos/cookieRepo';
import { createUser } from '../src/db/repos/usersRepo';
import { Security } from '../src/security';
import { csrf } from '../src/middlewares/csrf';

var router = Router();
var security = new Security();


router.get('/:csrf/:email', csrf, async function (req, res, next) {
    console.log(req.params);
    if (req.hasOwnProperty("newCsrf")) {
        let email = req.params.email;
        var isCreated = await createUser({ email: email, data: {} });
        if (isCreated.length == 1) {
            res.send(JSON.stringify({ result: true, csrf: req["newCsrf"] }))
        } else {
            res.send(JSON.stringify({ result: false, csrf: req["newCsrf"], error: "email error" }));
        }
    } else {
        console.log("here2");
        res.sendStatus(404);
    }

});




export default router;
