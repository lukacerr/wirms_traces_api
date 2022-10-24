"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const name = 'logs';
const schema = new mongoose_1.Schema({
    information: mongoose_1.Schema.Types.Mixed,
    unhandled: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
    code: Number,
    path: String,
    method: String,
}, { collection: name });
exports.default = (0, mongoose_1.model)(name, schema);
