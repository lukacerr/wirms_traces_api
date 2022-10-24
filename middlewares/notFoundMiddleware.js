"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sender_1 = require("common/sender");
exports.default = async (req, res) => {
    await (0, sender_1.ErrorHandler)(req, res, `Path '${req.originalUrl}' (${req.method}) not found`, 404);
};
