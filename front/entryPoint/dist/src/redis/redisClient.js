"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redis_1 = __importDefault(require("redis"));
// import { createClient } from 'redis';
var client = redis_1.default.createClient();
// var client = createClient();
client.connect();
exports.default = client;
// const client = createClient({
// url: 'redis://localhost:6379' // Or your Redis server URL
// });
// client.on('error', (err) => console.log('Redis Client Error', err));
// await client.connect();
