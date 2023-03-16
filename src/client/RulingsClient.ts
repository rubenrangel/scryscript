import { camel, mapKeys } from "radash";
import { IRulingsClient, ListRulingsRequest } from "./IRulingsClient";
import { ScryfallResponse } from "./ScryfallResponse";
import { ScryfallList } from "../core/list";
import { Ruling } from "../core/ruling";

export class RulingsClient implements IRulingsClient {
  constructor(protected readonly sendRequest: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>) {}

  protected transformList(list: Record<string, any>, dataTransformer: (...args: any[]) => any) {
    const ret = mapKeys(list, (key) => camel(key)) as any;
    ret.data = ret.data.map((d: any) => dataTransformer(d));

    return ret;
  }

  protected transformRuling(ruling: Record<string, any>) {
    const transformedSet = mapKeys(ruling, (key) => camel(key)) as any;
    transformedSet.publishedAt = new Date(transformedSet.publishedAt);

    return transformedSet;
  }

  /**
   * @inheritDoc
   */
  async listRulings(props: ListRulingsRequest): Promise<ScryfallResponse<ScryfallList<Ruling>>> {
    const response = await this.sendRequest(props.url);

    const set = await response.json();

    return this.transformList(set, this.transformRuling);
  }
}
