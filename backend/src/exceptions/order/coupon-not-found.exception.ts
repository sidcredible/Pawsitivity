import { ModelNotFoundException } from "../root/model-not-found.exception";
import { ApiErrorCode } from "../root/http.exception";

export class CouponNotFoundException extends ModelNotFoundException {

  constructor() {
    super("Coupon Not Found !", ApiErrorCode.COUPON_NOT_FOUND);
  }
}
