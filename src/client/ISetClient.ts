import { ScryfallResponse } from "./ScryfallResponse";
import { ScryfallList } from "../core/list";
import { Set } from "../core/set";

export type SetIdProps = {
  id: string;
};

export type SetCodeProps = {
  code: string;
};

// export type SetMtgoCodeProps = {
//   mtgoCode: string;
// };

export type SetTcgPlayerIdProps = {
  tcgplayerId: number;
};

export type GetSetProps =
  | SetIdProps
  | SetCodeProps
  // | SetMtgoCodeProps
  | SetTcgPlayerIdProps;

export interface ISetClient {
  /**
   * Get all Sets from Scryfall.
   */
  listSets(): Promise<ScryfallResponse<ScryfallList<Set>>>;

  /**
   * Get a Set from Scryfall.
   */
  getSet(params: GetSetProps): Promise<ScryfallResponse<Set>>;
}
