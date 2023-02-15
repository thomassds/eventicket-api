import { Router } from "express";
import Container from "typedi";
import { PermissionController } from "../controllers";
import { RouteValidator } from "./validations";
import { GetOneByIdPermissionValidator } from "./schemas/permissions/getOneByIdPermission";
import { StorePermissionValidator } from "./schemas/permissions/storePermission";
import { UpdatePermissionValidator } from "./schemas/permissions/updatePermission";
import { DeletePermissionValidator } from "./schemas/permissions/DeletePermission";

export class PermissionRouter {
  static getRouter(): Router {
    const controller = Container.get(PermissionController);

    const router = Router();

    router.post(
      "/permissions",
      RouteValidator.validate(StorePermissionValidator.rules()),
      controller.store
    );

    router.put(
      "/permissions/:permissionId",
      RouteValidator.validate(UpdatePermissionValidator.rules()),
      controller.update
    );

    router.delete(
      "/permissions/:permissionId",
      RouteValidator.validate(DeletePermissionValidator.rules()),
      controller.delete
    );

    router.get("/permissions", controller.getAll);
    router.get(
      "/permissions/:permissionId",
      RouteValidator.validate(GetOneByIdPermissionValidator.rules()),
      controller.getOneById
    );
    return router;
  }
}
