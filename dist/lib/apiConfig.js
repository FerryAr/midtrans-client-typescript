"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
/**
 * Config Object that is used to store isProduction, serverKey, clientKey.
 * And also API base URLs.
 */
class ApiConfig {
    /**
     * Initiate with options
     * @param {Object} options - should have these props: isProduction, serverKey, clientKey
     */
    constructor(options = {}) {
        this.isProduction = false;
        this.serverKey = "";
        this.clientKey = "";
        this.set(options);
    }
    /**
     * Return config stored
     * @return {Object} object contains isProduction, serverKey, clientKey
     */
    get() {
        let currentConfig = {
            isProduction: this.isProduction,
            serverKey: this.serverKey,
            clientKey: this.clientKey,
        };
        return currentConfig;
    }
    /**
     * Set config stored
     * @param {Object} options - object contains isProduction, serverKey, clientKey]
     */
    set(options) {
        let currentConfig = {
            isProduction: this.isProduction,
            serverKey: this.serverKey,
            clientKey: this.clientKey,
        };
        const parsedOptions = lodash_1.default.pick(options, [
            "isProduction",
            "serverKey",
            "clientKey",
        ]);
        let mergedConfig = lodash_1.default.merge({}, currentConfig, parsedOptions);
        this.isProduction = mergedConfig.isProduction;
        this.serverKey = mergedConfig.serverKey;
        this.clientKey = mergedConfig.clientKey;
    }
    /**
     * @return {String} core api base URL
     */
    getCoreApiBaseUrl() {
        return this.isProduction
            ? ApiConfig.CORE_PRODUCTION_BASE_URL
            : ApiConfig.CORE_SANDBOX_BASE_URL;
    }
    /**
     * @return {String} snap api base URL
     */
    getSnapApiBaseUrl() {
        return this.isProduction
            ? ApiConfig.SNAP_PRODUCTION_BASE_URL
            : ApiConfig.SNAP_SANDBOX_BASE_URL;
    }
    /**
     * @return {String} Iris api base URL
     */
    getIrisApiBaseUrl() {
        return this.isProduction
            ? ApiConfig.IRIS_PRODUCTION_BASE_URL
            : ApiConfig.IRIS_SANDBOX_BASE_URL;
    }
}
// Static vars
ApiConfig.CORE_SANDBOX_BASE_URL = "https://api.sandbox.midtrans.com";
ApiConfig.CORE_PRODUCTION_BASE_URL = "https://api.midtrans.com";
ApiConfig.SNAP_SANDBOX_BASE_URL = "https://app.sandbox.midtrans.com/snap/v1";
ApiConfig.SNAP_PRODUCTION_BASE_URL = "https://app.midtrans.com/snap/v1";
// Iris API URL
ApiConfig.IRIS_SANDBOX_BASE_URL =
    "https://app.sandbox.midtrans.com/iris/api/v1";
ApiConfig.IRIS_PRODUCTION_BASE_URL = "https://app.midtrans.com/iris/api/v1";
exports.default = ApiConfig;
