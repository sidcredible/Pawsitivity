import { ModelNotFoundException } from "../root/model-not-found.exception";
import { ApiErrorCode } from "../root/http.exception";

export class CannotCancelOrderException extends ModelNotFoundException {

  constructor() {
    super("Cannot Cancel Order !", ApiErrorCode.CANNOT_CANCEL_ORDER);
  }
}
