import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { MidtransError } from './midtransError';

export class HttpClient {
  parent: object;
  http_client: AxiosInstance;

  constructor(parentObj: object = {}) {
    this.parent = parentObj;
    this.http_client = axios.create();
  }

  public request(
    httpMethod: string,
    serverKey: string,
    requestUrl: string,
    firstParam?: object | string | null,
    secondParam?: object | string | null
  ): Promise<object> {
    const headers = {
      'content-type': 'application/json',
      accept: 'application/json',
      'user-agent': 'midtransclient-nodejs/1.3.0',
    };

    let reqBodyPayload: object | string = {};
    let reqQueryParam: object | string = {};

    if (httpMethod.toLowerCase() === 'get') {
      reqQueryParam = firstParam == null ? {} : firstParam;
      reqBodyPayload = secondParam == null ? {} : secondParam;
    } else {
      reqBodyPayload = firstParam == null ? {} : firstParam;
      reqQueryParam = secondParam == null ? {} : secondParam;
    }

    const thisInstance = this;

    return new Promise((resolve, reject) => {
      if (typeof reqBodyPayload === 'string') {
        try {
          reqBodyPayload = JSON.parse(reqBodyPayload);
        } catch (err) {
          reject(
            new MidtransError(
              `Failed to parse 'body parameters' string as JSON. Use JSON string or Object as 'body parameters'. Message: ${err}`
            )
          );
        }
      }

      if (typeof reqQueryParam === 'string') {
        try {
          reqQueryParam = JSON.parse(reqQueryParam);
        } catch (err) {
          reject(
            new MidtransError(
              `Failed to parse 'query parameters' string as JSON. Use JSON string or Object as 'query parameters'. Message: ${err}`
            )
          );
        }
      }

      thisInstance.http_client({
        method: httpMethod,
        headers: headers,
        url: requestUrl,
        data: reqBodyPayload,
        params: reqQueryParam,
        auth: {
          username: serverKey,
          password: '',
        },
      })
        .then((res: AxiosResponse) => {
          if (
            res.data.hasOwnProperty('status_code') &&
            res.data.status_code >= 400 &&
            res.data.status_code != 407
          ) {
            reject(
              new MidtransError(
                `Midtrans API is returning API error. HTTP status code: ${res.data.status_code}. API response: ${JSON.stringify(
                  res.data
                )}`,
                res.data.status_code,
                res.data,
                res
              )
            );
          }
          resolve(res.data);
        })
        .catch((err) => {
          const res = err.response;
          if (typeof res !== 'undefined' && res.status >= 400) {
            reject(
              new MidtransError(
                `Midtrans API is returning API error. HTTP status code: ${res.status}. API response: ${JSON.stringify(
                  res.data
                )}`,
                res.status,
                res.data,
                res
              )
            );
          } else if (typeof res === 'undefined') {
            reject(
              new MidtransError(
                `Midtrans API request failed. HTTP response not found, likely connection failure. Message: ${JSON.stringify(
                  err.message
                )}`,
                null,
                null,
                err
              )
            );
          }
          reject(err);
        });
    });
  }
}
