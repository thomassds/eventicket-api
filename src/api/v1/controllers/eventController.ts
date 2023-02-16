import { Response, Request } from "express";
import Container, { Service } from "typedi";
import { EventLogic } from "../logics";

@Service()
export class EventController {
  private readonly eventLogic: EventLogic;

  constructor() {
    this.eventLogic = Container.get(EventLogic);
  }

  public store = async (req: Request, res: Response) => {
    const userId = Number(req.params.userId);
    const { name, description, amountTickets, startedAt, finishAt, online } =
      req.body;

    const response = await this.eventLogic.store({
      userId,
      name,
      description,
      amountTickets,
      finishAt,
      startedAt,
      online,
    });

    return res.status(201).json(response);
  };

  public update = async (req: Request, res: Response) => {
    const userId = Number(req.params.userId);
    const eventId = Number(req.params.eventId);

    const { name, description, amountTickets, startedAt, finishAt, online } =
      req.body;

    const response = await this.eventLogic.update({
      id: eventId,
      userId,
      name,
      description,
      amountTickets,
      finishAt,
      startedAt,
      online,
    });

    return res.status(201).json(response);
  };

  public getAll = async (req: Request, res: Response) => {
    const query = req.query as any;

    if (query.page) {
      query.page = Number(query.page);
    }

    if (query.perPage) {
      query.perPage = Number(query.perPage);
    }

    const response = await this.eventLogic.getAll(query);

    return res.status(201).json(response);
  };

  public getOneById = async (req: Request, res: Response) => {
    const eventId = Number(req.params.eventId);

    const response = await this.eventLogic.getOneById(eventId);

    return res.status(201).json(response);
  };
}
