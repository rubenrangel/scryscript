import { ImageUris } from "./card-face";

export enum BorderColor {
  BLACK = "black",
  WHITE = "white",
  BORDERLESS = "borderless",
  SILVER = "silver",
  GOLD = "gold",
}

export enum Finish {
  FOIL = "foil",
  NONFOIL = "nonfoil",
  ETCHED = "etched,",
}

export enum Frame {
  /**
   * The original Magic card frame, starting from Limited Edition Alpha.
   */
  _1993 = "1993",

  /**
   * The updated classic frame starting from Mirage block.
   */
  _1997 = "1997",

  /**
   * The “modern” Magic card frame, introduced in Eighth Edition and Mirrodin block.
   */
  _2003 = "2003",

  /**
   * The holofoil-stamp Magic card frame, introduced in Magic 2015.
   */
  _2015 = "2015",

  /**
   * The frame used on cards from the future.
   */
  FUTURE = "future",
}

/**
 * Frame artwork applied over a particular frame.
 */
export enum FrameEffect {
  /**
   * The cards have a legendary crown.
   */
  LEGENDARY = "legendary",

  /**
   * The miracle frame effect.
   */
  MIRACLE = "miracle",

  /**
   * The Nyx-touched frame effect.
   */
  NYX_TOUCHED = "nyxtouched",

  /**
   * The draft-matters frame effect.
   */
  DRAFT = "draft",

  /**
   * The Devoid frame effect.
   */
  DEVOID = "devoid",

  /**
   * The Odyssey tombstone mark.
   */
  TOMBSTONE = "tombstone",

  /**
   * A colorshifted frame.
   */
  COLORSHIFTED = "colorshifted",

  /**
   * The FNM-style inverted frame.
   */
  INVERTED = "inverted",

  /**
   * The sun and moon transform marks.
   */
  SUN_MOON_DFC = "sunmoondfc",

  /**
   * The compass and land transform marks.
   */
  COMPASS_LAND_DFC = "compasslanddfc",

  /**
   * The Origins and planeswalker transform marks.
   */
  ORIGIN_PW_DFC = "originpwdfc",

  /**
   * The moon and Eldrazi transform marks.
   */
  MOON_ELDRAZI_DFC = "mooneldrazidfc",

  /**
   * The waxing and waning crescent moon transform marks.
   */
  WAXING_AND_WANING_MOON_DFC = "waxingandwaningmoondfc",

  /**
   * A custom Showcase frame.
   */
  SHOWCASE = "showcase",

  /**
   * An extended art frame.
   */
  EXTENDED_ART = "extendedart",

  /**
   * The cards have a companion frame.
   */
  COMPANION = "companion",

  /**
   * The cards have an etched foil treatment.
   */
  ETCHED = "etched",

  /**
   * The cards have the snowy frame effect.
   */
  SNOW = "snow",

  /**
   * The cards have the Lesson frame effect.
   */
  LESSON = "lesson",

  /**
   * The cards have the Shattered Glass frame effect.
   */
  SHATTERED_GLASS = "shatteredglass",

  /**
   * The cards have More Than Meets the Eye™ marks.
   */
  CONVERT_DFC = "convertdfc",

  /**
   * The cards have fan transforming marks.
   */
  FAN_DFC = "fandfc",

  /**
   * The cards have the Upside Down transforming marks.
   */
  UPSIDE_DOWN_DFC = "upsidedowndfc",
}

export enum Game {
  PAPER = "paper",
  ARENA = "arena",
  MTGO = "mtgo",
}

export enum ImageStatus {
  MISSING = "missing",
  PLACEHOLDER = "placeholder",
  LOW_RES = "lowres",
  HIGH_RES_SCAN = "highres_scan",
}

export type Prices = {
  usd?: string | null;
  usdFoil?: string | null;
  usdEtched?: string | null;
  eur?: string | null;
  eurFoil?: string | null;
  tix?: string | null;
} & Record<string, string | null>;

export enum Rarity {
  COMMON = "common",
  UNCOMMON = "uncommon",
  RARE = "rare",
  SPECIAL = "special",
  MYTHIC = "mythic",
  BONUS = "bonus",
}

export enum SecurityStamp {
  OVAL = "oval",
  TRIANGLE = "triangle",
  ACORN = "acorn",
  CIRCLE = "circle",
  ARENA = "arena",
  HEART = "heart",
}

