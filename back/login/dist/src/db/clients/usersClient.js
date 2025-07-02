"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
var pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: "qkpostgres",
    host: "localhost",
    database: "users",
    password: "1234",
    port: "5432",
});
