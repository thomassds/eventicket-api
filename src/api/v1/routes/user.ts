import { Router } from "express";
import Container from "typedi";
import { UserController } from "../controllers";
import { RouteValidator } from "./validations";
import { GetOneByIdPermissionValidator } from "./schemas/permissions/getOneByIdPermission";
import { StoreUserValidator } from "./schemas/users/storeUser";
import { UpdatePermissionValidator } from "./schemas/permissions/updatePermission";
import { DeletePermissionValidator } from "./schemas/permissions/DeletePermission";

export class UserRouter {
  static getRouter(): Router {
    const controller = Container.get(UserController);

    const router = Router();

    router.post(
      "/users",
      RouteValidator.validate(StoreUserValidator.rules()),
      controller.store
    );

    return router;
  }
}
