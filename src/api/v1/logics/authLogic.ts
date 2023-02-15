import Container, { Service } from "typedi";
import { UnprocessedEntityError } from "../../../config/exceptions";
import { AuthInterface } from "../interfaces";
import { UserRepository } from "../repositories";
import { SessionRepository } from "../repositories/sessionRepository";
import { Bcrypt } from "../services/bcrypt";
import { Jwt } from "../services/jwt";

@Service()
export class AuthLogic {
  private userRepository: UserRepository;
  private sessionRepository: SessionRepository;
  private bcrypt: Bcrypt;
  private jwt: Jwt;

  constructor() {
    this.userRepository = Container.get(UserRepository);
    this.sessionRepository = Container.get(SessionRepository);
    this.bcrypt = Container.get(Bcrypt);
    this.jwt = Container.get(Jwt);
  }

  async auth({ email, password }: AuthInterface) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new UnprocessedEntityError(["Usuario não encontrado."]);
    }

    const checkUser = await this.bcrypt.compareHash(password, user.password);
    if (!checkUser) {
      throw new UnprocessedEntityError(["Senha invalida."]);
    }

    const token = this.jwt.generateToken(user.id);

    const response = await this.sessionRepository.login({
      expireIn: new Date(),
      revoke: false,
      token,
      userId: user.id,
    });

    return response;
  }

  async logoff(userId: number) {
    return this.sessionRepository.logoff(userId);
  }
}
