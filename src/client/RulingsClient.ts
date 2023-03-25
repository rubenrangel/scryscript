import { BaseClient } from "./BaseClient";
import { IListRulingsRequest, IRulingsClient } from "./IRulingsClient";
import { IScryfallList } from "../core/IList";
import { IRuling, Ruling } from "../core/Ruling";

export class RulingsClient extends BaseClient implements IRulingsClient {
  protected transformRulingData(rulingData: Record<string, unknown>): Ruling {
    return new Ruling(rulingData as unknown as IRuling);
  }

  /**
   * @inheritDoc
   */
  async listRulings(props: IListRulingsRequest): Promise<IScryfallList<Ruling>> {
    const response = await this.sendRequest(props.url);
    const rulingsData = this.camelCaseProperties(await response.json());
    const rulingList = this.transformList(rulingsData, this.transformRulingData);

    return rulingList as unknown as IScryfallList<Ruling>;
  }
}
