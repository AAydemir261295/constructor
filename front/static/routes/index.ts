import { Router } from 'express';
import { csrf } from '../src/middlewares/csrf';
import { loginElements } from '../src/elements/loginElements';

var router = Router();


router.get('/:csrf', csrf, async function (req, res, next) {
  res.send(JSON.stringify({ elements: loginElements, csrf: req['newCsrf'] }));
});


export default router;
