import { IScryfallObject } from "./IScryfallObject";

/**
 * Rulings represent Oracle rulings, Wizards of the Coast set release notes, or Scryfall notes for a particular card.
 *
 * If two cards have the same name, they will have the same set of rulings objects. If a card has rulings, it usually
 * has more than one.
 *
 * Rulings with a `scryfall` source have been added by the Scryfall team, either to provide additional context for the
 * card, or explain how the card works in an unofficial format (such as Duel Commander).
 */
export interface IRuling extends IScryfallObject {
  /**
   * @inheritDoc
   */
  object: "ruling";

  /**
   * A computer-readable string indicating which company produced this ruling, either `wotc` or `scryfall`.
   */
  source: string;

  /**
   * The date when the ruling or note was published
   */
  publishedAt: string;

  /**
   * The text of the ruling.
   */
  comment: string;

  /**
   * Oracle ID of the card.
   */
  oracleId?: string | null;
}

export interface IExtendedRuling extends IRuling {
  publishedAtDate: Date;
}

export class Ruling implements IExtendedRuling {
  static fromRuling(ruling: IRuling) {
    return new this(ruling);
  }

  object = "ruling" as const;
  source: string;
  publishedAt: string;
  comment: string;
  oracleId: string | null | undefined;

  constructor(props: { comment: string; oracleId?: string | null; publishedAt: string; source: string }) {
    this.comment = props.comment;
    this.oracleId = props.oracleId;
    this.publishedAt = props.publishedAt;
    this.source = props.source;
  }

  get publishedAtDate() {
    return new Date(this.publishedAt);
  }
}
