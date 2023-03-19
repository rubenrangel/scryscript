import { IError } from "../core/IError";
import { IScryfallObject } from "../core/IScryfallObject";

export type ScryfallResponse<ScryfallObject extends IScryfallObject> = IError | ScryfallObject;
