import { Response, Request } from "express";
import Container, { Service } from "typedi";
import { AuthLogic } from "../logics";

@Service()
export class AuthController {
  private readonly authLogic: AuthLogic;

  constructor() {
    this.authLogic = Container.get(AuthLogic);
  }

  public auth = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const response = await this.authLogic.auth({
      email,
      password,
    });

    return res.status(201).json(response);
  };

  public logoff = async (req: Request, res: Response) => {
    const userId = Number(req.params.userId);

    const response = await this.authLogic.logoff(userId);

    return res.status(201).json(response);
  };
}
