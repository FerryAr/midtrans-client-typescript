"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Midtrans = void 0;
const snap_1 = require("./lib/snap");
const coreApi_1 = require("./lib/coreApi");
const iris_1 = require("./lib/iris");
const midtransError_1 = require("./lib/midtransError");
var Midtrans;
(function (Midtrans) {
    class Snap extends snap_1.Snap {
    }
    Midtrans.Snap = Snap;
    class CoreApi extends coreApi_1.CoreApi {
    }
    Midtrans.CoreApi = CoreApi;
    class Iris extends iris_1.Iris {
    }
    Midtrans.Iris = Iris;
    class MidtransError extends midtransError_1.MidtransError {
    }
    Midtrans.MidtransError = MidtransError;
})(Midtrans || (exports.Midtrans = Midtrans = {}));
