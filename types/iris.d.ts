declare class Iris {
  constructor(options?: IrisOptions);
  ping(): Promise<any>;
  createBeneficiaries(parameter?: any): Promise<any>;
  updateBeneficiaries(aliasName: string, parameter?: any): Promise<any>;
  getBeneficiaries(): Promise<any>;
  createPayouts(parameter?: any): Promise<any>;
  approvePayouts(parameter?: any): Promise<any>;
  rejectPayouts(parameter?: any): Promise<any>;
  getPayoutDetails(referenceNo: string): Promise<any>;
  getTransactionHistory(parameter?: any): Promise<any>;
  getTopupChannels(): Promise<any>;
  getBalance(): Promise<any>;
  getFacilitatorBankAccounts(): Promise<any>;
  getFacilitatorBalance(bankAccountId: string): Promise<any>;
  getBeneficiaryBanks(): Promise<any>;
  validateBankAccount(parameter?: any): Promise<any>;
}

interface IrisOptions {
  isProduction?: boolean;
  serverKey: string;
}

export default Iris;
