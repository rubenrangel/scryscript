/**
 * @see https://scryfall.com/docs/api/sets#set-types
 */
export enum SetType {
  /** A yearly Magic core set (Tenth Edition, etc). */
  CORE = 'core',

  /** A rotational expansion set in a block (Zendikar, etc). */
  EXPANSION = 'expansion',

  /** A reprint set that contains no new cards (Modern Masters, etc). */
  MASTERS = 'masters',

  /** An Arena set designed for Alchemy. */
  ALCHEMY = 'alchemy',

  /** Masterpiece Series premium foil cards. */
  MASTERPIECE = 'masterpiece',

  /** A Commander-oriented gift set. */
  ARSENAL = 'arsenal',

  /** From the Vault gift sets. */
  FROM_THE_VAULT = 'from_the_vault',

  /** Spellbook series gift sets. */
  SPELLBOOK = 'spellbook',

  /** Premium Deck Series deck., */
  PREMIUM_DECK = 'premium_deck',

  /** Duel Decks. */
  DUEL_DECK = 'duel_deck',

  /** Special draft sets, like Conspiracy and Battlebond. */
  DRAFT_INNOVATION = 'draft_innovation',

  /** Magic Online treasure chest prize sets. */
  TREASURE_CHEST = 'treasure_chest',

  /** Commander preconstructed decks. */
  COMMANDER = 'commander',

  /** Planechase sets. */
  PLANECHASE = 'planechase',

  /** Archenemy sets */
  ARCHENEMY = 'archenemy',

  /** Vanguard card sets. */
  VANGUARD = 'vanguard',

  /** A funny un-set or set with funny promos (Unglued, Happy Holidays, etc). */
  FUNNY = 'funny',

  /** A starter/introductory set (Portal, etc). */
  STARTER = 'starter',

  /** A gift box set. */
  BOX = 'box',

  /** A set that contains purely promotional cards. */
  PROMO = 'promo',

  /** A set made up of tokens and emblems. */
  TOKEN = 'token',

  /** A set made up of gold-bordered, oversize, or trophy cards that are not legal. */
  MEMORABILIA = 'memorabilia',
}
