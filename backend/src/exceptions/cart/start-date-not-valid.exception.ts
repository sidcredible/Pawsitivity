import { ModelNotFoundException } from "../root/model-not-found.exception";
import { ApiErrorCode } from "../root/http.exception";

export class StartDateNotValidException extends ModelNotFoundException {

  constructor() {
    super("Kindly Select Valid Start Date!", ApiErrorCode.INVALID_START_DATE);
  }
}
