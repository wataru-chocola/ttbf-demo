"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const PORT = 8002;
http_1.default
    .createServer((req, res) => {
    if (req.url != null && req.url === "/") {
        res.write("<!DOCTYPE html>");
        res.write("<html><head><title>HELLO</title></head><body><h1>hello</h1></body></html>");
        res.end();
    }
    else {
        res.writeHead(404);
        res.end("Not found");
    }
})
    .listen(PORT);
console.log(`running at http://localhost:${PORT}`);
