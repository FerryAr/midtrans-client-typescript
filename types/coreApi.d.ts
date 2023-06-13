import ApiConfig from "./apiConfig";
import HttpClient from "./httpClient";
import Transaction from "./transaction";

declare class CoreApi {
  apiConfig: ApiConfig;
  httpClient: HttpClient;
  transaction: Transaction;

  constructor(options?: {
    isProduction?: boolean;
    serverKey?: string;
    clientKey?: string;
  });

  charge(parameter?: object): Promise<object>;
  capture(parameter?: object): Promise<object>;
  cardRegister(parameter?: object): Promise<object>;
  cardToken(parameter?: object): Promise<object>;
  cardPointInquiry(tokenId: string): Promise<object>;
  linkPaymentAccount(parameter?: object): Promise<object>;
  getPaymentAccount(accountId: string): Promise<object>;
  unlinkPaymentAccount(accountId: string): Promise<object>;
  createSubscription(parameter?: object): Promise<object>;
  getSubscription(subscriptionId: string): Promise<object>;
  disableSubscription(subscriptionId: string): Promise<object>;
  enableSubscription(subscriptionId: string): Promise<object>;
  updateSubscription(subscriptionId: string, parameter?: object): Promise<object>;
}

export default CoreApi;
