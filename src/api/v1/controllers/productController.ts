import { Response, Request } from "express";
import Container, { Service } from "typedi";
import { ProductLogic } from "../logics";

@Service()
export class ProductController {
  private readonly productLogic: ProductLogic;

  constructor() {
    this.productLogic = Container.get(ProductLogic);
  }

  public store = async (req: Request, res: Response) => {
    const eventId = Number(req.params.eventId);
    const { amountTickets, description, value } = req.body;

    const response = await this.productLogic.store({
      amountTickets,
      description,
      eventId,
      value,
    });

    return res.status(201).json(response);
  };

  public update = async (req: Request, res: Response) => {
    const eventId = Number(req.params.eventId);
    const productId = Number(req.params.productId);

    const { amountTickets, description, value } = req.body;

    const response = await this.productLogic.update({
      id: productId,
      amountTickets,
      description,
      eventId,
      value,
    });

    return res.status(201).json(response);
  };

  public getAll = async (req: Request, res: Response) => {
    const eventId = Number(req.params.eventId);

    const query = req.query as any;

    if (query.page) {
      query.page = Number(query.page);
    }

    if (query.perPage) {
      query.perPage = Number(query.perPage);
    }

    const response = await this.productLogic.getAll(eventId, query);

    return res.status(201).json(response);
  };
}
