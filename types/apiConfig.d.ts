declare class ApiConfig {
  static CORE_PRODUCTION_BASE_URL: string;
  static CORE_SANDBOX_BASE_URL: string;
  static SNAP_PRODUCTION_BASE_URL: string;
  static SNAP_SANDBOX_BASE_URL: string;
  static IRIS_PRODUCTION_BASE_URL: string;
  static IRIS_SANDBOX_BASE_URL: string;

  constructor(options?: {
    isProduction?: boolean;
    serverKey?: string;
    clientKey?: string;
  });

  isProduction: boolean;
  serverKey: string;
  clientKey: string;

  get(): {
    isProduction: boolean;
    serverKey: string;
    clientKey: string;
  };

  set(options: {
    isProduction?: boolean;
    serverKey?: string;
    clientKey?: string;
  }): void;

  getCoreApiBaseUrl(): string;
  getSnapApiBaseUrl(): string;
  getIrisApiBaseUrl(): string;
}

export default ApiConfig;
