import * as Joi from "joi";
import { SchemaValidator } from "../../validations";

export class UpdateProductValidator {
  static rules(): SchemaValidator {
    return {
      params: Joi.object({
        eventId: Joi.number().min(1).required(),
        userId: Joi.number().min(1).required(),
        productId: Joi.number().min(1).required(),
      }),
      body: Joi.object({
        description: Joi.string().required(),
        amountTickets: Joi.number().min(1).required(),
        value: Joi.number().min(0).required(),
      }),
    };
  }
}
