import { Router } from 'express';
import { loginElements } from "../../src/elements/login/loginElements";
import { Security } from '../../src/security';
import { getCredentials, isLogined } from '../../src/db/cookie';
import { getCsrf, isNotExpiried } from '../../src/db/csrf';

var router = Router();
var security = new Security();


router.get('/:csrf', async function (req, res, next) {
  var clientCookies = req.cookies;
  var timeStamp = Date.now();
  if (clientCookies) {
    var clientCsrf = req.params.csrf;
    console.log(clientCsrf);
    console.log("clientCsrf");

    var cookieIsExist = await getCredentials(clientCookies.token, timeStamp);
    if (cookieIsExist.length == 1) {
      var serverCookies = cookieIsExist[0];
      let storedCsrf = await isNotExpiried(clientCsrf, timeStamp);
      if (storedCsrf.length > 0) {
        let serverCsrf = storedCsrf[0].csrf;
        if (clientCsrf == serverCsrf) {
          let newCsrf = await security.updateCsrf(serverCookies.token);
          console.log(newCsrf);
          console.log("newCsrf");

          if (newCsrf) {
            res.send(JSON.stringify({ elements: loginElements, csrf: newCsrf.csrf }));
          } else {
            res.send({ result: false });
          }
        } else {
          console.log(1);
          res.sendStatus(404);
        }
      } else {
        console.log(2);

        res.sendStatus(404);
      }
    } else {
      console.log(3);

      res.sendStatus(404);
    }
  } else {
    console.log(4);

    res.sendStatus(404);
  }
});


export default router;
