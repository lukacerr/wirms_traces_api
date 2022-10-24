"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const name = 'traces';
const schema = new mongoose_1.Schema({
    information: mongoose_1.Schema.Types.Mixed,
    details: mongoose_1.Schema.Types.Mixed,
    message: String,
    project: { type: String, required: true },
    address: String,
    exception: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
}, { collection: name });
exports.default = (0, mongoose_1.model)(name, schema);
