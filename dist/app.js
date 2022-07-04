"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const error_middleware_1 = __importDefault(require("./src/utils/error.middleware"));
class App {
    constructor(controllers, port) {
        this.express = (0, express_1.default)();
        this.port = port;
        this.initialiseMiddleware();
        this.intialiseControllers(controllers);
        this.initialiseErrorMiddleware();
    }
    initialiseMiddleware() {
        this.express.use((0, cors_1.default)());
        this.express.use(express_1.default.json());
        this.express.use(express_1.default.urlencoded({ extended: false }));
    }
    intialiseControllers(controllers) {
        controllers.forEach((controller) => {
            this.express.use("/api", controller.router);
        });
    }
    initialiseErrorMiddleware() {
        this.express.use(error_middleware_1.default);
    }
    listen() {
        this.express.listen(this.port, () => console.log(`Server running on PORT ${this.port}`));
    }
}
exports.default = App;
