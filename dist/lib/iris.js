"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiConfig_1 = __importDefault(require("./apiConfig"));
const httpClient_1 = __importDefault(require("./httpClient"));
const transaction_1 = __importDefault(require("./transaction"));
class Iris {
    /**
     * Initiate with options
     * @param  {Object} options - should have these props:
     * isProduction, apiKey
     */
    constructor(options = {
        isProduction: false,
        serverKey: "",
    }) {
        this.apiConfig = new apiConfig_1.default(options);
        this.httpClient = new httpClient_1.default(this);
        this.transaction = new transaction_1.default(this);
    }
    /**
     * Do `/ping` API request to Iris API
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    ping() {
        const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/ping`;
        return this.httpClient.request("get", this.apiConfig.get().serverKey, apiUrl);
    }
    /**
     * Do create `/beneficiaries` API request to Iris API
     * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to JSON (more params detail refer to: https://iris-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    createBeneficiaries(parameter = {}) {
        const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/beneficiaries`;
        return this.httpClient.request("post", this.apiConfig.get().serverKey, apiUrl, parameter);
    }
    /**
     * Do update `/beneficiaries/<alias_name>` API request to Iris API
     * @param  {String} parameter - alias_name of the beneficiaries that need to be updated
     * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to JSON (more params detail refer to: https://iris-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    updateBeneficiaries(aliasName, parameter = {}) {
        const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/beneficiaries/${aliasName}`;
        return this.httpClient.request("patch", this.apiConfig.get().serverKey, apiUrl, parameter);
    }
    /**
     * Do `/beneficiaries` API request to Iris API
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    getBeneficiaries() {
        const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/beneficiaries`;
        return this.httpClient.request("get", this.apiConfig.get().serverKey, apiUrl);
    }
    /**
     * Do create `/payouts` API request to Iris API
     * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to JSON (more params detail refer to: https://iris-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    createPayouts(parameter = {}) {
        const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/payouts`;
        return this.httpClient.request("post", this.apiConfig.get().serverKey, apiUrl, parameter);
    }
    /**
     * Do approve `/payouts/approve` API request to Iris API
     * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to JSON (more params detail refer to: https://iris-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    approvePayouts(parameter = {}) {
        const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/payouts/approve`;
        return this.httpClient.request("post", this.apiConfig.get().serverKey, apiUrl, parameter);
    }
    /**
     * Do reject `/payouts/reject` API request to Iris API
     * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to JSON (more params detail refer to: https://iris-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    rejectPayouts(parameter = {}) {
        const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/payouts/reject`;
        return this.httpClient.request("post", this.apiConfig.get().serverKey, apiUrl, parameter);
    }
    /**
     * Do `/payouts/<reference_no>` API request to Iris API
     * @param  {String} parameter - reference_no of the payout
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    getPayoutDetails(referenceNo) {
        const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/payouts/${referenceNo}`;
        return this.httpClient.request("get", this.apiConfig.get().serverKey, apiUrl);
    }
    /**
     * Do `/statements` API request to Iris API
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    // https://iris-docs.midtrans.com/#transaction-history
    getTransactionHistory(parameter = {}) {
        const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/statements`;
        const isGetMethodWithJsonBodyParam = true;
        return this.httpClient.request("get", this.apiConfig.get().serverKey, apiUrl, null, // it doesn't use URL query param
        parameter // but it uses JSON param instead, non-standard
        );
    }
    /**
     * Do `/channels` API request to Iris API
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    getTopupChannels() {
        const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/channels`;
        return this.httpClient.request("get", this.apiConfig.get().serverKey, apiUrl);
    }
    /**
     * Do `/balance` API request to Iris API
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    getBalance() {
        const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/balance`;
        return this.httpClient.request("get", this.apiConfig.get().serverKey, apiUrl);
    }
    /**
     * Do `/bank_accounts` API request to Iris API
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    getFacilitatorBankAccounts() {
        const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/bank_accounts`;
        return this.httpClient.request("get", this.apiConfig.get().serverKey, apiUrl);
    }
    /**
     * Do `/bank_accounts/<bank_account_id>/balance` API request to Iris API
     * @param  {String} parameter - bank_account_id of the bank account
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    getFacilitatorBankAccountBalance(bankAccountId) {
        const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/bank_accounts/${bankAccountId}/balance`;
        return this.httpClient.request("get", this.apiConfig.get().serverKey, apiUrl);
    }
    /**
     * Do `/beneficiary_banks` API request to Iris API
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    getBeneficiaryBanks() {
        let apiUrl = this.apiConfig.getIrisApiBaseUrl() + "/beneficiary_banks";
        let responsePromise = this.httpClient.request("get", this.apiConfig.get().serverKey, apiUrl);
        return responsePromise;
    }
    /**
     * Do `/account_validation` API request to Iris API
     * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to GET Query param (more params detail refer to: https://iris-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    validateBankAccount(parameter = {}) {
        let apiUrl = this.apiConfig.getIrisApiBaseUrl() + '/account_validation';
        let responsePromise = this.httpClient.request('get', this.apiConfig.get().serverKey, apiUrl, parameter);
        return responsePromise;
    }
    /**
     * Do `/kyc/` API request to Iris API
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    // https://iris-docs.midtrans.com/#user-information
    getUserInformation() {
        const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/kyc/`;
        return this.httpClient.request("get", this.apiConfig.get().serverKey, apiUrl);
    }
}
exports.default = Iris;
