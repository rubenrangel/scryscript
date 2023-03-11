import { Color } from "./color";
import { IScryfallObject } from "./iscryfall-object";

export type ImageUris = Record<string, string>;

/**
 * Multiface cards have a `cardFaces` property containing at least two Card Face objects.
 */
export interface CardFace extends IScryfallObject {
  /**
   * @inheritDoc
   */
  object: "card_face";

  /**
   * The name of the illustrator of this card face. Newly spoiled cards may not have this field yet.
   */
  artist?: string | null;

  /**
   * The mana value of this particular face, if the card is reversible.
   */
  cmc?: number | null;

  /**
   * The colors in this face’s color indicator, if any.
   */
  colorIndicator?: Color[] | null;

  /**
   * This face’s colors, if the game defines colors for the individual face of this card.
   */
  colors?: Color[] | null;

  /**
   * The flavor text printed on this face, if any.
   */
  flavorText?: string | null;

  /**
   * A unique identifier for the card face artwork that remains consistent across reprints. Newly spoiled cards may not
   * have this field yet.
   */
  illustrationId?: string | null;

  /**
   * An object providing URIs to imagery for this face, if this is a double-sided card. If this card is not
   * double-sided, then the `imageUris` property will be part of the parent object instead.
   */
  imageUris?: ImageUris | null;

  /**
   * The layout of this card face, if the card is reversible.
   */
  /**
   * This face’s loyalty, if any.
   */
  layout?: string | null;

  /**
   * The mana cost for this face. This value will be any empty string if the cost is absent. Remember that per the game
   * rules, a missing mana cost and a mana cost of `{0}` are different values.
   */
  manaCost: string;

  /**
   * The name of this particular face.
   */
  name: string;

  /**
   * The Oracle ID of this particular face, if the card is reversible.
   */
  oracleId?: string | null;

  /**
   * The Oracle text for this face, if any.
   */
  oracleText?: string | null;

  /**
   * This face’s power, if any. Note that some cards have powers that are not numeric, such as `*`.
   */
  power?: string | null;

  /**
   * The localized name printed on this face, if any.
   */
  printedName?: string | null;

  /**
   * The localized text printed on this face, if any.
   */
  printedText?: string | null;

  /**
   * The localized type line printed on this face, if any.
   */
  printedTypeLine?: string | null;

  /**
   * This face’s toughness, if any.
   */
  toughness?: string | null;

  /**
   * The type line of this particular face, if the card is reversible.
   */
  typeLine?: string | null;

  /**
   * The watermark on this particulary card face, if any.
   */
  watermark?: string | null;
}
