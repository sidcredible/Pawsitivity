import { ModelNotFoundException } from "../root/model-not-found.exception";
import { ApiErrorCode } from "../root/http.exception";

export class RateAlreadyExistsException extends ModelNotFoundException {

  constructor() {
    super("Rate Already Exists!", ApiErrorCode.RATE_ALREADY_EXISTS);
  }
}
