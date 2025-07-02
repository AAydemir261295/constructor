import { Router } from 'express';
import { setPincodeByEmail } from '../src/db/repos/usersRepo';
import { Security } from '../src/security';

var router = Router();
var security = new Security();


router.get('/:csrf/:email', security.compareCsrf, async function (req, res, next) {

    if (req.hasOwnProperty("newCsrf")) {
        let email = req.params.email;
        let pincode = security.getPincode();
        console.log(pincode);
        console.log("pincode");
        let isPincodeSaved = await setPincodeByEmail(email, { pincode: pincode })
        if (isPincodeSaved.length == 1) {
            let userId = isPincodeSaved[0].id;
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
