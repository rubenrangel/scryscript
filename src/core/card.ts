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
