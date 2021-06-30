import { ModelNotFoundException } from "../root/model-not-found.exception";
import { ApiErrorCode } from "../root/http.exception";

export class InsufficientDaysOfSubscriptionException extends ModelNotFoundException {

  constructor() {
    super("Insufficient No of days ! Minimum 5 Required", ApiErrorCode.INSUFFICIENT_DAYS_OF_SUBSCRIPTION);
  }
}
