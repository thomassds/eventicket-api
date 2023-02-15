import * as Joi from "joi";
import { SchemaValidator } from "../../validations";

export class DeletePermissionValidator {
  static rules(): SchemaValidator {
    return {
      params: Joi.object({
        permissionId: Joi.number().min(0).required(),
      }),
    };
  }
}
