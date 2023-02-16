import { Request, Response, NextFunction } from "express";
import Container, { Service } from "typedi";
import { UnauthenticatedError } from "../../config/exceptions/unauthenticatedError";
import { SessionRepository } from "../v1/repositories";

@Service()
export class AuthenticatedMiddleware {
  private sessionRepository: SessionRepository;

  constructor() {
    this.sessionRepository = Container.get(SessionRepository);
  }

  public handle = async (req: Request, res: Response, next: NextFunction) => {
    const userId = Number(req.params.userId);
    const authorizationHeader = req.header("authorization");

    if (!authorizationHeader) {
      throw new UnauthenticatedError("Missing authorization header.");
    }

    const [, token] = authorizationHeader.split(" ");

    if (!token || token === "") {
      throw new UnauthenticatedError("Missing token.");
    }

    try {
      const response = await this.sessionRepository.getByUserIdAndToken(
        userId,
        token
      );

      if (!response) {
        throw new UnauthenticatedError("Unauthorizated.");
      }
    } catch (error) {
      throw new UnauthenticatedError();

      next(error);
    }

    next();
  };
}
