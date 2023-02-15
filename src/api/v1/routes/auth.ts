import { Router } from "express";
import Container from "typedi";
import { AuthController } from "../controllers";
import { RouteValidator } from "./validations";
import { AuthenticationValidator } from "./schemas/auth/authentication";
import { LogoffValidator } from "./schemas/auth/logoff";

export class AuthenticationRouter {
  static getRouter(): Router {
    const controller = Container.get(AuthController);

    const router = Router();

    router.post(
      "/authentication",
      RouteValidator.validate(AuthenticationValidator.rules()),
      controller.auth
    );

    router.post(
      "/authentication/:userId",
      RouteValidator.validate(LogoffValidator.rules()),
      controller.logoff
    );

    return router;
  }
}
