"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
var staticPath = "/home/ayberk/qk/constructor/front/entryPoint/public";
router.get('/', function (req, res, next) {
    // res.sendFile(`${staticPath}/index.html`);
    //   console.log(req);
    // res.setHeader("Content-type")
    //   res.sendStatus(418);
    // res.sendFile(`${staticPath}/${}`)
    console.log(req.url);
    res.sendStatus(418);
});
exports.default = router;
