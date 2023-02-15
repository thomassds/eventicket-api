import Container from "typedi";
import { getCustomRepository } from "typeorm";
import { PermissionRepository } from "../api/v1/repositories";

export class DI {
  static register() {
    Container.set(
      "PermissionRepository",
      getCustomRepository(PermissionRepository)
    );
  }
}
