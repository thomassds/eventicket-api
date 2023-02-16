import * as Joi from "joi";
import { SchemaValidator } from "../../validations";

export class UpdateEventValidator {
  static rules(): SchemaValidator {
    return {
      params: Joi.object({
        userId: Joi.number().min(1).required(),
        eventId: Joi.number().min(1).required(),
      }),
      body: Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        amountTickets: Joi.number().min(1).required(),
        online: Joi.boolean().default(false),
        startedAt: Joi.date().required(),
        finishAt: Joi.date().required(),
      }),
    };
  }
}
