import Container from "typedi";
import { getCustomRepository } from "typeorm";
import {
  PermissionRepository,
  UserRepository,
  SessionRepository,
} from "../api/v1/repositories";

export class DI {
  static register() {
    Container.set(
      "PermissionRepository",
      getCustomRepository(PermissionRepository)
    );
    Container.set("SessionRepository", getCustomRepository(SessionRepository));
    Container.set("UserRepository", getCustomRepository(UserRepository));
  }
}
