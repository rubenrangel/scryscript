import { BaseClient } from "./BaseClient";
import { IGetSetRequest, ISetClient, IListSetsRequest } from "./ISetClient";
import { ScryfallResponse } from "./ScryfallResponse";
import { IScryfallList } from "../core/IList";
import { ISet } from "../core/ISet";

export class SetClient extends BaseClient implements ISetClient {
  protected transformSet(set: Record<string, unknown>): ISet {
    set.releasedAt = new Date(set.releasedAt as string);

    return set as unknown as ISet;
  }

  async listSets(request: IListSetsRequest): Promise<ScryfallResponse<IScryfallList<ISet>>> {
    const response = await this.sendRequest(request.url);
    const setsData = this.camelCaseProperties(await response.json());
    const setsList = this.transformList(setsData, this.transformSet);

    return setsList as unknown as IScryfallList<ISet>;
  }

  async getSet(request: IGetSetRequest): Promise<ScryfallResponse<ISet>> {
    const response = await this.sendRequest(request.url);
    const setData = await response.json();

    return this.transformSet(this.camelCaseProperties(setData));
  }
}
