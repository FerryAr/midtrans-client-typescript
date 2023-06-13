import ApiConfig from "./apiConfig";
import HttpClient from "./httpClient";
import Transaction from "./transaction";

class Iris {
  apiConfig: ApiConfig;
  httpClient: HttpClient;
  transaction: Transaction;

  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * isProduction, apiKey
   */
  constructor(
    options: { isProduction: boolean; serverKey: string } = {
      isProduction: false,
      serverKey: "",
    }
  ) {
    this.apiConfig = new ApiConfig(options);
    this.httpClient = new HttpClient(this);
    this.transaction = new Transaction(this);
  }

  /**
   * Do `/ping` API request to Iris API
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  ping(): Promise<any> {
    const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/ping`;
    return this.httpClient.request(
      "get",
      this.apiConfig.get().serverKey,
      apiUrl
    );
  }

  /**
   * Do create `/beneficiaries` API request to Iris API
   * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to JSON (more params detail refer to: https://iris-docs.midtrans.com)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  createBeneficiaries(parameter: object = {}): Promise<any> {
    const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/beneficiaries`;
    return this.httpClient.request(
      "post",
      this.apiConfig.get().serverKey,
      apiUrl,
      parameter
    );
  }

  /**
   * Do update `/beneficiaries/<alias_name>` API request to Iris API
   * @param  {String} parameter - alias_name of the beneficiaries that need to be updated
   * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to JSON (more params detail refer to: https://iris-docs.midtrans.com)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  updateBeneficiaries(aliasName: string, parameter: object = {}): Promise<any> {
    const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/beneficiaries/${aliasName}`;
    return this.httpClient.request(
      "patch",
      this.apiConfig.get().serverKey,
      apiUrl,
      parameter
    );
  }

  /**
   * Do `/beneficiaries` API request to Iris API
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  getBeneficiaries(): Promise<any> {
    const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/beneficiaries`;
    return this.httpClient.request(
      "get",
      this.apiConfig.get().serverKey,
      apiUrl
    );
  }

  /**
   * Do create `/payouts` API request to Iris API
   * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to JSON (more params detail refer to: https://iris-docs.midtrans.com)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  createPayouts(parameter: object = {}): Promise<any> {
    const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/payouts`;
    return this.httpClient.request(
      "post",
      this.apiConfig.get().serverKey,
      apiUrl,
      parameter
    );
  }

  /**
   * Do approve `/payouts/approve` API request to Iris API
   * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to JSON (more params detail refer to: https://iris-docs.midtrans.com)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  approvePayouts(parameter: object = {}): Promise<any> {
    const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/payouts/approve`;
    return this.httpClient.request(
      "post",
      this.apiConfig.get().serverKey,
      apiUrl,
      parameter
    );
  }

  /**
   * Do reject `/payouts/reject` API request to Iris API
   * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to JSON (more params detail refer to: https://iris-docs.midtrans.com)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  rejectPayouts(parameter: object = {}): Promise<any> {
    const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/payouts/reject`;
    return this.httpClient.request(
      "post",
      this.apiConfig.get().serverKey,
      apiUrl,
      parameter
    );
  }

  /**
   * Do `/payouts/<reference_no>` API request to Iris API
   * @param  {String} parameter - reference_no of the payout
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  getPayoutDetails(referenceNo: string): Promise<any> {
    const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/payouts/${referenceNo}`;
    return this.httpClient.request(
      "get",
      this.apiConfig.get().serverKey,
      apiUrl
    );
  }

  /**
   * Do `/statements` API request to Iris API
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  // https://iris-docs.midtrans.com/#transaction-history
  getTransactionHistory(parameter: object = {}): Promise<any> {
    const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/statements`;
    const isGetMethodWithJsonBodyParam = true;
    return this.httpClient.request(
      "get",
      this.apiConfig.get().serverKey,
      apiUrl,
      null, // it doesn't use URL query param
      parameter // but it uses JSON param instead, non-standard
    );
  }

  /**
   * Do `/channels` API request to Iris API
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  getTopupChannels(): Promise<any> {
    const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/channels`;
    return this.httpClient.request(
      "get",
      this.apiConfig.get().serverKey,
      apiUrl
    );
  }

  /**
   * Do `/balance` API request to Iris API
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  getBalance(): Promise<any> {
    const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/balance`;
    return this.httpClient.request(
      "get",
      this.apiConfig.get().serverKey,
      apiUrl
    );
  }

  /**
   * Do `/bank_accounts` API request to Iris API
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  getFacilitatorBankAccounts(): Promise<any> {
    const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/bank_accounts`;
    return this.httpClient.request(
      "get",
      this.apiConfig.get().serverKey,
      apiUrl
    );
  }

  /**
   * Do `/bank_accounts/<bank_account_id>/balance` API request to Iris API
   * @param  {String} parameter - bank_account_id of the bank account
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  getFacilitatorBankAccountBalance(bankAccountId: string): Promise<any> {
    const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/bank_accounts/${bankAccountId}/balance`;
    return this.httpClient.request(
      "get",
      this.apiConfig.get().serverKey,
      apiUrl
    );
  }

  /**
   * Do `/beneficiary_banks` API request to Iris API
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  getBeneficiaryBanks() {
    let apiUrl = this.apiConfig.getIrisApiBaseUrl() + "/beneficiary_banks";
    let responsePromise = this.httpClient.request(
      "get",
      this.apiConfig.get().serverKey,
      apiUrl
    );
    return responsePromise;
  }

  /**
   * Do `/account_validation` API request to Iris API
   * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to GET Query param (more params detail refer to: https://iris-docs.midtrans.com)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  validateBankAccount(parameter={}){
    let apiUrl = this.apiConfig.getIrisApiBaseUrl()+'/account_validation';
    let responsePromise = this.httpClient.request(
      'get',
      this.apiConfig.get().serverKey,
      apiUrl,
      parameter);
    return responsePromise;
  }

  /**
   * Do `/kyc/` API request to Iris API
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  // https://iris-docs.midtrans.com/#user-information
  getUserInformation(): Promise<any> {
    const apiUrl = `${this.apiConfig.getIrisApiBaseUrl()}/kyc/`;
    return this.httpClient.request(
      "get",
      this.apiConfig.get().serverKey,
      apiUrl
    );
  }
}

export default Iris;
