import { Service } from "typedi";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { DatabaseError } from "../../../config/exceptions/databaseError";
import { User } from "../../database/entities";
import { UserInterface } from "../interfaces";
import { UserRepositoryInterface } from "./interfaces";

@Service()
@EntityRepository(User)
export class UserRepository implements UserRepositoryInterface {
  private readonly repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async store({ email, phone, password }: UserInterface): Promise<User> {
    try {
      const response = await this.repository.save({
        email,
        phone,
        password,
      });

      return response;
    } catch (error) {
      throw new DatabaseError("Falha ao tentar cadastrar este usuario.");
    }
  }

  async findByEmailOrPhone({
    email,
    phone,
  }: UserInterface): Promise<User | undefined> {
    try {
      const response = await this.repository.findOne({
        where: [{ email }, { phone }],
      });

      return response;
    } catch (error) {
      throw new DatabaseError("Falha ao tentar cadastrar este usuario.");
    }
  }

  async findByEmail(email: string): Promise<User | undefined> {
    try {
      const response = await this.repository.findOne({
        where: { email },
      });

      return response;
    } catch (error) {
      throw new DatabaseError("Falha ao tentar buscar este usuario.");
    }
  }
}
