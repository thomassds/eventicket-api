import express, { Express } from "express";
import "express-async-errors";
import { AppRouters } from "./config/routers";

export default class App {
  static async build() {
    const app: Express = express();

    AppRouters.load(app);

    AppRouters.handleError(app);

    return app;
  }
}
