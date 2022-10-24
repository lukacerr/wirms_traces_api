"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appRoute_1 = __importDefault(require("types/appRoute"));
const logModel_1 = __importDefault(require("models/logModel"));
const r = new appRoute_1.default();
exports.default = r;
r.DeleteMethod(async () => logModel_1.default.deleteMany());
