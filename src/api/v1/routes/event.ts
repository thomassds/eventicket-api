import { Router } from "express";
import Container from "typedi";
import { RouteValidator } from "./validations";
import { StoreEventValidator } from "./schemas/events/storeEvent";
import { UpdateEventValidator } from "./schemas/events/updateEvent";
import { EventController } from "../controllers";
import { AuthenticatedMiddleware } from "../../middlewares/";
import { GetOneEventByIdValidator } from "./schemas/events/getOneEventById";
import { GetAllEventValidator } from "./schemas/events/getAllEvent";

export class EventRouter {
  static getRouter(): Router {
    const router = Router();
    const checkAuthenticated = Container.get(AuthenticatedMiddleware);
    const controller = Container.get(EventController);

    router.post(
      "/users/:userId/events",
      RouteValidator.validate(StoreEventValidator.rules()),
      checkAuthenticated.handle,
      controller.store
    );

    router.put(
      "/users/:userId/events/:eventId",
      RouteValidator.validate(UpdateEventValidator.rules()),
      checkAuthenticated.handle,
      controller.store
    );

    router.get(
      "/users/:userId/events",
      RouteValidator.validate(GetAllEventValidator.rules()),
      checkAuthenticated.handle,
      controller.getAll
    );

    router.get(
      "/users/:userId/events/:eventId",
      checkAuthenticated.handle,
      RouteValidator.validate(GetOneEventByIdValidator.rules()),
      controller.getOneById
    );
    return router;
  }
}
