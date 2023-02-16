import { Router } from "express";
import Container from "typedi";
import { RouteValidator } from "./validations";
import { ProductController } from "../controllers";
import { AuthenticatedMiddleware } from "../../middlewares/";
import { StoreProductValidator } from "./schemas/products/storeProduct";
import { UpdateProductValidator } from "./schemas/products/updateProduct";
import { GetAllProductValidator } from "./schemas/products/getAllProducts";

export class ProductRouter {
  static getRouter(): Router {
    const router = Router();
    const checkAuthenticated = Container.get(AuthenticatedMiddleware);
    const controller = Container.get(ProductController);

    router.post(
      "/users/:userId/events/:eventId/products",
      RouteValidator.validate(StoreProductValidator.rules()),
      checkAuthenticated.handle,
      controller.store
    );

    router.put(
      "/users/:userId/events/:eventId/products/:productId",
      RouteValidator.validate(UpdateProductValidator.rules()),
      checkAuthenticated.handle,
      controller.update
    );

    router.get(
      "/users/:userId/events/:eventId/products",
      RouteValidator.validate(GetAllProductValidator.rules()),
      checkAuthenticated.handle,
      controller.getAll
    );

    return router;
  }
}
