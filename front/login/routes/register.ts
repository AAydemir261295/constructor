import { Router } from 'express';
import { csrf } from '../src/middlewares/csrf';
import { registerElements } from '../src/elements/registerElements';

var router = Router();


router.get('/:csrf', csrf, async function (req, res, next) {
    console.log("here??");
    res.send(JSON.stringify({ elements: registerElements, csrf: req['newCsrf'] }));
});


export default router;
