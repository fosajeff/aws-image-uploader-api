"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMiddleware = (error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";
    res.status(status).send({ status: false, message });
};
exports.default = errorMiddleware;
