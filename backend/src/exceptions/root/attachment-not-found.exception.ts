import { ModelNotFoundException } from "./model-not-found.exception";
import { ApiErrorCode } from "./http.exception";

export class AttachmentNotFoundException extends ModelNotFoundException {

    constructor() {
        super("Attachment Not Found", ApiErrorCode.ATTACHMENT_NOT_FOUND);
    }
}
