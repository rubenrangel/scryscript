import { describe, expect, test, vi } from "vitest";
import { BaseClient } from "../../src/client/BaseClient";
import { IError } from "../../src/core/IError";

describe("BaseClient", () => {
  describe("sendRequest", () => {
    test("a Scryfall error response rejects with an IError", async () => {
      const scryfallResponse = new Response(
        JSON.stringify({
          object: "error",
          code: "bad_request",
          status: 400,
          warnings: [
            "Invalid expression “is:slick” was ignored. Checking if cards are “slick” is not supported",
            "Invalid expression “cmc>cmc” was ignored. The sides of your comparison must be different.",
          ],
          details: "All of your terms were ignored.",
        }),
        {
          status: 400,
        }
      );
      const clientStub = vi.fn();
      clientStub.mockResolvedValue(scryfallResponse);

      class TestClient extends BaseClient {
        async request(url: string): Promise<any> {
          return this.sendRequest(url);
        }
      }

      const client = new TestClient("https://example.com", clientStub);
      const expectedError: IError = {
        object: "error",
        code: "bad_request",
        status: 400,
        warnings: [
          "Invalid expression “is:slick” was ignored. Checking if cards are “slick” is not supported",
          "Invalid expression “cmc>cmc” was ignored. The sides of your comparison must be different.",
        ],
        details: "All of your terms were ignored.",
      };

      await expect(client.request("/sets")).rejects.toEqual(expectedError);
    });

    test("a successful Scryfall resolves with the data", async () => {
      const scryfallResponse = new Response(
        JSON.stringify({
          object: "card",
        }),
        {
          status: 200,
        }
      );
      const clientStub = vi.fn();
      clientStub.mockResolvedValue(scryfallResponse);

      class TestClient extends BaseClient {
        async request(url: string): Promise<any> {
          return this.sendRequest(url);
        }
      }

      const client = new TestClient("https://example.com", clientStub);

      await expect(client.request("/sets")).resolves.toEqual(scryfallResponse);
    });
  });
});
