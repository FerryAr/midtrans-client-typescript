"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * These are wrapper/implementation of API methods described on:
 * https://api-docs.midtrans.com/#midtrans-api
 * @return {Promise} - Promise that contains JSON API response decoded as Object
 */
class Transaction {
    constructor(parentObj = {}) {
        this.parent = parentObj;
    }
    status(transactionId = "") {
        let apiUrl = `${this.parent.apiConfig.getCoreApiBaseUrl()}/v2/${transactionId}/status`;
        let responsePromise = this.parent.httpClient.request("get", this.parent.apiConfig.get().serverKey, apiUrl, null);
        return responsePromise;
    }
    statusb2b(transactionId = "") {
        let apiUrl = `${this.parent.apiConfig.getCoreApiBaseUrl()}/v2/${transactionId}/status/b2b`;
        let responsePromise = this.parent.httpClient.request("get", this.parent.apiConfig.get().serverKey, apiUrl, null);
        return responsePromise;
    }
    approve(transactionId = "") {
        let apiUrl = `${this.parent.apiConfig.getCoreApiBaseUrl()}/v2/${transactionId}/approve`;
        let responsePromise = this.parent.httpClient.request("post", this.parent.apiConfig.get().serverKey, apiUrl, null);
        return responsePromise;
    }
    deny(transactionId = "") {
        let apiUrl = `${this.parent.apiConfig.getCoreApiBaseUrl()}/v2/${transactionId}/deny`;
        let responsePromise = this.parent.httpClient.request("post", this.parent.apiConfig.get().serverKey, apiUrl, null);
        return responsePromise;
    }
    cancel(transactionId = "") {
        let apiUrl = `${this.parent.apiConfig.getCoreApiBaseUrl()}/v2/${transactionId}/cancel`;
        let responsePromise = this.parent.httpClient.request("post", this.parent.apiConfig.get().serverKey, apiUrl, null);
        return responsePromise;
    }
    expire(transactionId = "") {
        let apiUrl = `${this.parent.apiConfig.getCoreApiBaseUrl()}/v2/${transactionId}/expire`;
        let responsePromise = this.parent.httpClient.request("post", this.parent.apiConfig.get().serverKey, apiUrl, null);
        return responsePromise;
    }
    refund(transactionId = "", parameter = {}) {
        let apiUrl = `${this.parent.apiConfig.getCoreApiBaseUrl()}/v2/${transactionId}/refund`;
        let responsePromise = this.parent.httpClient.request("post", this.parent.apiConfig.get().serverKey, apiUrl, parameter);
        return responsePromise;
    }
    refundDirect(transactionId = "", parameter = {}) {
        let apiUrl = `${this.parent.apiConfig.getCoreApiBaseUrl()}/v2/${transactionId}/refund/online/direct`;
        let responsePromise = this.parent.httpClient.request("post", this.parent.apiConfig.get().serverKey, apiUrl, parameter);
        return responsePromise;
    }
    notification(notificationObj) {
        let self = this;
        let obj = notificationObj;
        return new Promise(function (resolve, reject) {
            if (typeof notificationObj === "string") {
                try {
                    obj = JSON.parse(notificationObj);
                }
                catch (err) {
                    reject(new MidtransNotificationError("fail to parse `notification` string as JSON. Use JSON string or Object as `notification`. with message:" +
                        err.message));
                }
            }
            let transactionId = obj.transaction_id;
            self
                .status(transactionId)
                .then(function (res) {
                resolve(res);
            })
                .catch(function (err) {
                reject(err);
            });
        });
    }
}
class MidtransNotificationError extends Error {
}
exports.default = Transaction;
