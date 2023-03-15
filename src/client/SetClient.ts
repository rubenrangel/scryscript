import { camel, mapKeys } from "radash";
import { GetSetProps, ISetClient, SetCodeProps, SetIdProps, SetTcgPlayerIdProps } from "./ISetClient";
import { ScryfallResponse } from "./ScryfallResponse";
import { ScryfallList } from "../core/list";
import { Set } from "../core/set";

function isSetIdProps(props: any): props is SetIdProps {
  return props.hasOwnProperty("id");
}

function isSetCodeProps(props: any): props is SetCodeProps {
  return props.hasOwnProperty("code");
}

// function isSetMtgoCodeProps(props: any): props is SetMtgoCodeProps {
//   return props.hasOwnProperty("mtgoCode");
// }

function isSetTcgPlayerIdProps(props: any): props is SetTcgPlayerIdProps {
  return props.hasOwnProperty("tcgplayerId");
}

export class SetClient implements ISetClient {
  constructor(protected readonly sendRequest: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>) {}

  protected transformList(list: Record<string, any>, dataTransformer: (...args: any[]) => any) {
    const ret = mapKeys(list, (key) => camel(key)) as any;
    ret.data = ret.data.map((d: any) => dataTransformer(d));

    return ret;
  }

  protected transformSet(set: Record<string, any>) {
    const transformedSet = mapKeys(set, (key) => camel(key)) as any;
    transformedSet.releasedAt = new Date(transformedSet.releasedAt);

    return transformedSet;
  }

  async listSets(): Promise<ScryfallResponse<ScryfallList<Set>>> {
    const response = await this.sendRequest("https://api.scryfall.com/sets");

    const sets = await response.json();

    return this.transformList(sets, this.transformSet);
  }

  async getSet(params: GetSetProps): Promise<ScryfallResponse<Set>> {
    let url: string;

    if (isSetIdProps(params)) {
      url = `https://api.scryfall.com/sets/${params.id}`;
    } else if (isSetCodeProps(params)) {
      url = `https://api.scryfall.com/sets/${params.code}`;
    }
    // else if (isSetMtgoCodeProps(params)) {
    //   url = `https://api.scryfall.com/sets/${params.mtgoCode}`;
    // }
    else if (isSetTcgPlayerIdProps(params)) {
      url = `https://api.scryfall.com/sets/tcgplayer/${params.tcgplayerId}`;
    } else {
      throw new Error("Unsupported Set request params");
    }

    const response = await this.sendRequest(url);

    const set = await response.json();

    return this.transformSet(set);
  }
}
