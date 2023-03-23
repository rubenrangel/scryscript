import { IScryfallObject } from "./IScryfallObject";
import { SetType } from "./SetType";

/**
 * A Set object represents a group of related Magic cards. All Card objects on Scryfall belong to exactly one set.
 *
 * Due to Magic’s long and complicated history, Scryfall includes many un-official sets as a way to group promotional or
 * outlier cards together. Such sets will likely have a code that begins with `p` or `t`, such as `pcel` or `tori`.
 */
export interface ISet extends IScryfallObject {
  /**
   * @inheritDoc
   */
  object: "set";

  /**
   * A unique ID for this set on Scryfall that will not change.
   */
  id: string;

  /**
   * The unique three to five-letter code for this set.
   */
  code: string;

  /**
   * The unique code for this set on MTGO, which may differ from the regular code.
   */
  mtgoCode?: string | null;

  /**
   * The unique code for this set on Magic Arena.
   */
  arenaCode?: string | null;

  /**
   * This set’s ID on TCGplayer’s API, also known as the `groupId`.
   */
  tcgplayerId?: number | null;

  /**
   * The English name of the set.
   */
  name: string;

  /**
   * A link to this set object on Scryfall’s API.
   */
  uri: string;

  /**
   * A link to this set’s permapage on Scryfall’s website.
   */
  scryfallUri: string;

  /**
   * A Scryfall API URI that you can request to begin paginating over the cards in this set.
   */
  searchUri: string;

  /**
   * The date the set was released or the first card was printed in the set (in GMT-8 Pacific time).
   */
  releasedAt?: string | null;

  /**
   * A computer-readable classification for this set.
   */
  setType: SetType | string;

  /**
   * The number of cards in this set.
   */
  cardCount: number;

  /**
   * True if this set was only released in a video game.
   */
  digital: boolean;

  /**
   * The block code for this set, if any.
   */
  blockCode?: string | null;

  /**
   * The block or group name code for this set, if any.
   */
  block?: string | null;

  /**
   * The set code for the parent set, if any. `promo` and `token` sets often have a parent set.
   */
  parentSetCode?: string | null;

  /**
   * The denominator for the set’s printed collector numbers.
   */
  printedSize?: number | null;

  /**
   * True if this set contains only nonfoil cards.
   */
  nonfoilOnly: boolean;

  /**
   * True if this set contains only foil cards.
   */
  foilOnly: boolean;

  /**
   * A URI to an SVG file for this set’s icon on Scryfall’s CDN. Hotlinking this image isn’t recommended, because it may
   * change slightly over time. You should download it and use it locally for your particular user interface needs.
   */
  iconSvgUri: string;
}

export interface IExtendedSet extends ISet {
  /**
   * Get a URL instance of {@link ISet.scryfallUri}.
   */
  get scryfallUrl(): URL;

  get searchUrl(): URL;

  get iconSvgUrl(): URL;
}

export class ScryfallSet implements IExtendedSet {
  static fromSet(props: ISet) {
    return new this(props);
  }

  readonly object = "set" as const;
  readonly id: string;
  readonly code: string;
  readonly mtgoCode: string | null | undefined;
  readonly arenaCode: string | null | undefined;
  readonly tcgplayerId: number | null | undefined;
  readonly name: string;
  readonly uri: string;
  readonly scryfallUri: string;
  readonly searchUri: string;
  readonly releasedAt: string | null | undefined;
  readonly setType: SetType | string;
  readonly cardCount: number;
  readonly digital: boolean;
  readonly blockCode: string | null | undefined;
  readonly block: string | null | undefined;
  readonly parentSetCode: string | null | undefined;
  readonly printedSize: number | null | undefined;
  readonly nonfoilOnly: boolean;
  readonly foilOnly: boolean;
  readonly iconSvgUri: string;

  constructor(props: {
    id: string;
    code: string;
    mtgoCode?: string | null;
    arenaCode?: string | null;
    tcgplayerId?: number | null;
    name: string;
    uri: string;
    scryfallUri: string;
    searchUri: string;
    releasedAt?: string | null;
    setType: SetType | string;
    cardCount: number;
    digital: boolean;
    blockCode?: string | null;
    block?: string | null;
    parentSetCode?: string | null;
    printedSize?: number | null;
    nonfoilOnly: boolean;
    foilOnly: boolean;
    iconSvgUri: string;
  }) {
    this.id = props.id;
    this.code = props.code;
    this.mtgoCode = props.mtgoCode;
    this.arenaCode = props.arenaCode;
    this.tcgplayerId = props.tcgplayerId;
    this.name = props.name;
    this.uri = props.uri;
    this.scryfallUri = props.scryfallUri;
    this.searchUri = props.searchUri;
    this.releasedAt = props.releasedAt;
    this.setType = props.setType;
    this.cardCount = props.cardCount;
    this.digital = props.digital;
    this.blockCode = props.blockCode;
    this.block = props.block;
    this.parentSetCode = props.parentSetCode;
    this.printedSize = props.printedSize;
    this.nonfoilOnly = props.nonfoilOnly;
    this.foilOnly = props.foilOnly;
    this.iconSvgUri = props.iconSvgUri;
  }

  get scryfallUrl() {
    return new URL(this.scryfallUri);
  }

  get searchUrl() {
    return new URL(this.searchUri);
  }

  get iconSvgUrl() {
    return new URL(this.iconSvgUri);
  }

  get releasedAtDate() {
    return this.releasedAt ? new Date(this.releasedAt) : undefined;
  }
}
