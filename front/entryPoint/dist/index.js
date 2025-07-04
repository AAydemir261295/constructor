"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var otherRoutes_1 = __importDefault(require("./routes/otherRoutes"));
var staticPath = "/home/ayberk/qk/constructor/front/entryPoint/public";
var app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(staticPath));
// app.use("/", indexRoute);
app.get("/", function (req, res) {
    console.log(req.url);
    console.log("req.url2222");
    res.redirect('/login');
});
app.use("/favicon.ico", function (req, res, next) {
    res.sendStatus(200);
});
app.use("/", otherRoutes_1.default);
app.listen(3000, function () { return console.log("Running on port ".concat(3000)); });
