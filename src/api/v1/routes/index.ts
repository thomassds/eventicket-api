import { Router } from "express";
import { AuthenticationRouter } from "./auth";
import { EventRouter } from "./event";
import { PermissionRouter } from "./permission";
import { ProductRouter } from "./product";
import { UserRouter } from "./user";

export const getV1Routes = () => {
  const router = Router();

  const routers = [
    PermissionRouter,
    UserRouter,
    AuthenticationRouter,
    EventRouter,
    ProductRouter,
  ];

  routers.forEach((routerClass) => {
    router.use(routerClass.getRouter());
  });

  return router;
};
