import { CardFace, ImageUris } from "./card-face";
import { Color } from "./color";
import { RelatedCard } from "./related-card";

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

export enum Layout {
  /**
   * A standard Magic card with one face.
   */
  NORMAL = "normal",

  /**
   * A split-faced card.
   */
  SPLIT = "split",

  /**
   * Cards that invert vertically with the flip keyword.
   */
  FLIP = "flip",

  /**
   * Double-sided cards that transform.
   */
  TRANSFORM = "transform",

  /**
   * Double-sided cards that can be played either-side.
   */
  MODAL_DFC = "modal_dfc",

  /**
   * Cards with meld parts printed on the back.
   */
  MELD = "meld",

  /**
   * Cards with Level Up.
   */
  LEVELER = "leveler",

  /**
   * Class-type enchantment cards.
   */
  CLASS = "class",

  /**
   * Saga-type cards.
   */
  SAGA = "saga",

  /**
   * Cards with an Adventure spell part.
   */
  ADVENTURE = "adventure",

  /**
   * Plane and Phenomenon-type cards.
   */
  PLANAR = "planar",

  /**
   * Scheme-type cards.
   */
  SCHEME = "scheme",

  /**
   * Vanguard-type cards.
   */
  VANGUARD = "vanguard",

  /**
   * Token cards.
   */
  TOKEN = "token",

  /**
   * Tokens with another token printed on the back.
   */
  DOUBLE_FACED_TOKEN = "double_faced_token",

  /**
   * Emblem cards.
   */
  EMBLEM = "emblem",

  /**
   * Cards with Augment.
   */
  AUGMENT = "augment",

  /**
   * Host-type cards.
   */
  HOST = "host",

  /**
   * Art Series collectable double-faced cards.
   */
  ART_SERIES = "art_series",

  /**
   * A Magic card with two sides that are unrelated.
   */
  REVERSIBLE_CARD = "reversible_card",
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

export enum Legalities {
  LEGAL = "legal",
  NOT_LEGAL = "not_legal",
  RESTRICTED = "restricted",
  BANNED = "banned",
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

export interface CardFields {
  /**
   * This card’s Arena ID, if any. A large percentage of cards are not available on Arena and do not have this ID.
   */
  arenaId?: number | null;

  /**
   * A unique ID for this card in Scryfall’s database.
   */
  id: string;

  /**
   * A language code for this printing.
   */
  lang: string;

  /**
   * This card’s Magic Online ID (also known as the Catalog ID), if any. A large percentage of cards are not available on Magic Online and do not have this ID.
   */
  mtgoId?: number | null;

  /**
   * This card’s foil Magic Online ID (also known as the Catalog ID), if any. A large percentage of cards are not available on Magic Online and do not have this ID.
   */
  mtgoFoilId?: number | null;

  /**
   * This card’s multiverse IDs on Gatherer, if any, as an array of integers. Note that Scryfall includes many promo cards, tokens, and other esoteric objects that do not have these identifiers.
   */
  multiverseIds?: number[] | null;

  /**
   * This card’s ID on TCGplayer’s API, also known as the `productId`.
   */
  tcgPlayerId?: number | null;

  /**
   * This card’s ID on TCGplayer’s API, for its etched version if that version is a separate product.
   */
  tcgPlayerEtchedId?: number | null;

  /**
   * This card’s ID on Cardmarket’s API, also known as the `idProduct`.
   */
  cardmarketId?: number | null;

  /**
   * A unique ID for this card’s oracle identity. This value is consistent across reprinted card editions, and unique among different cards with the same name (tokens, Unstable variants, etc).
   */
  oracleId: string;

  /**
   * A link to where you can begin paginating all re/prints for this card on Scryfall’s API.
   */
  printsSearchUri: string;

  /**
   * A link to this card’s rulings list on Scryfall’s API.
   */
  rulingsUri: string;

  /**
   * A link to this card’s permapage on Scryfall’s website.
   */
  scryfallUri: string;

  /**
   * A link to this card object on Scryfall’s API.
   */
  uri: string;
}

export interface CardGameplayFields {
  /**
   * If this card is closely related to other cards, this property will be an array with {@link RelatedCard}.
   */
  allParts?: RelatedCard[] | null;

  /**
   * An array of {@link CardFace} objects, if this card is multifaced.
   */
  cardFaces?: CardFace[] | null;

  /**
   * The card’s mana value. Note that some funny cards have fractional mana costs.
   */
  cmc: number;

  /**
   * This card’s color identity.
   */
  colorIdentity: Array<Color | string>;

  /**
   * The colors in this card’s color indicator, if any. A null value for this field indicates the card does not have
   * one.
   */
  colorIndicator?: Array<Color | string> | null;

  /**
   * This card’s colors, if the overall card has colors defined by the rules. Otherwise, the colors will be on
   * {@link cardFaces}.
   */
  colors?: Array<Color | string> | null;

  /**
   * This card’s overall rank/popularity on EDHREC. Not all cards are ranked.
   */
  edhrecRank?: number | null;

  /**
   * This card’s hand modifier, if it is Vanguard card. This value will contain a delta, such as `-1`.
   */
  handModifier?: string | null;

  /**
   *  An array of keywords that this card uses, such as `Flying` and `Cumulative upkeep`.
   */
  keywords: string[];

  /**
   * A code for this card’s layout.
   */
  layout: Layout | string;

  /**
   * An object describing the legality of this card across play formats.
   */
  legalities: Record<string, Legalities | string>;

  /**
   * This card’s life modifier, if it is Vanguard card. This value will contain a delta, such as `+2`.
   */
  lifeModifier?: string | null;

  /**
   * This loyalty if any. Note that some cards have loyalties that are not numeric, such as `X`.
   */
  loyalty?: string | null;

  /**
   * The mana cost for this card. This value will be any empty string "" if the cost is absent. Remember that per the
   * game rules, a missing mana cost and a mana cost of `{0}` are different values. Multi-faced cards will report this
   * value in {@link cardFaces}.
   */
  manaCost?: string | null;

  /**
   * The name of this card. If this card has multiple faces, this field will contain both names separated by ` // `.
   */
  name: string;

  /**
   * The Oracle text for this card, if any.
   */
  oracleText?: string | null;

  /**
   * True if this card is oversized.
   */
  oversized: boolean;

  /**
   * This card’s rank/popularity on Penny Dreadful. Not all cards are ranked.
   */
  pennyRank?: number | null;

  /**
   * This card’s power, if any. Note that some cards have powers that are not numeric, such as `*`.
   */
  power?: string;

  /**
   * Colors of mana that this card could produce.
   */
  producedMana?: Color[] | null;

  /**
   * True if this card is on the Reserved List.
   */
  reserved: boolean;

  /**
   * This card’s toughness, if any. Note that some cards have toughnesses that are not numeric, such as `*`.
   */
  toughness?: string | null;

  /**
   * The type line of this card.
   */
  typeLine: string;
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
