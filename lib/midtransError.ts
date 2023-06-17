export class MidtransError extends Error {
  httpStatusCode: number | null;
  ApiResponse: any | null;
  rawHttpClientData: any | null;

  constructor(
    message: string,
    httpStatusCode: number | null = null,
    ApiResponse: any | null = null,
    rawHttpClientData: any | null = null
  ) {
    super(message);
    // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name;

    this.httpStatusCode = httpStatusCode;
    this.ApiResponse = ApiResponse;
    this.rawHttpClientData = rawHttpClientData;
  }
}
