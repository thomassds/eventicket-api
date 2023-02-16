import * as Joi from "joi";
import { SchemaValidator } from "../../validations";

export class GetAllProductValidator {
  static rules(): SchemaValidator {
    return {
      params: Joi.object({
        eventId: Joi.number().min(1).required(),
        userId: Joi.number().min(1).required(),
      }),
    };
  }
}
