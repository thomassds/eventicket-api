import { Router, NextFunction, Request, Response, Express } from "express";
import * as swaggerUi from "swagger-ui-express";
import * as YAMLJS from "yamljs";
import { getV1Routes } from "../api/v1/routes";
import { HttpError } from "./exceptions";

export class AppRouters {
  static load(app: Express) {
    try {
      const router = Router();

      router.use("/api", getV1Routes());

      const swaggerDocument = YAMLJS.load("./swagger.yml");

      router.use("^/$", (req, res) => {
        return res.redirect("/api-docs");
      });
      router.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocument)
      );

      app.use(router);
    } catch (error) {
      console.log(error);
    }
  }

  static handleError(app: Express) {
    console.info("Loading ErrorHandler");

    app.use(
      (
        error: Error,
        request: Request,
        response: Response,
        next: NextFunction
      ) => {
        console.log(`Error handler - ${error}`);

        if (error instanceof HttpError) {
          return response.status(error.statusCode).json({
            code: error.getHttpCode(),

            message: error.message,
          });
        }

        return response.status(500).send("Something broke!");
      }
    );
  }
}
