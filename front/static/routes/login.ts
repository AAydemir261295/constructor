import { Router } from 'express';
import { loginElements } from "../src/elements/loginElements";
import { csrf } from '../src/middlewares/csrf';

var router = Router();


router.get('/:csrf', csrf, async function (req, res, next) {
  res.send(JSON.stringify({ elements: loginElements, csrf: req['newCsrf'] }));
});


export default router;
