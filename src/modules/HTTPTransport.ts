enum METHODS {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE',
}

type Options = {
    method?: string;
    headers?: Record<string, string>;
    data?: { [key: string]: unknown };
    timeout?: number;
};

export default class HTTPTransport {
  get = (url: string, options: Options = {}) => this.request(url, { ...options, method: METHODS.GET }, options.timeout);

  put = (url: string, options: Options = {}) => this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  post = (url: string, options: Options = {}) => this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  delete = (url: string, options: Options = {}) => this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  request(url: string, options: Options, timeout: number = 5000) {
    const { method = METHODS.GET, headers = {}, data = {} } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(
        method,
        method === METHODS.GET && Boolean(data)
          ? `${url}${queryStringify(data)}`
          : url,
      );

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        // @ts-ignore
        xhr.send(data);
      }
    });
  }
}

function queryStringify(data: { [key: string]: unknown }) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }
  const keys: string[] = Object.keys(data);
  return keys.reduce((result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`, '?');
}
