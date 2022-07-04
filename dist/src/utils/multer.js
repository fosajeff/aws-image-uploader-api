"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const fileStorage = multer_1.default.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./src/uploads");
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + "_" + file.originalname);
    },
});
const fileFilter = (req, file, callback) => {
    if (file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg") {
        callback(null, true);
    }
    else {
        callback(null, false);
    }
};
exports.default = (0, multer_1.default)({ storage: fileStorage, fileFilter: fileFilter });
