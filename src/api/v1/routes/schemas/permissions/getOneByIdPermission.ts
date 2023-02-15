import * as Joi from "joi";
import { SchemaValidator } from "../../validations";

export class GetOneByIdPermissionValidator {
  static rules(): SchemaValidator {
    return {
      params: Joi.object({
        permissionId: Joi.number().min(0).required(),
      }),
    };
  }
}
