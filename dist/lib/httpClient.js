"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
const axios_1 = __importDefault(require("axios"));
const midtransError_1 = require("./midtransError");
class HttpClient {
    constructor(parentObj = {}) {
        this.parent = parentObj;
        this.http_client = axios_1.default.create();
    }
    request(httpMethod, serverKey, requestUrl, firstParam, secondParam) {
        const headers = {
            'content-type': 'application/json',
            accept: 'application/json',
            'user-agent': 'midtransclient-nodejs/1.3.0',
        };
        let reqBodyPayload = {};
        let reqQueryParam = {};
        if (httpMethod.toLowerCase() === 'get') {
            reqQueryParam = firstParam == null ? {} : firstParam;
            reqBodyPayload = secondParam == null ? {} : secondParam;
        }
        else {
            reqBodyPayload = firstParam == null ? {} : firstParam;
            reqQueryParam = secondParam == null ? {} : secondParam;
        }
        const thisInstance = this;
        return new Promise((resolve, reject) => {
            if (typeof reqBodyPayload === 'string') {
                try {
                    reqBodyPayload = JSON.parse(reqBodyPayload);
                }
                catch (err) {
                    reject(new midtransError_1.MidtransError(`Failed to parse 'body parameters' string as JSON. Use JSON string or Object as 'body parameters'. Message: ${err}`));
                }
            }
            if (typeof reqQueryParam === 'string') {
                try {
                    reqQueryParam = JSON.parse(reqQueryParam);
                }
                catch (err) {
                    reject(new midtransError_1.MidtransError(`Failed to parse 'query parameters' string as JSON. Use JSON string or Object as 'query parameters'. Message: ${err}`));
                }
            }
            thisInstance.http_client({
                method: httpMethod,
                headers: headers,
                url: requestUrl,
                data: reqBodyPayload,
                params: reqQueryParam,
                auth: {
                    username: serverKey,
                    password: '',
                },
            })
                .then((res) => {
                if (res.data.hasOwnProperty('status_code') &&
                    res.data.status_code >= 400 &&
                    res.data.status_code != 407) {
                    reject(new midtransError_1.MidtransError(`Midtrans API is returning API error. HTTP status code: ${res.data.status_code}. API response: ${JSON.stringify(res.data)}`, res.data.status_code, res.data, res));
                }
                resolve(res.data);
            })
                .catch((err) => {
                const res = err.response;
                if (typeof res !== 'undefined' && res.status >= 400) {
                    reject(new midtransError_1.MidtransError(`Midtrans API is returning API error. HTTP status code: ${res.status}. API response: ${JSON.stringify(res.data)}`, res.status, res.data, res));
                }
                else if (typeof res === 'undefined') {
                    reject(new midtransError_1.MidtransError(`Midtrans API request failed. HTTP response not found, likely connection failure. Message: ${JSON.stringify(err.message)}`, null, null, err));
                }
                reject(err);
            });
        });
    }
}
exports.HttpClient = HttpClient;
