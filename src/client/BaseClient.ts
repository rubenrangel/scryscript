import { camel, mapEntries } from "radash";

/**
 * Base Scryfall API client.
 */
export abstract class BaseClient {
  constructor(
    protected readonly baseOrigin = "https://api.scryfall.com",
    protected readonly http: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = fetch
  ) {}

  protected async sendRequest(url: string): Promise<Response> {
    const response = await this.http(new URL(url, this.baseOrigin).toString());

    if (response.status >= 400) {
      // return IError
      throw this.camelCaseProperties(await response.json());
    }

    return response;
  }

  /**
   * Get a copy of the supplied object, but with all properties in camel case.
   */
  protected camelCaseProperties(obj: Record<string, unknown>): Record<string, unknown> {
    return mapEntries(obj, (key, value) => {
      let v;

      if (value instanceof Array) {
        v = value.map((innerValue) =>
          innerValue instanceof Object ? this.camelCaseProperties(innerValue) : innerValue
        );
      } else if (value instanceof Object) {
        v = this.camelCaseProperties(value as unknown as Record<string, unknown>);
      } else {
        v = value;
      }

      return [camel(key), v];
    });
  }

  protected transformList(list: Record<string, unknown>, dataTransformer: (...args: any[]) => unknown) {
    list.data = (list.data as Array<unknown>).map((d: any) => dataTransformer(d));

    return list;
  }
}
