import { BaseClient } from "./BaseClient";
import { IScryfallRequest, ScryfallRequest } from "./IScryfallRequest";
import { IScryfallList } from "../core/IList";
import { ISet, ScryfallSet } from "../core/ScryfallSet";

export interface IListSetsRequest extends IScryfallRequest {}

export class ListSetsRequest extends ScryfallRequest {
  constructor() {
    super("/sets");
  }
}

export interface IGetSetRequest extends IScryfallRequest {}

export class GetSetIdRequest extends ScryfallRequest implements IGetSetRequest {
  constructor(props: { id: string }) {
    super(`/sets/${props.id}`);
  }
}

export class GetSetCodeRequest extends ScryfallRequest implements IGetSetRequest {
  constructor(props: { setCode: string }) {
    super(`/sets/${props.setCode}`);
  }
}

export class GetSetTcgPlayerIdRequest extends ScryfallRequest implements IGetSetRequest {
  constructor(props: { tcgplayerId: number }) {
    super(`/sets/tcgplayer/${props.tcgplayerId}`);
  }
}

export interface ISetClient {
  /**
   * Get all Sets from Scryfall.
   */
  listSets(request: IListSetsRequest): Promise<IScryfallList<ISet>>;

  /**
   * Get a Set from Scryfall.
   */
  getSet(request: IGetSetRequest): Promise<ISet>;
}

export class SetClient extends BaseClient implements ISetClient {
  protected transformSet(setData: Record<string, unknown>): ScryfallSet {
    return new ScryfallSet(setData as unknown as ISet);
  }

  async listSets(request: IListSetsRequest): Promise<IScryfallList<ScryfallSet>> {
    const response = await this.sendRequest(request.url);
    const setsData = this.camelCaseProperties(await response.json());
    const setsList = this.transformList(setsData, this.transformSet);

    return setsList as unknown as IScryfallList<ScryfallSet>;
  }

  async getSet(request: IGetSetRequest): Promise<ScryfallSet> {
    const response = await this.sendRequest(request.url);
    const setData = await response.json();

    return this.transformSet(this.camelCaseProperties(setData));
  }
}
