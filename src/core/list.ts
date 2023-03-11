import { Card } from "./card";

export type ScryfallList<ScryfallResource> = {
  data: ScryfallResource[];

  hasMore: boolean;

  nextPage?: string | null;

  warnings?: string[] | null;
};

export type CardList = ScryfallList<Card> & {
  totalCards: number;
};
