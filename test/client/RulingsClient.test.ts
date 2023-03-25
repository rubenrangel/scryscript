import { beforeAll, describe, expect, Mock, test, vi } from "vitest";
import {
  ArenaIdRulingsRequest,
  CardIdRulingsProps,
  MtgoFoilIdRulingsRequest,
  MtgoIdRulingsRequest,
  MultiverseIdRulingsRequest,
  RulingsClient,
  SetCodeCollectorNumberRulingsProps,
} from "../../src/client/RulingsClient";
import { IScryfallList } from "../../src/core/IList";
import { Ruling } from "../../src/core/Ruling";

describe("CardIdRulingsProps", () => {
  test("it returns the correct URL", () => {
    expect(new CardIdRulingsProps({ cardId: "1234" }).url).toEqual("/cards/1234/rulings");
  });
});

describe("SetCodeCollectorNumberRulingsProps", () => {
  test("it returns the correct URL", () => {
    expect(new SetCodeCollectorNumberRulingsProps({ setCode: "mm1", collectorNumber: "1234" }).url).toEqual(
      "/cards/mm1/1234/rulings"
    );
  });
});

describe("MtgoIdRulingsRequest", () => {
  test("it returns the correct URL", () => {
    expect(new MtgoIdRulingsRequest({ mtgoId: "1234" }).url).toEqual("/cards/mtgo/1234/rulings");
  });
});

describe("MtgoFoilIdRulingsRequest", () => {
  test("it returns the correct URL", () => {
    expect(new MtgoFoilIdRulingsRequest({ mtgoFoilId: "1234" }).url).toEqual("/cards/mtgo/1234/rulings");
  });
});

describe("MultiverseIdRulingsRequest", () => {
  test("it returns the correct URL", () => {
    expect(new MultiverseIdRulingsRequest({ multiverseId: 1234 }).url).toEqual("/cards/multiverse/1234/rulings");
  });
});

describe("ArenaIdRulingsRequest", () => {
  test("it returns the correct URL", () => {
    expect(new ArenaIdRulingsRequest({ arenaId: 1234 }).url).toEqual("/cards/arena/1234/rulings");
  });
});

describe("RulingsClient", () => {
  describe("listRulings", () => {
    let clientStub: Mock;
    let response: IScryfallList<Ruling>;

    beforeAll(async () => {
      const scryfallResponse = new Response(
        JSON.stringify({
          object: "list",
          has_more: false,
          data: [
            {
              object: "ruling",
              oracle_id: "19a2f0a0-9e68-4982-a5f5-b77d805befd7",
              source: "wotc",
              published_at: "2015-06-22",
              comment:
                "You choose the mode as the triggered ability goes on the stack. You can choose a mode that requires targets only if there are legal targets available.",
            },
          ],
        }),
        {
          status: 200,
        }
      );
      clientStub = vi.fn();
      clientStub.mockResolvedValue(scryfallResponse);
      const client = new RulingsClient("https://example.com/", clientStub);
      response = await client.listRulings({ url: "https://example.com/rulings" });
    });

    test("it calls the correct route", () => {
      expect(clientStub).toHaveBeenCalledOnce();
      expect(clientStub).toHaveBeenLastCalledWith(expect.stringMatching("/rulings"));
    });

    test("Scryfall API response is marshalled", () => {
      expect(response).toMatchObject<IScryfallList<Ruling>>({
        object: "list",
        hasMore: false,
        data: [
          new Ruling({
            oracleId: "19a2f0a0-9e68-4982-a5f5-b77d805befd7",
            source: "wotc",
            publishedAt: "2015-06-22",
            comment:
              "You choose the mode as the triggered ability goes on the stack. You can choose a mode that requires targets only if there are legal targets available.",
          }),
        ],
      });
    });
  });
});