export interface CardPrintFields {
  /**
   * The name of the illustrator of this card. Newly spoiled cards may not have this field yet.
   */
  artist?: string | null;

  /**
   * The lit Unfinity attractions lights on this card, if any.
   */
  attractionLights?: number[] | null;

  /**
   * Whether this card is found in boosters.
   */
  booster: boolean;

  /**
   * This card’s border color.
   */
  borderColor: BorderColor | string;

  /**
   * The Scryfall ID for the card back design present on this card.
   */
  cardBackId: string;

  /**
   * This card’s collector number. Note that collector numbers can contain non-numeric characters, such as letters or `★`.
   */
  collectorNumber: string;

  /**
   * True if you should consider avoiding use of this print downstream.
   *
   * @see https://scryfall.com/blog/220
   */
  contentWarning?: boolean | null;

  /**
   * True if this card was only released in a video game.
   */
  digital: boolean;

  /**
   * An array of computer-readable flags that indicate what finishes are available for the card.
   */
  finishes: Array<Finish | string>;

  /**
   * The just-for-fun name printed on the card (such as for Godzilla series cards).
   */
  flavorName?: string | null;

  /**
   * The flavor text, if any.
   */
  flavorText?: string | null;

  /**
   * This card’s frame effects, if any.
   */
  frameEffects?: Array<FrameEffect | string> | null;

  /**
   * This card’s frame layout.
   */
  frame: Frame | string;

  /**
   * True if this card’s artwork is larger than normal.
   */
  fullArt: boolean;

  /**
   * A list of games that this card print is available in.
   */
  games: Array<Game | string>;

  /**
   * True if this card’s imagery is high resolution.
   */
  highresImage: boolean;

  /**
   * A unique identifier for the card artwork that remains consistent across reprints. Newly spoiled cards may not have
   * this field yet.
   */
  illustrationId?: string | null;

  /**
   * A computer-readable indicator for the state of this card’s image.
   */
  imageStatus: ImageStatus | string;

  /**
   * An object listing available imagery for this card.
   */
  imageUris?: ImageUris | null;

  /**
   * An object containing daily price information for this card.
   */
  prices: Prices;

  /**
   *  The localized name printed on this card, if any.
   */
  printedName?: string | null;

  /**
   * The localized text printed on this card, if any.
   */
  printedText?: string | null;

  /**
   * The localized type line printed on this card, if any.
   */
  printedTypeLine?: string | null;

  /**
   * True if this card is a promotional print.
   */
  promo: boolean;

  /**
   * An array of strings describing what categories of promo cards this card falls into.
   */
  promoTypes?: string[] | null;

  /**
   * An object providing URIs to this card’s listing on major marketplaces.
   */
  purchaseUris: Record<string, string>;

  /**
   * This card’s rarity.
   */
  rarity: Rarity | string;

  /**
   * An object providing URIs to this card’s listing on other Magic: The Gathering online resources.
   */
  relatedUris: Record<string, string>;

  /**
   * The date this card was first released.
   */
  releasedAt: Date;

  /**
   * True if this card is a reprint.
   */
  reprint: boolean;

  /**
   * A link to this card’s set on Scryfall’s website.
   */
  scryfallSetUri: string;

  /**
   * This card’s full set name.
   */
  setName: string;

  /**
   * A link to where you can begin paginating this card’s set on the Scryfall API.
   */
  setSearchUri: string;

  /**
   * The type of set this printing is in.
   */
  setType: string;

  /**
   * A link to this card’s set object on Scryfall’s API.
   */
  setUri: string;

  /**
   * This card’s set code.
   */
  set: string;

  /**
   * This card’s Set object UUID.
   */
  setId: string;

  /**
   * True if this card is a Story Spotlight.
   */
  storySpotlight: boolean;

  /**
   * True if the card is printed without text.
   */
  textless: boolean;

  /**
   * Whether this card is a variation of another printing.
   */
  variation: boolean;

  /**
   * The printing ID of the printing this card is a variation of.
   */
  variationOf?: string | null;

  /**
   * The security stamp on this card, if any.
   */
  securityStamp?: SecurityStamp | string | null;

  /**
   * This card’s watermark, if any.
   */
  watermark?: string | null;

  preview?: {
    /**
     * The date this card was previewed.
     */
    previewedAt?: Date | null;

    /**
     * A link to the preview for this card.
     */
    sourceUri?: string | null;

    /**
     * The name of the source that previewed this card.
     */
    source?: string | null;
  } | null;
}
