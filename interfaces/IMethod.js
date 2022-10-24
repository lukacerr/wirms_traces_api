"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methodIsAsync = void 0;
function methodIsAsync(m) { return 'then' in m; }
exports.methodIsAsync = methodIsAsync;
