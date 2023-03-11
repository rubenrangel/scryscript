import { IScryfallObject } from "./iscryfall-object";

/**
 * An Error object represents a failure to find information or understand the input you provided to the API.
 */
export interface IError extends IScryfallObject {
  /**
   * @inheritDoc
   */
  object: "error";

  /**
   * An integer HTTP status code for this error.
   */
  status: number;

  /**
   * A computer-friendly string representing the appropriate HTTP status code.
   */
  code: string;

  /**
   * A human-readable string explaining the error.
   */
  details: string;

  /**
   * A computer-friendly string that provides additional context for the main error.
   */
  type?: string | null;

  /**
   * Non-failure warnings.
   */
  warnings?: string[] | null;
}
