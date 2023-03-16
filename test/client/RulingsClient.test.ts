import { beforeAll, describe, expect, Mock, test, vi } from "vitest";
import { RulingsClient } from "../../src/client/RulingsClient";
import { ScryfallList } from "../../src/core/list";
import { Ruling } from "../../src/core/ruling";

describe("RulingsClient", () => {
  describe("listRulings", () => {
    let clientStub: Mock;
    let response: ScryfallList<Ruling>;

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
        })
      );
      clientStub = vi.fn();
      clientStub.mockResolvedValue(scryfallResponse);
      const client = new RulingsClient(clientStub);
      response = (await client.listRulings({ url: "/rulings" })) as ScryfallList<Ruling>;
    });

    test("it calls the correct route", () => {
      expect(clientStub).toHaveBeenCalledOnce();
      expect(clientStub).toHaveBeenLastCalledWith(expect.stringMatching("/rulings"));
    });

    test("Scryfall API response is marshalled", () => {
      expect(response).toMatchObject<ScryfallList<Ruling>>({
        object: "list",
        hasMore: false,
        data: [
          {
            object: "ruling",
            oracleId: "19a2f0a0-9e68-4982-a5f5-b77d805befd7",
            source: "wotc",
            publishedAt: new Date("2015-06-22"),
            comment:
              "You choose the mode as the triggered ability goes on the stack. You can choose a mode that requires targets only if there are legal targets available.",
          },
        ],
      });
    });
  });
});
