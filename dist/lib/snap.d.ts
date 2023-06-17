import { ApiConfig } from './apiConfig';
import { HttpClient } from './httpClient';
import { Transaction } from './transaction';
export declare class Snap {
    apiConfig: ApiConfig;
    httpClient: HttpClient;
    transaction: Transaction;
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
export {};
