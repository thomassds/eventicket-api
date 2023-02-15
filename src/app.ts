import express, { Express, json } from "express";
import "express-async-errors";
import Container from "typedi";
import { TypeORMConnection } from "./config/database";
import { DI } from "./config/di";
import { AppRouters } from "./config/routers";

export default class App {
  static async build() {
    const app: Express = express();

    const database = Container.get(TypeORMConnection);

    await database.connect();

    app.use(json());

    DI.register();

    AppRouters.load(app);

    AppRouters.handleError(app);

    return app;
  }
}
