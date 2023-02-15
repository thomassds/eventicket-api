import { Service } from "typedi";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { DatabaseError } from "../../../config/exceptions";
import { Session, User } from "../../database/entities";
import { SessionInterface } from "../interfaces";
import { SessionRepositoryInterface } from "./interfaces";

@Service()
@EntityRepository(Session)
export class SessionRepository implements SessionRepositoryInterface {
  private readonly repository: Repository<Session>;

  constructor() {
    this.repository = getRepository(Session);
  }

  async login({
    expireIn,
    revoke,
    token,
    userId,
  }: SessionInterface): Promise<Session> {
    try {
      await this.repository.update({ userId }, { revoke: true });

      const response = await this.repository.save({
        expireIn,
        revoke,
        token,
        userId,
      });

      return response;
    } catch (error) {
      throw new DatabaseError("Falha ao tentar cadastrar esta sessão");
    }
  }

  async logoff(userId: number): Promise<void> {
    try {
      await this.repository.update({ userId }, { revoke: true });

      return;
    } catch (error) {
      throw new DatabaseError("Falha ao tentar cadastrar esta sessão");
    }
  }
}
