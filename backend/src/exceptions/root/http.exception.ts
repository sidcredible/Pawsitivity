export class HttpException extends Error {

  /**
   * Message in english that explains the error
   *
   * It should be directly addressed to user
   * as in most cases this will be displayed to user.
   */
  message: string;

  /**
   * App Specific error code that uniquely identifies an error
   *
   * e.g. => When Requesting a specific entity with a specific id,
   * If it is not found, there should be a unique id associated with it
   * and using which frontend should redirect user back to the previous page
   */
  errorCode: number;

  /**
   * Http status code
   *
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
   */
  statusCode: number;

  /**
   * Any additional data associated with a specific error.
   *
   * e.g. => Login API might want to send
   * number of attempts left on incorrect password
   */
  meta?: any;

  /**
   * Validation errors thrown by AJV
   * send as it is being thrown by the library...
   */
  errors?: any;

  constructor(message: string, errorCode: ApiErrorCode, statusCode: number, meta?: any, errors?: any) {
    super(message);

    this.message    = message;
    this.errorCode  = errorCode;
    this.statusCode = statusCode;

    this.meta   = meta;
    this.errors = errors;
  }
}


export enum ApiErrorCode {

  // User Related
  USER_NOT_FOUND             = 101,
  USER_NOT_AUTHORIZED,
  USER_ALREADY_EXISTS,
  USER_DEACTIVATED,
  INCORRECT_OTP,
  AMOUNT_DOES_NOT_EXISTS,
  INSUFFICIENT_WALLET,


  // Address
  ADDRESS_NOT_FOUND,

  // Product
  PRODUCT_CATEGORY_NOT_FOUND,
  PRODUCT_SUB_CATEGORY_NOT_FOUND,
  PRODUCT_NOT_FOUND,
  RATE_NOT_FOUND,
  RATE_ALREADY_EXISTS,

  // ORDER
  CAR_ITEM_NOT_FOUND,
  SUBSCRIPTION_NOT_FOUND,
  CART_EMPTY,
  ORDER_NOT_FOUND,
  CANNOT_APPLY_COUPON,
  CANNOT_CANCEL_ORDER,
  COUPON_NOT_FOUND,
  INSUFFICIENT_QUANTITY,
  INSUFFICIENT_CART_VALUE,
  INSUFFICIENT_DAYS_OF_SUBSCRIPTION,
  INVALID_AMOUNT,
  INVALID_START_DATE,
  ATTACHMENT_NOT_FOUND,

  // EMPLOYEE
  EMPLOYEE_NOT_FOUND,

  // JWT

  JWT_INVALID                = 9101,
  JWT_INCORRECT_PAYLOAD_TYPE = 9102,
  VALIDATION_ERROR           = 9998,

  UNKNOWN                    = 9999 // Reserved...
}
