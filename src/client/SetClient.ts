import { BaseClient } from "./BaseClient";
import { IGetSetRequest, ISetClient, IListSetsRequest } from "./ISetClient";
import { ScryfallResponse } from "./ScryfallResponse";
import { ScryfallList } from "../core/list";
import { Set } from "../core/set";

export class SetClient extends BaseClient implements ISetClient {
  protected transformSet(set: Record<string, unknown>): Set {
    set.releasedAt = new Date(set.releasedAt as string);

    return set as unknown as Set;
  }

  async listSets(request: IListSetsRequest): Promise<ScryfallResponse<ScryfallList<Set>>> {
    const response = await this.sendRequest(request.url);
    const setsData = this.camelCaseProperties(await response.json());
    const setsList = this.transformList(setsData, this.transformSet);

    return setsList as unknown as ScryfallList<Set>;
  }

  async getSet(request: IGetSetRequest): Promise<ScryfallResponse<Set>> {
    const response = await this.sendRequest(request.url);
    const setData = await response.json();

    return this.transformSet(this.camelCaseProperties(setData));
  }
}
