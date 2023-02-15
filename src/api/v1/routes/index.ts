import { Router } from "express";
import { AuthenticationRouter } from "./auth";
import { PermissionRouter } from "./permission";
import { UserRouter } from "./user";

export const getV1Routes = () => {
  const router = Router();

  const routers = [PermissionRouter, UserRouter, AuthenticationRouter];

  routers.forEach((routerClass) => {
    router.use(routerClass.getRouter());
  });

  return router;
};
