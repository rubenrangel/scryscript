import { IError } from "../core/ierror";
import { IScryfallObject } from "../core/iscryfall-object";

export type ScryfallResponse<ScryfallObject extends IScryfallObject> = IError | ScryfallObject;
