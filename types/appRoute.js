"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sender_1 = require("common/sender");
const express_1 = __importDefault(require("express"));
const httpCodes_1 = __importDefault(require("utils/httpCodes"));
class AppRoute {
    customPath;
    router;
    constructor(settings = undefined) {
        this.customPath = settings?.customPath;
        this.router = express_1.default.Router(settings?.routerOptions);
    }
    static getRoute(s) {
        const path = s.path?.trim() ?? '/';
        return `${path.startsWith('/') ? '' : '/'}${path}`;
    }
    async GetMethod(f, s = {}) {
        this.router.get(AppRoute.getRoute(s), async (req, res) => (0, sender_1.Execute)(req, res, f));
    }
    async PostMethod(f, s = {}) {
        this.router.post(AppRoute.getRoute(s), async (req, res) => (0, sender_1.Execute)(req, res, f, httpCodes_1.default.CREATED));
    }
    async DeleteMethod(f, s = {}) {
        this.router.delete(AppRoute.getRoute(s), async (req, res) => (0, sender_1.Execute)(req, res, f, httpCodes_1.default.NO_CONTENT));
    }
    async PutMethod(f, s = {}) {
        this.router.put(AppRoute.getRoute(s), async (req, res) => (0, sender_1.Execute)(req, res, f));
    }
}
exports.default = AppRoute;
