"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cookie_1 = require("../src/db/cookie");
var security_1 = require("../src/security");
var router = (0, express_1.Router)();
router.get("/*splat", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var clientCookie, timeStamp, cookie, csrf, serverCookie, newCsrf, cookie, csrf;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clientCookie = req.cookies;
                    timeStamp = Date.now();
                    console.log("asdfasdf");
                    if (!(Object.keys(clientCookie).length === 0)) return [3 /*break*/, 5];
                    return [4 /*yield*/, (0, security_1.initCookie)(timeStamp)];
                case 1:
                    cookie = _a.sent();
                    if (!cookie) return [3 /*break*/, 3];
                    return [4 /*yield*/, (0, security_1.initCsrf)(cookie.token, timeStamp)];
                case 2:
                    csrf = _a.sent();
                    if (csrf) {
                        req['newCsrf'] = csrf.csrf;
                        res.cookie("token", cookie.token, { httpOnly: true, expires: cookie.values.expiry });
                        res.render("index", { csrf: csrf.csrf });
                    }
                    else {
                        res.sendStatus(404);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    res.sendStatus(404);
                    _a.label = 4;
                case 4: return [3 /*break*/, 12];
                case 5: return [4 /*yield*/, (0, cookie_1.getCredentials)(clientCookie.token, timeStamp)];
                case 6:
                    serverCookie = _a.sent();
                    if (!(serverCookie.length == 1)) return [3 /*break*/, 8];
                    return [4 /*yield*/, (0, security_1.updateCsrf)(serverCookie[0].token, timeStamp)];
                case 7:
                    newCsrf = _a.sent();
                    if (newCsrf) {
                        res.render("index", { csrf: newCsrf.csrf });
                    }
                    else {
                        res.sendStatus(404);
                    }
                    return [3 /*break*/, 12];
                case 8: return [4 /*yield*/, (0, security_1.initCookie)(timeStamp)];
                case 9:
                    cookie = _a.sent();
                    if (!cookie) return [3 /*break*/, 11];
                    return [4 /*yield*/, (0, security_1.initCsrf)(cookie.token, timeStamp)];
                case 10:
                    csrf = _a.sent();
                    if (csrf) {
                        res.cookie("token", cookie.token, { httpOnly: true, expires: cookie.values.expiry });
                        res.render("index", { csrf: csrf.csrf });
                    }
                    else {
                        res.sendStatus(404);
                    }
                    return [3 /*break*/, 12];
                case 11:
                    res.sendStatus(404);
                    _a.label = 12;
                case 12: return [2 /*return*/];
            }
        });
    });
});
exports.default = router;
