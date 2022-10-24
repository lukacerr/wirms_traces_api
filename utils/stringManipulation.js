"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitAndTrim = void 0;
function splitAndTrim(s) { return s?.split(',').map((x) => x.trim()) ?? s; }
exports.splitAndTrim = splitAndTrim;
