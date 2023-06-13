/**
 * These are wrapper/implementation of API methods described on:
 * https://api-docs.midtrans.com/#midtrans-api
 * @return {Promise} - Promise that contains JSON API response decoded as Object
 */
declare class Transaction {
    parent: any;
    constructor(parentObj?: any);
    status(transactionId?: string): any;
    statusb2b(transactionId?: string): any;
    approve(transactionId?: string): any;
    deny(transactionId?: string): any;
    cancel(transactionId?: string): any;
    expire(transactionId?: string): any;
    refund(transactionId?: string, parameter?: {}): any;
    refundDirect(transactionId?: string, parameter?: {}): any;
    notification(notificationObj: any): Promise<unknown>;
}
export default Transaction;
