import { Session } from "../../../database/entities";
import { SessionInterface } from "../../interfaces";

export interface SessionRepositoryInterface {
  login({
    userId,
    expireIn,
    revoke,
    token,
  }: SessionInterface): Promise<Session>;
  logoff(userId: number): Promise<void>;
}
