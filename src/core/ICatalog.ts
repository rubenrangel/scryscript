/**
 * A Catalog object contains an array of Magic datapoints (words, card values,
 * etc). Catalog objects are provided by the API as aids for building other
 * Magic software and understanding possible values for a field on Card objects.
 *
 * @see https://scryfall.com/docs/api/catalogs
 */
export interface ICatalog {
  /**
   * A link to the current catalog on Scryfall’s API.
   */
  uri: string;

  /**
   * The number of items in the `data` array.
   */
  totalValues: number;

  /**
   * An array of datapoints.
   */
  data: string[];
}
