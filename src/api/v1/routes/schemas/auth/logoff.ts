import * as Joi from "joi";
import { SchemaValidator } from "../../validations";

export class LogoffValidator {
  static rules(): SchemaValidator {
    return {
      params: Joi.object({
        userId: Joi.string().min(1).required(),
      }),
    };
  }
}
