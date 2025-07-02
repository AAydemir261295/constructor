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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Security = void 0;
var crypto_1 = __importDefault(require("crypto"));
var cookie_1 = require("../db/cookie");
var csrf_1 = require("../db/csrf");
var Security = /** @class */ (function () {
    function Security() {
    }
    Security.prototype.initCookie = function () {
        return __awaiter(this, void 0, void 0, function () {
            var expiry, token, tokenNotExist, isSaved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        expiry = this.getExpiry(1);
                        token = this.getToken();
                        return [4 /*yield*/, (0, cookie_1.tokenIsExist)(token, Date.now())];
                    case 1:
                        tokenNotExist = _a.sent();
                        if (!tokenNotExist) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, cookie_1.setCredentials)(token, { expiry: expiry })];
                    case 2:
                        isSaved = _a.sent();
                        if (isSaved) {
                            return [2 /*return*/, { token: token, values: { expiry: expiry } }];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        this.initCookie();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Security.prototype.initCsrf = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var expiry, csrf, csrfNotExist, isSaved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        expiry = this.getExpiry(1);
                        csrf = this.getCsrf();
                        return [4 /*yield*/, (0, csrf_1.csrfIsExist)(csrf)];
                    case 1:
                        csrfNotExist = _a.sent();
                        if (!csrfNotExist) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, csrf_1.setCsrf)(token, csrf, expiry)];
                    case 2:
                        isSaved = _a.sent();
                        if (isSaved) {
                            return [2 /*return*/, { csrf: csrf, expiry: expiry }];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        this.initCsrf(token);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Security.prototype.updateCsrf = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var expiry, csrf, isSaved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        expiry = this.getExpiry(1);
                        csrf = this.getCsrf();
                        return [4 /*yield*/, (0, csrf_1.updateCsrf)(token, csrf, expiry)];
                    case 1:
                        isSaved = _a.sent();
                        if (isSaved) {
                            return [2 /*return*/, { csrf: csrf, expiry: expiry }];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Security.prototype.getExpiry = function (hours) {
        return Date.now() + hours * 60 * 60 * 1000;
    };
    Security.prototype.getCsrf = function () {
        return crypto_1.default.randomBytes(32).toString("hex");
    };
    Security.prototype.getToken = function () {
        return crypto_1.default.randomBytes(32).toString("hex");
    };
    return Security;
}());
exports.Security = Security;
