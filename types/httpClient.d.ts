export declare class HttpClient {
  constructor(parentObj?: any);
  request(
    httpMethod: string,
    serverKey: string,
    requestUrl: string,
    firstParam?: object | null,
    secondParam?: object | null
  ): Promise<any>;
}