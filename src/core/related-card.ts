import { IScryfallObject } from "./iscryfall-object";

export enum RelatedCardComponent {
  TOKEN = "token",
  MELD_PART = "meld_part",
  MELD_RESULT = "meld_result",
  COMBO_PIECE = "combo_piece",
}

/**
 * Cards that are closely related to other cards (because they call them by name, or generate a token, or meld, etc.)
 * have a `allParts` property that contains Related Card objects.
 *
 * @see https://scryfall.com/docs/api/cards#related-card-objects
 */
export interface RelatedCard extends IScryfallObject {
  /**
   * @inheritDoc
   */
  object: "related_card";

  /**
   * A unique ID for this card in Scryfall’s database.
   */
  id: string;

  /**
   * A field explaining what role this card plays in this relationship.
   */
  component: RelatedCardComponent | string;

  /**
   * The name of this particular related card.
   */
  name: string;

  /**
   * The type line of this card.
   */
  type_line: string;

  /**
   * A URI where you can retrieve a full object describing this card on Scryfall’s API.
   */
  uri: string;
}
