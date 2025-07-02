import { Router } from 'express';
import { Security } from '../src/security';
import { comparePincode } from '../src/db/repos/usersRepo';

var router = Router();
var security = new Security();


router.get('/:csrf/:email/:pincode', security.compareCsrf, async function (req, res, next) {

    if (req.hasOwnProperty("newCsrf")) {
        let email = req.params.email;
        let pincode = req.params.pincode;
        let isEqual = await comparePincode(email, +pincode)

        if (isEqual.length == 1) {
            let userId = isEqual[0].id;

            res.cookie("userId", userId, { httpOnly: true });
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
