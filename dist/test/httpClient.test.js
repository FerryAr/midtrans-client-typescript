"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const httpClient_1 = __importDefault(require("./../lib/httpClient"));
const sharedConstants_1 = __importDefault(require("./sharedConstants"));
function generateParamMin() {
    return {
        transaction_details: {
            order_id: "node-midtransclient-test-" + Math.round(new Date().getTime() / 1),
            gross_amount: 200000,
        },
        credit_card: {
            secure: true,
        },
    };
}
describe("httpClient.ts", () => {
    it("able to start test", () => {
        (0, chai_1.expect)(true).to.be.true;
    });
    it("class should be working", () => {
        let httpClient = new httpClient_1.default();
        (0, chai_1.expect)(httpClient instanceof httpClient_1.default).to.be.true;
    });
    it("have .request function", () => {
        let httpClient = new httpClient_1.default();
        (0, chai_1.expect)(typeof httpClient.request).to.be.equal("function");
    });
    it("able to raw request to snap api", () => {
        let httpClient = new httpClient_1.default();
        return httpClient
            .request("post", sharedConstants_1.default.serverKey, sharedConstants_1.default.SNAP_SANDBOX_BASE_URL + "/transactions", generateParamMin())
            .then((res) => {
            (0, chai_1.expect)(res).to.have.property("token");
            (0, chai_1.expect)(res.token).to.be.a("string");
        })
            .catch((e) => {
            throw e;
        });
    });
    it("able to raw request GET Token to Core Api", () => {
        let httpClient = new httpClient_1.default();
        return httpClient
            .request("get", sharedConstants_1.default.serverKey, sharedConstants_1.default.CORE_SANDBOX_BASE_URL + "/v2/token", {
            card_number: "5264 2210 3887 4659",
            card_exp_month: "12",
            card_exp_year: new Date().getFullYear() + 1 + "",
            card_cvv: "123",
            client_key: sharedConstants_1.default.clientKey,
        })
            .then((res) => {
            (0, chai_1.expect)(res).to.have.property("token_id");
            (0, chai_1.expect)(res.token_id).to.be.a("string");
        })
            .catch((e) => {
            throw e;
        });
    });
    it("able to throw fail to parse string as json exception", () => {
        let httpClient = new httpClient_1.default();
        return httpClient
            .request("post", sharedConstants_1.default.serverKey, sharedConstants_1.default.SNAP_SANDBOX_BASE_URL + "/transactions", "this is not json")
            .then((res) => { })
            .catch((e) => {
            (0, chai_1.expect)(e.message).to.includes("Failed to parse");
        });
    });
    // comment out flaky test
    // it('able to throw connection failure exception',()=>{
    //   let httpClient = new HttpClient();
    //   httpClient.http_client.defaults.timeout = 2; // override/set axios timeout param
    //   // didn't work dummy domain won't trigger timeout case
    //   return httpClient.request('post',cons.serverKey,'https://non-exist-unreachable-domain-name.com:4321',generateParamMin())
    //   .then((res)=>{})
    //   .catch((e)=>{
    //     expect(e.message).to.includes('connection failure');
    //   })
    // })
});
