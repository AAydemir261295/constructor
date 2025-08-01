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
exports.isNotExpiried = isNotExpiried;
exports.csrfIsExist = csrfIsExist;
exports.setCsrf = setCsrf;
exports.updateCsrf = updateCsrf;
exports.getCsrf = getCsrf;
var client_1 = require("./client");
var queries = {
    setCsrf: "INSERT INTO csrf(token, csrf, expiry) VALUES($1, $2, $3)",
    checkIfExist: "SELECT csrf FROM csrf WHERE csrf = $1",
    isNotExpiried: "SELECT csrf from csrf where csrf = $1 and expiry > $2",
    updateCsrf: "UPDATE csrf SET csrf = $1, expiry = $2 WHERE token = $3",
    selectByToken: "SELECT csrf, expiry FROM csrf WHERE token = $1 AND expiry > $2",
};
function isNotExpiried(csrf, expiry) {
    return __awaiter(this, void 0, void 0, function () {
        var result, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client_1.pool.query(queries.isNotExpiried, [csrf, expiry])];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.rows];
                case 2:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function csrfIsExist(csrf) {
    return __awaiter(this, void 0, void 0, function () {
        var result, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client_1.pool.query(queries.checkIfExist, [csrf])];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.rows.length == 0];
                case 2:
                    err_2 = _a.sent();
                    console.log(err_2);
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function setCsrf(token, csrf, expiry) {
    return __awaiter(this, void 0, void 0, function () {
        var result, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client_1.pool.query(queries.setCsrf, [token, csrf, expiry])];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    err_3 = _a.sent();
                    console.log(err_3);
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function updateCsrf(token, csrf, expiry) {
    return __awaiter(this, void 0, void 0, function () {
        var result, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client_1.pool.query(queries.updateCsrf, [csrf, expiry, token])];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    err_4 = _a.sent();
                    console.log(err_4);
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getCsrf(token, expiry) {
    return __awaiter(this, void 0, void 0, function () {
        var result, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client_1.pool.query(queries.selectByToken, [token, expiry])];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.rows];
                case 2:
                    err_5 = _a.sent();
                    console.log(err_5);
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
