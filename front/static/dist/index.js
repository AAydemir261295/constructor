"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var routes_1 = __importDefault(require("./routes"));
var register_1 = __importDefault(require("./routes/register"));
var home_1 = __importDefault(require("./routes/home"));
var app = (0, express_1.default)();
var port = 3001;
var corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static("public"));
app.use("/login", routes_1.default);
// app.use("/login", loginRoute);
app.use("/register", register_1.default);
app.use("/home", home_1.default);
app.listen(port, function () { return console.log("Running on port ".concat(port)); });
