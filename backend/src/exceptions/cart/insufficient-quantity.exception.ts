import { ModelNotFoundException } from "../root/model-not-found.exception";
import { ApiErrorCode } from "../root/http.exception";

export class InsufficientQuantityException extends ModelNotFoundException {

  constructor() {
    super("Insufficient Quantity of a Product!", ApiErrorCode.INSUFFICIENT_QUANTITY);
  }
}
