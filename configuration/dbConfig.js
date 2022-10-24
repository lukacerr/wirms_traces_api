"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONNECTION_STRING = exports.MONGO_CONFIG = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const envConfig_1 = __importDefault(require("configuration/envConfig"));
exports.MONGO_CONFIG = {};
exports.CONNECTION_STRING = (0, envConfig_1.default)('CUSTOM_CONNECTION_STRING')
    ?? 'mongodb+srv://'
        + `${(0, envConfig_1.default)('DB_USER')}:${(0, envConfig_1.default)('DB_PASSWORD')}`
        + `@${(0, envConfig_1.default)('DB_CLUSTER')}.mongodb.net`
        + `/${(0, envConfig_1.default)('DB_ENVIRONMENT')}`
        + `?${(0, envConfig_1.default)('DB_SETTINGS')}`;
exports.default = mongoose_1.default;
