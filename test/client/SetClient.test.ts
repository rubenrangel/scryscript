import { beforeAll, describe, expect, Mock, test, vi } from "vitest";
import {
  GetSetCodeRequest,
  GetSetIdRequest,
  GetSetTcgPlayerIdRequest,
  ListSetsRequest,
  SetClient,
} from "../../src/client/SetClient";
import { IScryfallList } from "../../src/core/IList";
import { ISet } from "../../src/core/ScryfallSet";

describe("ListSetsRequest", () => {
  test("it returns the correct URL", () => {
    const request = new ListSetsRequest();

    expect(request.url).toEqual("/sets");
  });
});

describe("GetSetIdRequest", () => {
  test("it returns the correct URL", () => {
    const request = new GetSetIdRequest({ id: "1234" });

    expect(request.url).toEqual("/sets/1234");
  });
});

describe("GetSetCodeRequest", () => {
  test("it returns the correct URL", () => {
    const request = new GetSetCodeRequest({ setCode: "mm1" });

    expect(request.url).toEqual("/sets/mm1");
  });
});

describe("GetSetTcgPlayerIdRequest", () => {
  test("it returns the correct URL", () => {
    const request = new GetSetTcgPlayerIdRequest({ tcgplayerId: 24 });

    expect(request.url).toEqual("/sets/tcgplayer/24");
  });
});

describe("SetClient", () => {
  describe("listSets", () => {
    let clientStub: Mock;
    let response: IScryfallList<ISet>;

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
        }),
        {
          status: 200,
        }
      );
      clientStub = vi.fn();
      clientStub.mockResolvedValue(scryfallResponse);
      const client = new SetClient("https://example.com", clientStub);
      response = (await client.listSets({ url: "https://example.com/sets" })) as IScryfallList<ISet>;
    });

    test("it calls the correct route", () => {
      expect(clientStub).toHaveBeenCalledOnce();
      expect(clientStub).toHaveBeenLastCalledWith(expect.stringMatching("/sets$"));
    });

    test("Scryfall API response is marshalled", () => {
      expect(response).toEqual<IScryfallList<ISet>>({
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
            releasedAt: "2023-08-04",
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
    let clientStub: Mock;
    let response: ISet;

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
        }),
        {
          status: 200,
        }
      );
      clientStub = vi.fn();
      clientStub.mockResolvedValue(scryfallResponse);
      const client = new SetClient("https://example.com", clientStub);
      response = (await client.getSet({ url: "/sets/1234" })) as ISet;
    });

    test("it calls the correct route", () => {
      expect(clientStub).toHaveBeenCalledOnce();
      expect(clientStub).toHaveBeenLastCalledWith(expect.stringMatching("/sets/1234$"));
    });

    test("Scryfall API response is marshalled", () => {
      expect(response).toEqual<ISet>({
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
        releasedAt: "2023-08-04",
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
