import { beforeAll, describe, expect, Mock, test, vi } from "vitest";
import { SetClient } from "../../src/client/SetClient";
import { ScryfallList } from "../../src/core/list";
import { Set } from "../../src/core/set";

describe("SetClient", () => {
  describe("listSets", () => {
    let clientStub: Mock;
    let response: ScryfallList<Set>;

    beforeAll(async () => {
      const scryfallResponse = new Response(
        JSON.stringify({
          object: "list",
          has_more: false,
          data: [
            {
              object: "set",
              id: "cd05036f-2698-43e6-a48e-5c8d82f0a551",
              code: "cmm",
              mtgo_code: "cmm",
              arena_code: "cmm",
              tcgplayer_id: 23020,
              name: "Commander Masters",
              uri: "https://api.scryfall.com/sets/cd05036f-2698-43e6-a48e-5c8d82f0a551",
              scryfall_uri: "https://scryfall.com/sets/cmm",
              search_uri:
                "https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Acmm&unique=prints",
              released_at: "2023-08-04",
              set_type: "masters",
              card_count: 8,
              digital: false,
              nonfoil_only: false,
              foil_only: false,
              icon_svg_uri: "https://svgs.scryfall.io/sets/cmm.svg?1678680000",
            },
          ],
        })
      );
      clientStub = vi.fn();
      clientStub.mockResolvedValue(scryfallResponse);
      const client = new SetClient(clientStub);
      response = (await client.listSets()) as ScryfallList<Set>;
    });

    test("it calls the correct route", () => {
      expect(clientStub).toHaveBeenCalledOnce();
      expect(clientStub).toHaveBeenLastCalledWith(expect.stringMatching("/sets$"));
    });

    test("Scryfall API response is marshalled", () => {
      expect(response).toMatchObject<ScryfallList<Set>>({
        object: "list",
        hasMore: false,
        data: [
          {
            object: "set",
            id: "cd05036f-2698-43e6-a48e-5c8d82f0a551",
            code: "cmm",
            mtgoCode: "cmm",
            arenaCode: "cmm",
            tcgplayerId: 23020,
            name: "Commander Masters",
            uri: "https://api.scryfall.com/sets/cd05036f-2698-43e6-a48e-5c8d82f0a551",
            scryfallUri: "https://scryfall.com/sets/cmm",
            searchUri:
              "https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Acmm&unique=prints",
            releasedAt: new Date("2023-08-04"),
            setType: "masters",
            cardCount: 8,
            digital: false,
            nonfoilOnly: false,
            foilOnly: false,
            iconSvgUri: "https://svgs.scryfall.io/sets/cmm.svg?1678680000",
          },
        ],
      });
    });
  });

  describe("getSet", () => {
    describe.each([
      {
        name: "get by Scryfall ID",
        requestProps: { id: "7137ffeb-eb1d-466c-a0d3-3157f52b1b10" },
        expectedRouteRegex: "/sets/7137ffeb-eb1d-466c-a0d3-3157f52b1b10$",
      },
      {
        name: "get by Set Code",
        requestProps: { code: "hop" },
        expectedRouteRegex: "/sets/hop$",
      },
      // {
      //   name: "get by MTGO Code",
      //   requestProps: { mtgoCode: "pc1" },
      //   expectedRouteRegex: "/sets/pc1$"
      // },
      {
        name: "get by TCGPlayer ID",
        requestProps: { tcgplayerId: 84 },
        expectedRouteRegex: "/sets/tcgplayer/84$",
      },
    ])("$name", ({ requestProps, expectedRouteRegex }) => {
      let clientStub: Mock;
      let response: Set;

      beforeAll(async () => {
        const scryfallResponse = new Response(
          JSON.stringify({
            object: "set",
            id: "cd05036f-2698-43e6-a48e-5c8d82f0a551",
            code: "cmm",
            mtgo_code: "cmm",
            arena_code: "cmm",
            tcgplayer_id: 23020,
            name: "Commander Masters",
            uri: "https://api.scryfall.com/sets/cd05036f-2698-43e6-a48e-5c8d82f0a551",
            scryfall_uri: "https://scryfall.com/sets/cmm",
            search_uri:
              "https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Acmm&unique=prints",
            released_at: "2023-08-04",
            set_type: "masters",
            card_count: 8,
            digital: false,
            nonfoil_only: false,
            foil_only: false,
            icon_svg_uri: "https://svgs.scryfall.io/sets/cmm.svg?1678680000",
          })
        );
        clientStub = vi.fn();
        clientStub.mockResolvedValue(scryfallResponse);
        const client = new SetClient(clientStub);
        response = (await client.getSet(requestProps)) as Set;
      });

      test("it calls the correct route", () => {
        expect(clientStub).toHaveBeenCalledOnce();
        expect(clientStub).toHaveBeenLastCalledWith(expect.stringMatching(expectedRouteRegex));
      });

      test("Scryfall API response is marshalled", () => {
        expect(response).toMatchObject<Set>({
          object: "set",
          id: "cd05036f-2698-43e6-a48e-5c8d82f0a551",
          code: "cmm",
          mtgoCode: "cmm",
          arenaCode: "cmm",
          tcgplayerId: 23020,
          name: "Commander Masters",
          uri: "https://api.scryfall.com/sets/cd05036f-2698-43e6-a48e-5c8d82f0a551",
          scryfallUri: "https://scryfall.com/sets/cmm",
          searchUri:
            "https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Acmm&unique=prints",
          releasedAt: new Date("2023-08-04"),
          setType: "masters",
          cardCount: 8,
          digital: false,
          nonfoilOnly: false,
          foilOnly: false,
          iconSvgUri: "https://svgs.scryfall.io/sets/cmm.svg?1678680000",
        });
      });
    });
  });
});
