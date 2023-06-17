"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Midtrans = void 0;
const snap_1 = require("./lib/snap");
const coreApi_1 = require("./lib/coreApi");
const iris_1 = require("./lib/iris");
const midtransError_1 = require("./lib/midtransError");
exports.Midtrans = {
    Snap: snap_1.Snap,
    CoreApi: coreApi_1.CoreApi,
    Iris: iris_1.Iris,
    MidtransError: midtransError_1.MidtransError,
};
