"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appRoute_1 = __importDefault(require("types/appRoute"));
const traceModel_1 = __importDefault(require("models/traceModel"));
const stringManipulation_1 = require("utils/stringManipulation");
const r = new appRoute_1.default();
exports.default = r;
r.GetMethod(async (req) => traceModel_1.default.find(req.body, (0, stringManipulation_1.splitAndTrim)(req.get('Select')), req.query));
r.PostMethod(async (req) => traceModel_1.default.find(req.body, (0, stringManipulation_1.splitAndTrim)(req.get('Select')), req.query), { path: 'q' });
r.GetMethod(async (req) => traceModel_1.default.findById(req.params.id), { path: ':id' });
r.PostMethod((req) => traceModel_1.default.create({ address: req.socket.remoteAddress, ...req.body }));
r.DeleteMethod(async () => traceModel_1.default.deleteMany());
r.DeleteMethod(async (req) => traceModel_1.default.findByIdAndDelete(req.params.id), { path: ':id' });
r.PutMethod(async (req) => traceModel_1.default.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true }), { path: ':id' });
