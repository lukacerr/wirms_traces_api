"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const envConfig_1 = __importDefault(require("configuration/envConfig"));
const notFoundMiddleware_1 = __importDefault(require("middlewares/notFoundMiddleware"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
const ROUTING_DIRS = `${path_1.default.resolve(process.cwd(), './controllers')}/`;
const ROUTE_PREFIX = `${(0, envConfig_1.default)('ROUTE_PREFIX')}/`;
fs_1.default.readdir(ROUTING_DIRS, async (e, files) => {
    if (e)
        throw e;
    for await (const f of files) {
        Promise.resolve().then(() => __importStar(require(ROUTING_DIRS + f.slice(0, f.indexOf('.'))))).then((r) => app.use(`/${ROUTE_PREFIX}${r.default.customPath ?? f.slice(0, f.indexOf('Controller'))}`, r.default.router));
    }
    app.use(notFoundMiddleware_1.default);
});
exports.PORT = Number((0, envConfig_1.default)('PORT'));
exports.default = app;
