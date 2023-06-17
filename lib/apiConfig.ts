import _ from "lodash";

/**
 * Config Object that is used to store isProduction, serverKey, clientKey.
 * And also API base URLs.
 */
export class ApiConfig {
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
  constructor(
    options: {
      isProduction?: boolean;
      serverKey?: string;
      clientKey?: string;
    } = {}
  ) {
    this.isProduction = false;
    this.serverKey = "";
    this.clientKey = "";

    this.set(options);
  }

  isProduction: boolean;
  serverKey: string;
  clientKey: string;

  /**
   * Return config stored
   * @return {Object} object contains isProduction, serverKey, clientKey
   */
  get(): { isProduction: boolean; serverKey: string; clientKey: string } {
    let currentConfig = {
      isProduction: this.isProduction,
      serverKey: this.serverKey,
      clientKey: this.clientKey,
    };
    return currentConfig;
  }

  /**
   * Set config stored
   * @param {Object} options - object contains isProduction, serverKey, clientKey]
   */
  set(options: {
    isProduction?: boolean;
    serverKey?: string;
    clientKey?: string;
  }): void {
    let currentConfig = {
      isProduction: this.isProduction,
      serverKey: this.serverKey,
      clientKey: this.clientKey,
    };
    const parsedOptions = _.pick(options, [
      "isProduction",
      "serverKey",
      "clientKey",
    ]);
    let mergedConfig = _.merge({}, currentConfig, parsedOptions);

    this.isProduction = mergedConfig.isProduction;
    this.serverKey = mergedConfig.serverKey;
    this.clientKey = mergedConfig.clientKey;
  }

  /**
   * @return {String} core api base URL
   */
  getCoreApiBaseUrl(): string {
    return this.isProduction
      ? ApiConfig.CORE_PRODUCTION_BASE_URL
      : ApiConfig.CORE_SANDBOX_BASE_URL;
  }

  /**
   * @return {String} snap api base URL
   */
  getSnapApiBaseUrl(): string {
    return this.isProduction
      ? ApiConfig.SNAP_PRODUCTION_BASE_URL
      : ApiConfig.SNAP_SANDBOX_BASE_URL;
  }

  /**
   * @return {String} Iris api base URL
   */
  getIrisApiBaseUrl(): string {
    return this.isProduction
      ? ApiConfig.IRIS_PRODUCTION_BASE_URL
      : ApiConfig.IRIS_SANDBOX_BASE_URL;
  }
}

// Static vars
ApiConfig.CORE_SANDBOX_BASE_URL = "https://api.sandbox.midtrans.com";
ApiConfig.CORE_PRODUCTION_BASE_URL = "https://api.midtrans.com";
ApiConfig.SNAP_SANDBOX_BASE_URL = "https://app.sandbox.midtrans.com/snap/v1";
ApiConfig.SNAP_PRODUCTION_BASE_URL = "https://app.midtrans.com/snap/v1";
// Iris API URL
ApiConfig.IRIS_SANDBOX_BASE_URL =
  "https://app.sandbox.midtrans.com/iris/api/v1";
ApiConfig.IRIS_PRODUCTION_BASE_URL = "https://app.midtrans.com/iris/api/v1";
