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
var security = new security_1.Security();
router.get('/', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var cookie, csrf, timeStamp, clientCookie, cookieIsExist, serverCookie, newCsrf, cookie, csrf;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res.header("Cache-control", "no-cache");
                    if (!(Object.keys(req.cookies).length === 0)) return [3 /*break*/, 5];
                    console.log("here");
                    return [4 /*yield*/, security.initCookie()];
                case 1:
                    cookie = _a.sent();
                    if (!cookie) return [3 /*break*/, 3];
                    return [4 /*yield*/, security.initCsrf(cookie.token)];
                case 2:
                    csrf = _a.sent();
                    if (csrf) {
                        res.cookie("token", cookie.token, { httpOnly: true });
                        res.render("index", { csrf: csrf.csrf });
                    }
                    else {
                        res.sendStatus(404);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    res.sendStatus(404);
                    _a.label = 4;
                case 4: return [3 /*break*/, 14];
                case 5:
                    timeStamp = Date.now();
                    clientCookie = req.cookies;
                    return [4 /*yield*/, (0, cookie_1.isLogined)(clientCookie.token, timeStamp)];
                case 6:
                    cookieIsExist = _a.sent();
                    if (!(cookieIsExist.length == 1)) return [3 /*break*/, 7];
                    res.redirect('/home');
                    return [3 /*break*/, 14];
                case 7: return [4 /*yield*/, (0, cookie_1.getCredentials)(clientCookie.token, timeStamp)];
                case 8:
                    serverCookie = _a.sent();
                    if (!(serverCookie.length == 1)) return [3 /*break*/, 10];
                    return [4 /*yield*/, security.updateCsrf(serverCookie[0].token)];
                case 9:
                    newCsrf = _a.sent();
                    if (newCsrf) {
                        res.render("index", { csrf: newCsrf.csrf });
                    }
                    else {
                        res.sendStatus(404);
                    }
                    return [3 /*break*/, 14];
                case 10: return [4 /*yield*/, security.initCookie()];
                case 11:
                    cookie = _a.sent();
                    if (!cookie) return [3 /*break*/, 13];
                    return [4 /*yield*/, security.initCsrf(cookie.token)];
                case 12:
                    csrf = _a.sent();
                    if (csrf) {
                        res.cookie("token", cookie.token, { httpOnly: true });
                        res.render("index", { csrf: csrf.csrf });
                    }
                    else {
                        res.sendStatus(404);
                    }
                    return [3 /*break*/, 14];
                case 13:
                    res.sendStatus(404);
                    _a.label = 14;
                case 14: return [2 /*return*/];
            }
        });
    });
});
router.get('/login', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var cookie, csrf, timeStamp, clientCookie, cookieIsExist, serverCookie, newCsrf, cookie, csrf;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res.header("Cache-control", "no-cache");
                    console.log('here');
                    if (!(Object.keys(req.cookies).length === 0)) return [3 /*break*/, 5];
                    return [4 /*yield*/, security.initCookie()];
                case 1:
                    cookie = _a.sent();
                    if (!cookie) return [3 /*break*/, 3];
                    return [4 /*yield*/, security.initCsrf(cookie.token)];
                case 2:
                    csrf = _a.sent();
                    console.log(csrf);
                    console.log("csrf1");
                    if (csrf) {
                        res.cookie("token", cookie.token, { httpOnly: true });
                        res.render("index", { csrf: csrf.csrf });
                    }
                    else {
                        res.sendStatus(404);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    res.sendStatus(404);
                    _a.label = 4;
                case 4: return [3 /*break*/, 14];
                case 5:
                    timeStamp = Date.now();
                    clientCookie = req.cookies;
                    return [4 /*yield*/, (0, cookie_1.isLogined)(clientCookie.token, timeStamp)];
                case 6:
                    cookieIsExist = _a.sent();
                    if (!(cookieIsExist.length == 1)) return [3 /*break*/, 7];
                    res.redirect('/home');
                    return [3 /*break*/, 14];
                case 7: return [4 /*yield*/, (0, cookie_1.getCredentials)(clientCookie.token, timeStamp)];
                case 8:
                    serverCookie = _a.sent();
                    if (!(serverCookie.length == 1)) return [3 /*break*/, 10];
                    return [4 /*yield*/, security.updateCsrf(serverCookie[0].token)];
                case 9:
                    newCsrf = _a.sent();
                    console.log(newCsrf);
                    console.log("newCsrf");
                    if (newCsrf) {
                        res.render("index", { csrf: newCsrf.csrf });
                    }
                    else {
                        res.sendStatus(404);
                    }
                    return [3 /*break*/, 14];
                case 10: return [4 /*yield*/, security.initCookie()];
                case 11:
                    cookie = _a.sent();
                    if (!cookie) return [3 /*break*/, 13];
                    return [4 /*yield*/, security.initCsrf(cookie.token)];
                case 12:
                    csrf = _a.sent();
                    console.log(csrf);
                    console.log("csrf2");
                    if (csrf) {
                        res.cookie("token", cookie.token, { httpOnly: true });
                        res.render("index", { csrf: csrf.csrf });
                    }
                    else {
                        res.sendStatus(404);
                    }
                    return [3 /*break*/, 14];
                case 13:
                    res.sendStatus(404);
                    _a.label = 14;
                case 14: return [2 /*return*/];
            }
        });
    });
});
exports.default = router;
