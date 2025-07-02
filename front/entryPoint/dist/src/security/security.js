"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCookie = initCookie;
exports.getCsrf = getCsrf;
var crypto_1 = __importDefault(require("crypto"));
function initCookie() {
    var expiry = Date.now() + 1 * 60 * 60 * 1000;
    var token = crypto_1.default.randomBytes(32).toString();
    var csrf = getCsrf();
    return { token: token, csrf: csrf, values: { expiry: expiry } };
}
function getCsrf() {
    return crypto_1.default.randomBytes(32).toString();
}
