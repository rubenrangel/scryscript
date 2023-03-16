import { BaseClient } from "./BaseClient";
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

export class SetClient extends BaseClient implements ISetClient {
  protected transformSet(set: Record<string, unknown>): Set {
    set.releasedAt = new Date(set.releasedAt as string);

    return set as unknown as Set;
  }

  async listSets(): Promise<ScryfallResponse<ScryfallList<Set>>> {
    const response = await this.sendRequest("https://api.scryfall.com/sets");

    const setsData = this.camelCaseProperties(await response.json());
    const setsList = this.transformList(setsData, this.transformSet);

    return setsList as unknown as ScryfallList<Set>;
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

    const setData = this.camelCaseProperties(await response.json());
    return this.transformSet(setData);
  }
}
