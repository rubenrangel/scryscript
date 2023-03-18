import { ScryfallResponse } from "./ScryfallResponse";
import { ScryfallList } from "../core/list";
import { Set } from "../core/set";

export interface IListSetsRequest {
  readonly url: string;
}

export class ListSetsRequest {
  public readonly url: string;

  constructor() {
    this.url = "/sets";
  }
}

export interface GetSetRequest {
  /**
   * The Scryfall API path to use in the request.
   *
   * Does not include the host or protocol.
   *
   * @example /sets/1234
   */
  readonly url: string;
}

export class GetSetIdRequest implements GetSetRequest {
  public readonly url: string;

  constructor(props: { id: string }) {
    this.url = `/sets/${props.id}`;
  }
}

export class GetSetCodeRequest implements GetSetRequest {
  public readonly url: string;

  constructor(props: { setCode: string }) {
    this.url = `/sets/${props.setCode}`;
  }
}

export class GetSetTcgPlayerIdRequest implements GetSetRequest {
  public readonly url: string;

  constructor(props: { tcgplayerId: number }) {
    this.url = `/sets/tcgplayer/${props.tcgplayerId}`;
  }
}

export interface ISetClient {
  /**
   * Get all Sets from Scryfall.
   */
  listSets(request: IListSetsRequest): Promise<ScryfallResponse<ScryfallList<Set>>>;

  /**
   * Get a Set from Scryfall.
   */
  getSet(request: GetSetRequest): Promise<ScryfallResponse<Set>>;
}
