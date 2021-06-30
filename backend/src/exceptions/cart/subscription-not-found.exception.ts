import { ModelNotFoundException } from "../root/model-not-found.exception";
import { ApiErrorCode } from "../root/http.exception";

export class SubscriptionNotFoundException extends ModelNotFoundException {

  constructor() {
    super("Subscription Not Found!", ApiErrorCode.SUBSCRIPTION_NOT_FOUND);
  }
}
