import Container, { Service } from "typedi";
import { PermissionInterface } from "../interfaces";
import { PermissionRepository } from "../repositories";

@Service()
export class PermissionLogic {
  private permissionRepository: PermissionRepository;

  constructor() {
    this.permissionRepository = Container.get(PermissionRepository);
  }

  async store(description: string) {
    return this.permissionRepository.store(description);
  }

  async update(data: PermissionInterface) {
    return this.permissionRepository.update(data);
  }

  async delete(id: number) {
    return this.permissionRepository.delete(id);
  }

  async getOneById(id: number) {
    return this.permissionRepository.getOneById(id);
  }

  async getAll() {
    return this.permissionRepository.getAll();
  }
}
