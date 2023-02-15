import { Response, Request } from "express";
import Container, { Service } from "typedi";
import { UserLogic } from "../logics";

@Service()
export class UserController {
  private readonly userLogic: UserLogic;

  constructor() {
    this.userLogic = Container.get(UserLogic);
  }

  public store = async (req: Request, res: Response) => {
    const { email, phone, password } = req.body;

    const response = await this.userLogic.store({
      email,
      phone,
      password,
    });

    return res.status(201).json(response);
  };
}
