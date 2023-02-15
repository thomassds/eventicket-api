import * as Joi from "joi";
import { SchemaValidator } from "../../validations";

export class StoreUserValidator {
  static rules(): SchemaValidator {
    return {
      body: Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
        phone: Joi.string().required(),
      }),
    };
  }
}
