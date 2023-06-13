"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const snap_1 = __importDefault(require("./lib/snap"));
const coreApi_1 = __importDefault(require("./lib/coreApi"));
const iris_1 = __importDefault(require("./lib/iris"));
const midtransError_1 = __importDefault(require("./lib/midtransError"));
const Midtrans = {
    Snap: snap_1.default,
    CoreApi: coreApi_1.default,
    Iris: iris_1.default,
    MidtransError: midtransError_1.default,
};
exports.default = Midtrans;
