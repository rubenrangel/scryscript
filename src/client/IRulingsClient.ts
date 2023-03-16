import { ScryfallResponse } from "./ScryfallResponse";
import { ScryfallList } from "../core/list";
import { Ruling } from "../core/ruling";

/**
 * A request to retrieve rulings for a card.
 */
export interface ListRulingsRequest {
  /**
   * The Scryfall API path to use in the request.
   *
   * Does not include the host or protocol.
   *
   * @example /cards/1234/rulings
   */
  readonly url: string;
}

/**
 * Request to retrieve rulings for the given {@link CardFields.id Scryfall card ID}.
 */
export class CardIdRulingsProps implements ListRulingsRequest {
  /**
   * @inheritDoc
   */
  public readonly url;

  /**
   * @param props.cardId The {@link CardFields.id Scryfall card ID}.
   */
  constructor(props: { cardId: string }) {
    this.url = `/cards/${props.cardId}/rulings`;
  }
}

/**
 * Request to retrieve rulings for the given {@link CardPrintFields.set set code} and
 * {@link CardPrintFields.collectorNumber collector number}.
 */
export class SetCodeCollectorNumberRulingsProps implements ListRulingsRequest {
  /**
   * @inheritDoc
   */
  public readonly url;

  /**
   * @param props.setCode The {@link CardPrintFields.set set code} of the card.
   * @param props.collectorNumber The {@link CardPrintFields.collectorNumber collector number} of the card.
   */
  constructor(props: { setCode: string; collectorNumber: string }) {
    this.url = `/cards/${props.setCode}/${props.collectorNumber}/rulings`;
  }
}

/**
 * Request to retrieve rulings for the given {@link CardFields.mtgoId MTGO card ID}.
 */
export class MtgoIdRulingsRequest implements ListRulingsRequest {
  /**
   * @inheritDoc
   */
  public readonly url;

  /**
   * @param props.mtgoId The card's {@link CardFields.mtgoId MTGO ID}.
   */
  constructor(props: { mtgoId: string }) {
    this.url = `/cards/mtgo/${props.mtgoId}/rulings`;
  }
}

/**
 * Request to retrieve rulings for the given {@link CardFields.mtgoFoilId MTGO card foil ID}.
 */
export class MtgoFoilIdRulingsRequest implements ListRulingsRequest {
  /**
   * @inheritDoc
   */
  public readonly url;

  /**
   * @param props.mtgoFoilId The card's {@link CardFields.mtgoFoilId MTGO foil ID}.
   */
  constructor(props: { mtgoFoilId: string }) {
    this.url = `/cards/mtgo/${props.mtgoFoilId}/rulings`;
  }
}

/**
 * Request to retrieve rulings for one of the card's {@link CardFields.multiverseIds multiverse IDs}.
 */
export class MultiverseIdRulingsRequest implements ListRulingsRequest {
  /**
   * @inheritDoc
   */
  public readonly url;

  /**
   * @param props.multiverseId One of the card's {@link CardFields.multiverseIds multiverse IDs}.
   */
  constructor(props: { multiverseId: number }) {
    this.url = `/cards/multiverse/${props.multiverseId}/rulings`;
  }
}

/**
 * Request to retrieve rulings for the given {@link CardFields.arenaId Arena ID}.
 */
export class ArenaIdRulingsRequest implements ListRulingsRequest {
  /**
   * @inheritDoc
   */
  public readonly url;

  /**
   * @param props.arenaId The card's {@link CardFields.arenaId Arena ID}.
   */
  constructor(props: { arenaId: number }) {
    this.url = `/cards/arena/${props.arenaId}/rulings`;
  }
}

export interface IRulingsClient {
  /**
   * Retrieve the rulings for a card.
   */
  listRulings(props: ListRulingsRequest): Promise<ScryfallResponse<ScryfallList<Ruling>>>;
}
