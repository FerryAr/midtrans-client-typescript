"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = __importDefault(require("../index"));
const sharedConstants_1 = __importDefault(require("./sharedConstants"));
let globVar = {
    createdRefNo: '',
};
let Iris = index_1.default.Iris;
describe('Iris.ts', () => {
    it('able to start test', () => {
        (0, chai_1.expect)(true).to.be.true;
    });
    it('class should be working', () => {
        let iris = new Iris();
        (0, chai_1.expect)(iris instanceof Iris).to.be.true;
        (0, chai_1.expect)(typeof iris.ping).to.be.equal('function');
        (0, chai_1.expect)(typeof iris.createBeneficiaries).to.be.equal('function');
        (0, chai_1.expect)(typeof iris.updateBeneficiaries).to.be.equal('function');
        (0, chai_1.expect)(typeof iris.getBeneficiaries).to.be.equal('function');
        (0, chai_1.expect)(typeof iris.createPayouts).to.be.equal('function');
        (0, chai_1.expect)(typeof iris.approvePayouts).to.be.equal('function');
        (0, chai_1.expect)(typeof iris.rejectPayouts).to.be.equal('function');
        (0, chai_1.expect)(typeof iris.getPayoutDetails).to.be.equal('function');
        (0, chai_1.expect)(typeof iris.getTransactionHistory).to.be.equal('function');
        (0, chai_1.expect)(typeof iris.getTopupChannels).to.be.equal('function');
        (0, chai_1.expect)(typeof iris.getBalance).to.be.equal('function');
        (0, chai_1.expect)(typeof iris.getFacilitatorBankAccounts).to.be.equal('function');
        (0, chai_1.expect)(typeof iris.getFacilitatorBankAccountBalance).to.be.equal('function');
        (0, chai_1.expect)(typeof iris.getBeneficiaryBanks).to.be.equal('function');
        (0, chai_1.expect)(typeof iris.validateBankAccount).to.be.equal('function');
        (0, chai_1.expect)(iris.apiConfig.get().serverKey).to.be.a('string');
    });
    it('able to re-set serverKey via setter', () => {
        let iris = new Iris();
        (0, chai_1.expect)(iris.apiConfig.get().serverKey).to.be.equals('');
        (0, chai_1.expect)(iris.apiConfig.get().isProduction).to.be.false;
        iris.apiConfig.set({ serverKey: sharedConstants_1.default.irisApiKey });
        (0, chai_1.expect)(iris.apiConfig.get().serverKey).to.be.equals(sharedConstants_1.default.irisApiKey);
        (0, chai_1.expect)(iris.apiConfig.get().isProduction).to.be.false;
    });
    it('able to re-set serverKey via property', () => {
        let iris = new Iris();
        (0, chai_1.expect)(iris.apiConfig.get().serverKey).to.be.equals('');
        (0, chai_1.expect)(iris.apiConfig.get().isProduction).to.be.false;
        iris.apiConfig.serverKey = sharedConstants_1.default.irisApiKey;
        (0, chai_1.expect)(iris.apiConfig.get().serverKey).to.be.equals(sharedConstants_1.default.irisApiKey);
        (0, chai_1.expect)(iris.apiConfig.get().isProduction).to.be.false;
    });
    it('able to ping with correct api key', () => {
        let iris = new Iris(generateConfig());
        return iris.ping()
            .then((res) => {
            (0, chai_1.expect)(res).to.be.a('string');
            (0, chai_1.expect)(res).to.be.equals('pong');
        });
    });
    it('fail 401 to createBeneficiaries with unset api key', () => {
        let iris = new Iris();
        return iris.createBeneficiaries({})
            .then((res) => {
            (0, chai_1.expect)(res).to.equals(null);
        })
            .catch((e) => {
            (0, chai_1.expect)(e.httpStatusCode).to.equals(401);
            (0, chai_1.expect)(e.message).to.includes('denied');
        });
    });
    it('fail to createBeneficiaries: account duplicated / already been taken', () => {
        let iris = new Iris(generateConfig());
        return iris.createBeneficiaries({
            "name": "Budi Susantoo",
            "account": "0611101146",
            "bank": "bca",
            "alias_name": "budisusantoo",
            "email": "budi.susantoo@example.com"
        })
            .then((res) => {
            (0, chai_1.expect)(res).to.equals(null);
        })
            .catch((e) => {
            (0, chai_1.expect)(e.httpStatusCode).to.equals(400);
            (0, chai_1.expect)(e.message).to.includes('400');
            (0, chai_1.expect)(e.message).to.includes('error occurred when creating beneficiary');
            (0, chai_1.expect)(e.ApiResponse.errors[0]).to.includes('already been taken');
        });
    });
    it('able to updateBeneficiaries with existing/created account', () => {
        let iris = new Iris(generateConfig());
        return iris.updateBeneficiaries('budisusantoo', {
            "name": "Budi Susantoo",
            "account": "0611101141",
            "bank": "bca",
            "alias_name": "budisusantoo",
            "email": "budi.susantoo@example.com"
        })
            .then((res) => {
            (0, chai_1.expect)(res).to.have.property('status');
            (0, chai_1.expect)(res.status).to.includes('updated');
        });
    });
    it('able to getBeneficiaries', () => {
        let iris = new Iris(generateConfig());
        return iris.getBeneficiaries()
            .then((res) => {
            (0, chai_1.expect)(res).to.be.an('array');
            (0, chai_1.expect)(res[0]).to.have.property('alias_name');
            (0, chai_1.expect)(res[0]).to.have.property('account');
        });
    });
    it('able to createPayouts', () => {
        let iris = new Iris(generateConfig());
        return iris.createPayouts({
            "payouts": [
                {
                    "beneficiary_name": "Budi Susantoo",
                    "beneficiary_account": "0611101146",
                    "beneficiary_bank": "bca",
                    "beneficiary_email": "budi.susantoo@example.com",
                    "amount": "10233",
                    "notes": "unit test node js"
                },
            ]
        })
            .then((res) => {
            (0, chai_1.expect)(res).to.have.property('payouts');
            (0, chai_1.expect)(res.payouts).to.be.an('array');
            (0, chai_1.expect)(res.payouts[0]).to.have.property('reference_no');
            (0, chai_1.expect)(res.payouts[0].reference_no).to.be.a('string');
            globVar.createdRefNo = res.payouts[0].reference_no;
        });
    });
    it('fail to approvePayouts: role not authorized', () => {
        let iris = new Iris(generateConfig());
        return iris.approvePayouts({
            "reference_nos": ['123123123'],
            "otp": "335163"
        })
            .then((res) => {
        })
            .catch((e) => {
            (0, chai_1.expect)(e.message).to.includes(401);
            (0, chai_1.expect)(e.message).to.includes('not authorized');
        });
    });
    it('fail to rejectPayouts: role not authorized', () => {
        let iris = new Iris(generateConfig());
        return iris.rejectPayouts({
            "reference_nos": [globVar.createdRefNo],
            "reject_reason": "Reason to reject payouts"
        })
            .then((res) => {
        })
            .catch((e) => {
            (0, chai_1.expect)(e.message).to.includes(401);
            (0, chai_1.expect)(e.message).to.includes('not authorized');
        });
    });
    // @TODO: should add test that success to approve & reject payouts
    // currently it's not implemented because the testing API-key's role is not authorized,
    // should get it to work.
    it('able to getPayoutDetails from above', () => {
        let iris = new Iris(generateConfig());
        return iris.getPayoutDetails(globVar.createdRefNo)
            .then((res) => {
            // console.log(res);
            (0, chai_1.expect)(res).to.have.property('status');
            (0, chai_1.expect)(res.status).to.be.a('string');
            (0, chai_1.expect)(res.status).to.equals('queued');
        });
    });
    it('able to getTransactionHistory', () => {
        let iris = new Iris(generateConfig());
        return iris.getTransactionHistory()
            .then((res) => {
            (0, chai_1.expect)(res).to.be.an('array');
            if (res.length > 0) {
                (0, chai_1.expect)(res[0].status).to.be.a('string');
                (0, chai_1.expect)(res[0].reference_no).to.be.a('string');
                (0, chai_1.expect)(res[0].beneficiary_account).to.be.a('string');
            }
        });
    });
    it('able to getTopupChannels', () => {
        let iris = new Iris(generateConfig());
        return iris.getTopupChannels()
            .then((res) => {
            (0, chai_1.expect)(res).to.be.an('array');
            (0, chai_1.expect)(res[0].id).to.be.a('number');
            (0, chai_1.expect)(res[0].virtual_account_type).to.be.a('string');
            (0, chai_1.expect)(res[0].virtual_account_number).to.be.a('string');
        });
    });
    it('able to getBalance', () => {
        let iris = new Iris(generateConfig());
        return iris.getBalance()
            .then((res) => {
            (0, chai_1.expect)(res.balance).to.be.a('string');
        });
    });
    //   it('fail to getFacilitatorBankAccounts: not authorized due to non facilitator account', () => {
    //     let iris = new Iris(generateConfig());
    //     return iris.getFacilitatorBankAccountBalance()
    //       .catch((e) => {
    //         expect(e.message).to.includes('not authorized');
    //       });
    //   });
    //   it('fail to getFacilitatorBalance: not authorized due to non facilitator account', () => {
    //     let iris = new Iris(generateConfig());
    //     return iris.getFacilitatorBalance()
    //       .catch((e) => {
    //         expect(e.message).to.includes('not authorized');
    //       });
    //   });
    it('able to getBeneficiaryBanks', () => {
        let iris = new Iris(generateConfig());
        return iris.getBeneficiaryBanks()
            .then((res) => {
            (0, chai_1.expect)(res.beneficiary_banks).to.be.an('array');
            (0, chai_1.expect)(res.beneficiary_banks[0].code).to.be.a('string');
            (0, chai_1.expect)(res.beneficiary_banks[0].name).to.be.a('string');
        });
    });
    it('able to validateBankAccount', () => {
        let iris = new Iris(generateConfig());
        return iris.validateBankAccount({
            bank: "mandiri",
            account: "1111222233333"
        })
            .then((res) => {
            (0, chai_1.expect)(res.account_no).to.be.a('string');
            (0, chai_1.expect)(res.account_name).to.be.a('string');
        });
    });
});
/**
 * Helper functions
 */
function generateTimestamp(devider = 1) {
    return Math.round((new Date()).getTime() / devider);
}
function generateConfig() {
    return {
        isProduction: false,
        serverKey: sharedConstants_1.default.irisApiKey
    };
}
