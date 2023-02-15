import { Permission } from "../../../database/entities";
import { PermissionInterface } from "../../interfaces";

export interface PermissionRepositoryInterface {
  store(description: string): Promise<Permission>;
  update({ id, description }: PermissionInterface): Promise<void>;
  delete(id: number): Promise<void>;
  getAll(): Promise<Permission[]>;
  getOneById(id: number): Promise<Permission | undefined>;
}
