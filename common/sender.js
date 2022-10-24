"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Execute = exports.ErrorHandler = exports.SuccessHandler = void 0;
const httpCodes_1 = __importDefault(require("utils/httpCodes"));
const logModel_1 = __importDefault(require("models/logModel"));
const IMethod_1 = require("interfaces/IMethod");
const IResponse_1 = require("interfaces/IResponse");
class BaseResponse {
    error;
    content;
    constructor(content, error = false) {
        this.error = error;
        this.content = content;
    }
}
const SuccessHandler = (res, data, code) => {
    console.log('\x1b[32m%s\x1b[0m', 'RETURNING:', JSON.stringify(data));
    res.status(code).json(new BaseResponse(data));
};
exports.SuccessHandler = SuccessHandler;
const ErrorHandler = async (req, res, e, code, unhandled = true) => {
    try {
        await new logModel_1.default({
            information: e,
            unhandled,
            code,
            path: req.originalUrl,
            method: req.method,
        }).save();
        console.error('\x1b[31m%s\x1b[0m', `[${code}] ERROR:`, `${e?.stack ?? e}`);
        return res.status(code).json(new BaseResponse(e?.message ?? e, true));
    }
    catch (e2) {
        console.error('\x1b[31m%s\x1b[0m', `DATABASE ERROR: ${e2?.stack ?? e2}`);
        return res.status(code).json(new BaseResponse({ initial_error: e, db_error: e2 }, true));
    }
};
exports.ErrorHandler = ErrorHandler;
const Execute = async (req, res, f, code = httpCodes_1.default.OK) => {
    try {
        const data = (0, IResponse_1.convertToResponse)((0, IMethod_1.methodIsAsync)(f) ? await f(req, res) : f(req, res), code);
        (0, exports.SuccessHandler)(res, data.value === undefined ? null : data.value, data.code ?? code);
    }
    catch (e) {
        const val = Boolean(e.name === 'ValidationError');
        await (0, exports.ErrorHandler)(req, res, e, val ? httpCodes_1.default.BAD_REQUEST : httpCodes_1.default.INTERNAL_SERVER_ERROR, val);
    }
};
exports.Execute = Execute;
