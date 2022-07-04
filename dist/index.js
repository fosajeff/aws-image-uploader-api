"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const upload_controller_1 = __importDefault(require("./src/resources/upload.controller"));
const app_1 = __importDefault(require("./app"));
const app = new app_1.default([new upload_controller_1.default()], Number(process.env.PORT) || 4040);
app.listen();
app.express.get("/", (req, res) => {
    res.send({ status: true, message: "Server up" });
});
