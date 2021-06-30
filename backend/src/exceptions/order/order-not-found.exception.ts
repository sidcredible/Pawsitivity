import { ModelNotFoundException } from "../root/model-not-found.exception";
import { ApiErrorCode } from "../root/http.exception";

export class OrderNotFoundException extends ModelNotFoundException {

  constructor() {
    super("Order Not Found!", ApiErrorCode.ORDER_NOT_FOUND);
  }
}
