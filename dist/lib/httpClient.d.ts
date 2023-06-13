import { AxiosInstance } from 'axios';
declare class HttpClient {
    parent: object;
    http_client: AxiosInstance;
    constructor(parentObj?: object);
    request(httpMethod: string, serverKey: string, requestUrl: string, firstParam?: object | string | null, secondParam?: object | string | null): Promise<object>;
}
export default HttpClient;
