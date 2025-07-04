import { Router } from 'express';
import { homeElements } from "../src/elements/homeElements";
import { csrf } from '../src/middlewares/csrf';

var router = Router();


router.get('/:csrf', csrf, async function (req, res, next) {
    res.send(JSON.stringify({ elements: homeElements, csrf: req['newCsrf'] }));
});


export default router;
