import * as Joi from "joi";
import { SchemaValidator } from "../../validations";

export class UpdatePermissionValidator {
  static rules(): SchemaValidator {
    return {
      params: Joi.object({
        permissionId: Joi.number().min(0).required(),
      }),
      body: Joi.object({
        description: Joi.string().required(),
      }),
    };
  }
}
