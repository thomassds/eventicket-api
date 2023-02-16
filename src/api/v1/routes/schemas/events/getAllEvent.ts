import * as Joi from "joi";
import { SchemaValidator } from "../../validations";

export class GetAllEventValidator {
  static rules(): SchemaValidator {
    return {
      query: Joi.object({
        page: Joi.number().min(1),
        perPage: Joi.number().min(10),
      }),
    };
  }
}
