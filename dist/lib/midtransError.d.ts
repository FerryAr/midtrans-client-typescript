declare class MidtransError extends Error {
    httpStatusCode: number | null;
    ApiResponse: any | null;
    rawHttpClientData: any | null;
    constructor(message: string, httpStatusCode?: number | null, ApiResponse?: any | null, rawHttpClientData?: any | null);
}
export default MidtransError;
