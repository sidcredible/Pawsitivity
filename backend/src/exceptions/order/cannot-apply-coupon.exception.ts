import { ModelNotFoundException } from "../root/model-not-found.exception";
import { ApiErrorCode } from "../root/http.exception";

export class CannotApplyCouponException extends ModelNotFoundException {

  constructor() {
    super("Cannot Apply Coupon !", ApiErrorCode.CANNOT_APPLY_COUPON);
  }
}
