import { beforeAll, describe, expect, Mock, test, vi } from "vitest";
import { RulingsClient } from "../../src/client/RulingsClient";
import { IScryfallList } from "../../src/core/IList";
import { IRuling } from "../../src/core/IRuling";

describe("RulingsClient", () => {
  describe("listRulings", () => {
    let clientStub: Mock;
    let response: IScryfallList<IRuling>;

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
      response = (await client.listRulings({ url: "https://example.com/rulings" })) as IScryfallList<IRuling>;
    });

    test("it calls the correct route", () => {
      expect(clientStub).toHaveBeenCalledOnce();
      expect(clientStub).toHaveBeenLastCalledWith(expect.stringMatching("/rulings"));
    });

    test("Scryfall API response is marshalled", () => {
      expect(response).toMatchObject<IScryfallList<IRuling>>({
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
