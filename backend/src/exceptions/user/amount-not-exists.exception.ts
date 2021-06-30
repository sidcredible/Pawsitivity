import { ModelNotFoundException } from "../root/model-not-found.exception";
import { ApiErrorCode } from "../root/http.exception";

export class AmountNotExistsException extends ModelNotFoundException {

  constructor() {
    super("Amount does not exists", ApiErrorCode.AMOUNT_DOES_NOT_EXISTS);
  }
}
