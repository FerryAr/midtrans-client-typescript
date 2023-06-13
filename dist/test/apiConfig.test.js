"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const apiConfig_1 = __importDefault(require("./../lib/apiConfig"));
const sharedConstants_1 = __importDefault(require("./sharedConstants"));
describe("Config.js", () => {
    it("able to start test", () => {
        (0, chai_1.expect)(true).to.be.true;
    });
    it("able to store config", () => {
        let configObj = new apiConfig_1.default(generateConfig());
        (0, chai_1.expect)(configObj.get().isProduction).to.be.false;
        (0, chai_1.expect)(configObj.get().serverKey).to.be.a("string");
        (0, chai_1.expect)(configObj.get().clientKey).to.be.a("string");
        (0, chai_1.expect)(configObj.get().serverKey).to.be.equal(sharedConstants_1.default.serverKey);
        (0, chai_1.expect)(configObj.get().clientKey).to.be.equal(sharedConstants_1.default.clientKey);
    });
    it("able to set config", () => {
        let configObj = new apiConfig_1.default();
        configObj.set(generateConfig());
        (0, chai_1.expect)(configObj.get().isProduction).to.be.false;
        (0, chai_1.expect)(configObj.get().serverKey).to.be.a("string");
        (0, chai_1.expect)(configObj.get().clientKey).to.be.a("string");
        (0, chai_1.expect)(configObj.get().serverKey).to.be.equal(sharedConstants_1.default.serverKey);
        (0, chai_1.expect)(configObj.get().clientKey).to.be.equal(sharedConstants_1.default.clientKey);
    });
    it("able to get correct API url environment for Core Api", () => {
        let configObj = new apiConfig_1.default();
        configObj.set({ isProduction: false });
        (0, chai_1.expect)(configObj.getCoreApiBaseUrl()).to.be.equal(sharedConstants_1.default.CORE_SANDBOX_BASE_URL);
        configObj.set({ isProduction: true });
        (0, chai_1.expect)(configObj.getCoreApiBaseUrl()).to.be.equal(sharedConstants_1.default.CORE_PRODUCTION_BASE_URL);
    });
    it("able to get correct API url environment for Snap", () => {
        let configObj = new apiConfig_1.default();
        configObj.set({ isProduction: false });
        (0, chai_1.expect)(configObj.getSnapApiBaseUrl()).to.be.equal(sharedConstants_1.default.SNAP_SANDBOX_BASE_URL);
        configObj.set({ isProduction: true });
        (0, chai_1.expect)(configObj.getSnapApiBaseUrl()).to.be.equal(sharedConstants_1.default.SNAP_PRODUCTION_BASE_URL);
    });
});
function generateConfig() {
    return {
        isProduction: false,
        serverKey: sharedConstants_1.default.serverKey,
        clientKey: sharedConstants_1.default.clientKey,
    };
}
