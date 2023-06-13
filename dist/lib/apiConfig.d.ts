/**
 * Config Object that is used to store isProduction, serverKey, clientKey.
 * And also API base URLs.
 */
declare class ApiConfig {
    static CORE_PRODUCTION_BASE_URL: string;
    static CORE_SANDBOX_BASE_URL: string;
    static SNAP_PRODUCTION_BASE_URL: string;
    static SNAP_SANDBOX_BASE_URL: string;
    static IRIS_PRODUCTION_BASE_URL: string;
    static IRIS_SANDBOX_BASE_URL: string;
    /**
     * Initiate with options
     * @param {Object} options - should have these props: isProduction, serverKey, clientKey
     */
    constructor(options?: {
        isProduction?: boolean;
        serverKey?: string;
        clientKey?: string;
    });
    isProduction: boolean;
    serverKey: string;
    clientKey: string;
    /**
     * Return config stored
     * @return {Object} object contains isProduction, serverKey, clientKey
     */
    get(): {
        isProduction: boolean;
        serverKey: string;
        clientKey: string;
    };
    /**
     * Set config stored
     * @param {Object} options - object contains isProduction, serverKey, clientKey]
     */
    set(options: {
        isProduction?: boolean;
        serverKey?: string;
        clientKey?: string;
    }): void;
    /**
     * @return {String} core api base URL
     */
    getCoreApiBaseUrl(): string;
    /**
     * @return {String} snap api base URL
     */
    getSnapApiBaseUrl(): string;
    /**
     * @return {String} Iris api base URL
     */
    getIrisApiBaseUrl(): string;
}
export default ApiConfig;
