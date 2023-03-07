import { SetType } from "./set-type";

/**
 * A Set object represents a group of related Magic cards. All Card objects on Scryfall belong to exactly one set.
 *
 * Due to Magic’s long and complicated history, Scryfall includes many un-official sets as a way to group promotional or outlier cards together. Such sets will likely have a code that begins with `p` or `t`, such as `pcel` or `tori`.
 */
export interface Set {
  /** A unique ID for this set on Scryfall that will not change. */
  id: string;

  /** The unique three to five-letter code for this set. */
  code: string;

  /** The unique code for this set on MTGO, which may differ from the regular code. */
  mtgoCode?: string | null;

  /** The unique code for this set on Magic Arena */
  arenaCode?: string | null;

  /** This set’s ID on TCGplayer’s API, also known as the `groupId`. */
  tcgplayerId?: number | null;

  /** The English name of the set. */
  name: string;

  /** A computer-readable classification for this set. */
  setType: SetType | string;

  /** The date the set was released or the first card was printed in the set (in GMT-8 Pacific time). */
  releasedAt?: Date | null;

  /** The block code for this set, if any. */
  blockCode?: string | null;

  /** The block or group name code for this set, if any. */
  block?: string | null;

  /**  The set code for the parent set, if any. `promo` and `token` sets often have a parent set. */
  parentSetCode?: string | null;

  /** The number of cards in this set. */
  cardCount: number;

  /** The denominator for the set’s printed collector numbers. */
  printedSize?: number | null;

  /** True if this set was only released in a video game. */
  digital: boolean;

  /** True if this set contains only foil cards. */
  foilOnly: boolean;

  /** True if this set contains only nonfoil cards. */
  nonfoilOnly: boolean;

  /** A link to this set’s permapage on Scryfall’s website. */
  scryfallUri: string;

  /** A link to this set object on Scryfall’s API. */
  uri: string;

  /** A URI to an SVG file for this set’s icon on Scryfall’s CDN. Hotlinking this image isn’t recommended, because it may change slightly over time. You should download it and use it locally for your particular user interface needs. */
  iconSvgUri: string;

  /** A Scryfall API URI that you can request to begin paginating over the cards in this set. */
  searchUri: string;
}
