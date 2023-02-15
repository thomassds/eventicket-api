import Container, { Service } from "typedi";
import { UnprocessedEntityError } from "../../../config/exceptions";
import { UserInterface } from "../interfaces";
import { UserRepository } from "../repositories";
import { Bcrypt } from "../services/bcrypt";

@Service()
export class UserLogic {
  private userRepository: UserRepository;
  private bcrypt: Bcrypt;

  constructor() {
    this.userRepository = Container.get(UserRepository);
    this.bcrypt = Container.get(Bcrypt);
  }

  async store({ email, phone, password }: UserInterface) {
    const checkUser = await this.userRepository.findByEmailOrPhone({
      email,
      phone,
    });

    if (checkUser) {
      throw new UnprocessedEntityError(["Email ou telefone já cadastrados."]);
    }

    let passwordHash;
    if (password) {
      passwordHash = await this.bcrypt.generateHash(password);
    }

    return this.userRepository.store({ email, phone, password: passwordHash });
  }
}
