import { ModelNotFoundException } from "../root/model-not-found.exception";
import { ApiErrorCode } from "../root/http.exception";

export class InsufficientCartValueException extends ModelNotFoundException {

  constructor() {
    super("Coupon can't be applied due to Insufficient Cart Value !", ApiErrorCode.CANNOT_APPLY_COUPON);
  }
}
