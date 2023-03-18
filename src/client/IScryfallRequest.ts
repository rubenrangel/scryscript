export interface IScryfallRequest {
  /**
   * The Scryfall API path to use in the request.
   *
   * Does not include the host or protocol.
   *
   * @example /cards/1234/rulings
   */
  readonly url: string;
}

export abstract class ScryfallRequest implements IScryfallRequest {
  readonly url: string;

  protected constructor(url: string) {
    this.url = url;
  }
}
