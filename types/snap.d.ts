import ApiConfig from "./apiConfig";
import HttpClient from "./httpClient";
import Transaction from "./transaction";

declare class Snap {
  private apiConfig: ApiConfig;
  private httpClient: HttpClient;
  private transaction: Transaction;

  constructor(options?: SnapOptions);

  createTransaction(parameter?: any): Promise<any>;

  createTransactionToken(parameter?: any): Promise<string>;

  createTransactionRedirectUrl(parameter?: any): Promise<string>;
}

interface SnapOptions {
  isProduction?: boolean;
  serverKey: string;
  clientKey: string;
}

export default Snap;
