import { ModelNotFoundException } from "../root/model-not-found.exception";
import { ApiErrorCode } from "../root/http.exception";

export class InsufficientWalletException extends ModelNotFoundException {

  constructor() {
    super("Insufficient Wallet Funds !", ApiErrorCode.INSUFFICIENT_WALLET);
  }
}
