"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snap = void 0;
const apiConfig_1 = require("./apiConfig");
const httpClient_1 = require("./httpClient");
const transaction_1 = require("./transaction");
class Snap {
    constructor(options = { isProduction: false, serverKey: '', clientKey: '' }) {
        this.apiConfig = new apiConfig_1.ApiConfig(options);
        this.httpClient = new httpClient_1.HttpClient(this);
        this.transaction = new transaction_1.Transaction(this);
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
exports.Snap = Snap;
