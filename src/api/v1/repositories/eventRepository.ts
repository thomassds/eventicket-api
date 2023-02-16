import { Service } from "typedi";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { DatabaseError } from "../../../config/exceptions/databaseError";
import { Event } from "../../database/entities";
import { EventInterface, SearchParams } from "../interfaces";
import { EventRepositoryInterface, PaginatedResponse } from "./interfaces/";

@Service()
@EntityRepository(Event)
export class EventRepository implements EventRepositoryInterface {
  private readonly repository: Repository<Event>;

  constructor() {
    this.repository = getRepository(Event);
  }

  async store({
    userId,
    name,
    description,
    amountTickets,
    finishAt,
    startedAt,
    online,
  }: EventInterface): Promise<Event> {
    try {
      const response = await this.repository.save({
        userId,
        name,
        description,
        amountTickets,
        finishAt,
        startedAt,
        online,
      });

      return response;
    } catch (error) {
      throw new DatabaseError("Falha ao tentar cadastrar este evento.");
    }
  }

  async update({
    id,
    userId,
    name,
    description,
    amountTickets,
    online,
    finishAt,
    startedAt,
  }: EventInterface): Promise<void> {
    try {
      await this.repository.update(
        { id, userId },
        {
          name,
          description,
          amountTickets,
          finishAt,
          startedAt,
          online,
        }
      );

      return;
    } catch (error) {
      throw new DatabaseError("Falha ao tentar atualizar este evento.");
    }
  }

  async getAll(searchParams: SearchParams): Promise<PaginatedResponse<Event>> {
    try {
      const data = await this.repository.find({
        skip: searchParams.page,
        take: searchParams.perPage,
      });

      return {
        data,
        totalRows: data.length,
        totalPages: searchParams.perPage
          ? Math.ceil(data.length / searchParams.perPage)
          : 1,
        perPage: searchParams.perPage || null,
        page: searchParams.page || null,
      };
    } catch (error) {
      throw new DatabaseError("Falha ao tentar buscar estes evento.");
    }
  }

  async getOneById(eventId: number): Promise<Event | undefined> {
    try {
      const response = await this.repository.findOne({
        where: { id: eventId },
      });

      return response;
    } catch (error) {
      throw new DatabaseError("Falha ao tentar buscar este evento");
    }
  }
}
