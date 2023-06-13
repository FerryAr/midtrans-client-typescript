"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const snap_1 = __importDefault(require("../lib/snap"));
const coreApi_1 = __importDefault(require("../lib/coreApi"));
const sharedConstants_1 = __importDefault(require("./sharedConstants"));
describe('midtrans-client', () => {
    it('able to start test', () => {
        (0, chai_1.expect)(true).to.be.true;
    });
    it('have Snap class', () => {
        (0, chai_1.expect)(typeof snap_1.default).to.be.equal('function');
    });
    it('have CoreApi class', () => {
        (0, chai_1.expect)(typeof coreApi_1.default).to.be.equal('function');
    });
    it('able to create CoreApi instance', () => {
        const core = new coreApi_1.default(generateConfig());
        (0, chai_1.expect)(typeof core).to.be.equal('object');
        (0, chai_1.expect)(core.apiConfig.get().serverKey).to.be.a('string');
        (0, chai_1.expect)(core.apiConfig.get().clientKey).to.be.a('string');
        (0, chai_1.expect)(core.apiConfig.get().isProduction).to.be.a('boolean');
    });
    it('able to create Snap instance', () => {
        const snap = new snap_1.default(generateConfig());
        (0, chai_1.expect)(typeof snap).to.be.equal('object');
        (0, chai_1.expect)(snap.apiConfig.get().serverKey).to.be.a('string');
        (0, chai_1.expect)(snap.apiConfig.get().clientKey).to.be.a('string');
        (0, chai_1.expect)(snap.apiConfig.get().isProduction).to.be.a('boolean');
    });
});
/**
 * Helper function
 */
function generateConfig() {
    return {
        isProduction: false,
        serverKey: sharedConstants_1.default.serverKey,
        clientKey: sharedConstants_1.default.clientKey,
    };
}
