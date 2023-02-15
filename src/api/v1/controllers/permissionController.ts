import { Response, Request } from "express";
import Container, { Service } from "typedi";
import { PermissionLogic } from "../logics";

@Service()
export class PermissionController {
  private readonly permissionLogic: PermissionLogic;

  constructor() {
    this.permissionLogic = Container.get(PermissionLogic);
  }

  public store = async (req: Request, res: Response) => {
    const { description } = req.body;

    const response = await this.permissionLogic.store(description);

    return res.status(201).json(response);
  };

  public update = async (req: Request, res: Response) => {
    const permissionId = Number(req.params.permissionId);
    const { description } = req.body;

    const response = await this.permissionLogic.update({
      id: permissionId,
      description,
    });

    return res.status(201).json(response);
  };

  public delete = async (req: Request, res: Response) => {
    const permissionId = Number(req.params.permissionId);

    const response = await this.permissionLogic.delete(permissionId);

    return res.status(204).json(response);
  };

  public getOneById = async (req: Request, res: Response) => {
    const permissionId = Number(req.params.permissionId);

    const response = await this.permissionLogic.getOneById(permissionId);

    return res.status(200).json(response);
  };

  public getAll = async (req: Request, res: Response) => {
    const response = await this.permissionLogic.getAll();

    return res.status(200).json(response);
  };
}
