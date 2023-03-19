import { IScryfallRequest, ScryfallRequest } from "./IScryfallRequest";
import { ScryfallResponse } from "./ScryfallResponse";
import { IScryfallList } from "../core/IList";
import { IRuling } from "../core/IRuling";

/**
 * A request to retrieve rulings for a card.
 */
export interface IListRulingsRequest extends IScryfallRequest {}

/**
 * Request to retrieve rulings for the given {@link ICardFields.id Scryfall card ID}.
 */
export class CardIdRulingsProps extends ScryfallRequest {
  /**
   * @param props.cardId The {@link ICardFields.id Scryfall card ID}.
   */
  constructor(props: { cardId: string }) {
    super(`/cards/${props.cardId}/rulings`);
  }
}

/**
 * Request to retrieve rulings for the given {@link ICardPrintFields.set set code} and
 * {@link ICardPrintFields.collectorNumber collector number}.
 */
export class SetCodeCollectorNumberRulingsProps extends ScryfallRequest {
  /**
   * @param props.setCode The {@link ICardPrintFields.set set code} of the card.
   * @param props.collectorNumber The {@link ICardPrintFields.collectorNumber collector number} of the card.
   */
  constructor(props: { setCode: string; collectorNumber: string }) {
    super(`/cards/${props.setCode}/${props.collectorNumber}/rulings`);
  }
}

/**
 * Request to retrieve rulings for the given {@link ICardFields.mtgoId MTGO card ID}.
 */
export class MtgoIdRulingsRequest extends ScryfallRequest {
  /**
   * @param props.mtgoId The card's {@link ICardFields.mtgoId MTGO ID}.
   */
  constructor(props: { mtgoId: string }) {
    super(`/cards/mtgo/${props.mtgoId}/rulings`);
  }
}

/**
 * Request to retrieve rulings for the given {@link ICardFields.mtgoFoilId MTGO card foil ID}.
 */
export class MtgoFoilIdRulingsRequest extends ScryfallRequest {
  /**
   * @param props.mtgoFoilId The card's {@link ICardFields.mtgoFoilId MTGO foil ID}.
   */
  constructor(props: { mtgoFoilId: string }) {
    super(`/cards/mtgo/${props.mtgoFoilId}/rulings`);
  }
}

/**
 * Request to retrieve rulings for one of the card's {@link ICardFields.multiverseIds multiverse IDs}.
 */
export class MultiverseIdRulingsRequest implements IListRulingsRequest {
  /**
   * @inheritDoc
   */
  public readonly url;

  /**
   * @param props.multiverseId One of the card's {@link ICardFields.multiverseIds multiverse IDs}.
   */
  constructor(props: { multiverseId: number }) {
    this.url = `/cards/multiverse/${props.multiverseId}/rulings`;
  }
}

/**
 * Request to retrieve rulings for the given {@link ICardFields.arenaId Arena ID}.
 */
export class ArenaIdRulingsRequest extends ScryfallRequest {
  /**
   * @param props.arenaId The card's {@link ICardFields.arenaId Arena ID}.
   */
  constructor(props: { arenaId: number }) {
    super(`/cards/arena/${props.arenaId}/rulings`);
  }
}

export interface IRulingsClient {
  /**
   * Retrieve the rulings for a card.
   */
  listRulings(props: IListRulingsRequest): Promise<ScryfallResponse<IScryfallList<IRuling>>>;
}
