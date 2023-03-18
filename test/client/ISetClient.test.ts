import { describe, expect, test } from "vitest";
import {
  GetSetCodeRequest,
  GetSetIdRequest,
  GetSetTcgPlayerIdRequest,
  ListSetsRequest,
} from "../../src/client/ISetClient";

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
