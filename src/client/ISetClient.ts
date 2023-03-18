import { IScryfallRequest, ScryfallRequest } from "./IScryfallRequest";
import { ScryfallResponse } from "./ScryfallResponse";
import { IScryfallList } from "../core/IList";
import { ISet } from "../core/ISet";

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
  listSets(request: IListSetsRequest): Promise<ScryfallResponse<IScryfallList<ISet>>>;

  /**
   * Get a Set from Scryfall.
   */
  getSet(request: IGetSetRequest): Promise<ScryfallResponse<ISet>>;
}
