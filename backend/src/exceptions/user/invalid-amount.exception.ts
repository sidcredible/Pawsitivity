import { ModelNotFoundException } from "../root/model-not-found.exception";
import { ApiErrorCode } from "../root/http.exception";

export class InvalidAmountException extends ModelNotFoundException {

  constructor() {
    super("Amount is Invalid", ApiErrorCode.AMOUNT_DOES_NOT_EXISTS);
  }
}
