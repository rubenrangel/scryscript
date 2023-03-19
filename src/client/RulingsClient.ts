import { BaseClient } from "./BaseClient";
import { IRulingsClient, IListRulingsRequest } from "./IRulingsClient";
import { ScryfallResponse } from "./ScryfallResponse";
import { IScryfallList } from "../core/IList";
import { IRuling } from "../core/IRuling";

export class RulingsClient extends BaseClient implements IRulingsClient {
  protected transformRulingData(rulingData: Record<string, unknown>): IRuling {
    rulingData.publishedAt = new Date(rulingData.publishedAt as string);

    return rulingData as unknown as IRuling;
  }

  /**
   * @inheritDoc
   */
  async listRulings(props: IListRulingsRequest): Promise<ScryfallResponse<IScryfallList<IRuling>>> {
    const response = await this.sendRequest(props.url);
    const rulingsData = this.camelCaseProperties(await response.json());
    const rulingList = this.transformList(rulingsData, this.transformRulingData);

    return rulingList as unknown as IScryfallList<IRuling>;
  }
}
