"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiConfig_1 = __importDefault(require("./apiConfig"));
const httpClient_1 = __importDefault(require("./httpClient"));
const transaction_1 = __importDefault(require("./transaction"));
class Snap {
    constructor(options = { isProduction: false, serverKey: '', clientKey: '' }) {
        this.apiConfig = new apiConfig_1.default(options);
        this.httpClient = new httpClient_1.default(this);
        this.transaction = new transaction_1.default(this);
    }
    createTransaction(parameter = {}) {
        const apiUrl = this.apiConfig.getSnapApiBaseUrl() + '/transactions';
        const responsePromise = this.httpClient.request('post', this.apiConfig.get().serverKey, apiUrl, parameter);
        return responsePromise;
    }
    createTransactionToken(parameter = {}) {
        return this.createTransaction(parameter)
            .then(function (res) {
            return res.token;
        });
    }
    createTransactionRedirectUrl(parameter = {}) {
        return this.createTransaction(parameter)
            .then(function (res) {
            return res.redirect_url;
        });
    }
}
exports.default = Snap;
