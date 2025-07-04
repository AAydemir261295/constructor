import { Router } from 'express';
import { setPincodeByEmail } from '../src/db/repos/usersRepo';
import { Security } from '../src/security';
import { csrf } from '../src/middlewares/csrf';

var router = Router();
var security = new Security();


router.get('/:csrf/:email', csrf, async function (req, res, next) {

    if (req.hasOwnProperty("newCsrf")) {
        let email = req.params.email;
        let pincode = security.getPincode();
        let isPincodeSaved = await setPincodeByEmail(email, { pincode: pincode })
        if (isPincodeSaved) {
            res.send(JSON.stringify({ result: true, csrf: req['newCsrf'] }))
        } else {
            res.send(JSON.stringify({ result: false, csrf: req['newCsrf'] }))
        }
    } else {
        console.log("here2");
        res.sendStatus(404);
    }

});



export default router;
