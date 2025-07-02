"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
var loginElements_1 = require("./loginElements");
var staticPath = "/home/ayberk/qk/constructor/front/entryPoint/public";
router.get('/', function (req, res, next) {
    // res.sendFile(`${staticPath}/index.html`);
    res.send(loginElements_1.loginElements);
});
exports.default = router;
