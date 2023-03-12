import { ScryfallResponse } from "./ScryfallResponse";
import { ScryfallList } from "../core/list";
import { Set } from "../core/set";

export type GetSetParams = { code: string } | { mtgoCode: string } | { tcgplayerId: number } | { id: string };

export interface ISetClient {
  /**
   * Get all Sets from Scryfall.
   */
  listSets(): Promise<ScryfallResponse<ScryfallList<Set>>>;

  /**
   * Get a Set from Scryfall.
   */
  getSet(params: GetSetParams): Promise<ScryfallResponse<Set>>;
}
