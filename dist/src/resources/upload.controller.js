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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = require("express");
const http_exception_1 = __importDefault(require("../utils/http.exception"));
const multer_1 = __importDefault(require("../utils/multer"));
class UploadController {
    constructor() {
        this.router = (0, express_1.Router)();
        this.path = "/upload";
        this.initialiseRoutes();
    }
    initialiseRoutes() {
        this.router.post(this.path, multer_1.default.single("image"), this.upload);
    }
    upload(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.file) {
                return next(new http_exception_1.default(400, "Could not upload file"));
            }
            else {
                res.send({
                    imageUrl: path_1.default.resolve(req.file.path),
                });
            }
        });
    }
}
exports.default = UploadController;
