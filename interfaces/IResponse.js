"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToResponse = exports.isResponse = void 0;
const httpCodes_1 = __importDefault(require("utils/httpCodes"));
function isResponse(x) { return x?.value; }
exports.isResponse = isResponse;
function convertToResponse(data, code = httpCodes_1.default.OK) {
    return isResponse(data) ? data : { value: data, code };
}
exports.convertToResponse = convertToResponse;
