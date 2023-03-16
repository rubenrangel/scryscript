import { BaseClient } from "./BaseClient";
import { IRulingsClient, ListRulingsRequest } from "./IRulingsClient";
import { ScryfallResponse } from "./ScryfallResponse";
import { ScryfallList } from "../core/list";
import { Ruling } from "../core/ruling";

export class RulingsClient extends BaseClient implements IRulingsClient {
  protected transformRulingData(rulingData: Record<string, unknown>): Ruling {
    rulingData.publishedAt = new Date(rulingData.publishedAt as string);

    return rulingData as unknown as Ruling;
  }

  /**
   * @inheritDoc
   */
  async listRulings(props: ListRulingsRequest): Promise<ScryfallResponse<ScryfallList<Ruling>>> {
    const response = await this.sendRequest(props.url);

    const rulingsData = this.camelCaseProperties(await response.json());
    const rulingList = this.transformList(rulingsData, this.transformRulingData);

    return rulingList as unknown as ScryfallList<Ruling>;
  }
}
