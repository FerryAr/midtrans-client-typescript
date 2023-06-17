export declare class Transaction {
  parent: any;
  constructor(parentObj?: any);
  status(transactionId?: string): Promise<any>;
  statusb2b(transactionId?: string): Promise<any>;
  approve(transactionId?: string): Promise<any>;
  deny(transactionId?: string): Promise<any>;
  cancel(transactionId?: string): Promise<any>;
  expire(transactionId?: string): Promise<any>;
  refund(transactionId?: string, parameter?: any): Promise<any>;
  refundDirect(transactionId?: string, parameter?: any): Promise<any>;
  notification(notificationObj?: any): Promise<any>;
}