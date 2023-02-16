import * as Joi from "joi";
import { SchemaValidator } from "../../validations";

export class GetOneEventByIdValidator {
  static rules(): SchemaValidator {
    return {
      params: Joi.object({
        userId: Joi.number().min(1).required(),
        eventId: Joi.number().min(1).required(),
      }),
    };
  }
}
