import { sign } from "jsonwebtoken";
import { Service } from "typedi";
import { AppEnvs } from "../../../config/envs/appEnv";

@Service()
export class Jwt {
  generateToken(id: number) {
    return sign({ id }, AppEnvs.services.clientSecret);
  }
}
