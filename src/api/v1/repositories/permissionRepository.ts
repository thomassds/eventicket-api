import { Service } from "typedi";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { DatabaseError } from "../../../config/exceptions";
import { Permission } from "../../database/entities";
import { PermissionInterface } from "../interfaces";
import { PermissionRepositoryInterface } from "./interfaces";

@Service()
@EntityRepository(Permission)
export class PermissionRepository implements PermissionRepositoryInterface {
  private readonly repository: Repository<Permission>;

  constructor() {
    this.repository = getRepository(Permission);
  }

  async store(description: string): Promise<Permission> {
    try {
      const response = await this.repository.save({
        description,
      });

      return response;
    } catch (error) {
      throw new DatabaseError("Falha ao tentar criar uma permissão.");
    }
  }

  async update({ id, description }: PermissionInterface): Promise<void> {
    try {
      const response = await this.repository.update(
        { id: id },
        {
          description: description,
        }
      );

      return;
    } catch (error) {
      throw new DatabaseError("Falha ao tentar encontrar esta permissão.");
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.repository.delete({ id });

      return;
    } catch (error) {
      throw new DatabaseError("Falha ao tentar deletar esta permissão.");
    }
  }

  async getOneById(id: number): Promise<Permission | undefined> {
    try {
      const response = await this.repository.findOne({ where: { id } });

      return response;
    } catch (error) {
      throw new DatabaseError("Falha ao tentar encontrar esta permissão.");
    }
  }

  async getAll(): Promise<Permission[]> {
    try {
      const response = await this.repository.find();

      return response;
    } catch (error) {
      throw new DatabaseError("Falha ao tentar buscar todos as permissões.");
    }
  }
}
