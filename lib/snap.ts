import ApiConfig from './apiConfig';
import HttpClient from './httpClient';
import Transaction from './transaction';

class Snap {
  apiConfig: ApiConfig;
  httpClient: HttpClient;
  transaction: Transaction;

  constructor(options: SnapOptions = { isProduction: false, serverKey: '', clientKey: '' }) {
    this.apiConfig = new ApiConfig(options);
    this.httpClient = new HttpClient(this);
    this.transaction = new Transaction(this);
  }

  createTransaction(parameter: any = {}): Promise<any> {
    const apiUrl = this.apiConfig.getSnapApiBaseUrl() + '/transactions';
    const responsePromise = this.httpClient.request('post', this.apiConfig.get().serverKey, apiUrl, parameter);
    return responsePromise;
  }

  createTransactionToken(parameter: any = {}): Promise<string> {
    return this.createTransaction(parameter)
      .then(function (res: any) {
        return res.token;
      });
  }

  createTransactionRedirectUrl(parameter: any = {}): Promise<string> {
    return this.createTransaction(parameter)
      .then(function (res: any) {
        return res.redirect_url;
      });
  }
}

interface SnapOptions {
  isProduction?: boolean;
  serverKey: string;
  clientKey: string;
}

export default Snap;
