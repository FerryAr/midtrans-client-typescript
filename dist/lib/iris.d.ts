import { ApiConfig } from "./apiConfig";
import { HttpClient } from "./httpClient";
import { Transaction } from "./transaction";
export declare class Iris {
    apiConfig: ApiConfig;
    httpClient: HttpClient;
    transaction: Transaction;
    /**
     * Initiate with options
     * @param  {Object} options - should have these props:
     * isProduction, apiKey
     */
    constructor(options?: {
        isProduction: boolean;
        serverKey: string;
    });
    /**
     * Do `/ping` API request to Iris API
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    ping(): Promise<any>;
    /**
     * Do create `/beneficiaries` API request to Iris API
     * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to JSON (more params detail refer to: https://iris-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    createBeneficiaries(parameter?: object): Promise<any>;
    /**
     * Do update `/beneficiaries/<alias_name>` API request to Iris API
     * @param  {String} parameter - alias_name of the beneficiaries that need to be updated
     * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to JSON (more params detail refer to: https://iris-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    updateBeneficiaries(aliasName: string, parameter?: object): Promise<any>;
    /**
     * Do `/beneficiaries` API request to Iris API
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    getBeneficiaries(): Promise<any>;
    /**
     * Do create `/payouts` API request to Iris API
     * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to JSON (more params detail refer to: https://iris-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    createPayouts(parameter?: object): Promise<any>;
    /**
     * Do approve `/payouts/approve` API request to Iris API
     * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to JSON (more params detail refer to: https://iris-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    approvePayouts(parameter?: object): Promise<any>;
    /**
     * Do reject `/payouts/reject` API request to Iris API
     * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to JSON (more params detail refer to: https://iris-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    rejectPayouts(parameter?: object): Promise<any>;
    /**
     * Do `/payouts/<reference_no>` API request to Iris API
     * @param  {String} parameter - reference_no of the payout
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    getPayoutDetails(referenceNo: string): Promise<any>;
    /**
     * Do `/statements` API request to Iris API
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    getTransactionHistory(parameter?: object): Promise<any>;
    /**
     * Do `/channels` API request to Iris API
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    getTopupChannels(): Promise<any>;
    /**
     * Do `/balance` API request to Iris API
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    getBalance(): Promise<any>;
    /**
     * Do `/bank_accounts` API request to Iris API
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    getFacilitatorBankAccounts(): Promise<any>;
    /**
     * Do `/bank_accounts/<bank_account_id>/balance` API request to Iris API
     * @param  {String} parameter - bank_account_id of the bank account
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    getFacilitatorBankAccountBalance(bankAccountId: string): Promise<any>;
    /**
     * Do `/beneficiary_banks` API request to Iris API
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    getBeneficiaryBanks(): Promise<object>;
    /**
     * Do `/account_validation` API request to Iris API
     * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to GET Query param (more params detail refer to: https://iris-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    validateBankAccount(parameter?: {}): Promise<object>;
    /**
     * Do `/kyc/` API request to Iris API
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    getUserInformation(): Promise<any>;
}
