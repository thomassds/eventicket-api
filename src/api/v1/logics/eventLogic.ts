import Container, { Service } from "typedi";
import { EventInterface } from "../interfaces";
import { SearchParams } from "../interfaces";
import { EventRepository } from "../repositories";

@Service()
export class EventLogic {
  private eventRepository: EventRepository;

  constructor() {
    this.eventRepository = Container.get(EventRepository);
  }

  async store({
    userId,
    name,
    description,
    amountTickets,
    online,
    startedAt,
    finishAt,
  }: EventInterface) {
    return await this.eventRepository.store({
      userId,
      name,
      description,
      amountTickets,
      online,
      startedAt,
      finishAt,
    });
  }

  async update({
    id,
    userId,
    name,
    description,
    amountTickets,
    online,
    startedAt,
    finishAt,
  }: EventInterface) {
    return await this.eventRepository.update({
      id,
      userId,
      name,
      description,
      amountTickets,
      online,
      startedAt,
      finishAt,
    });
  }

  async getAll({ page, perPage }: SearchParams = {}) {
    return await this.eventRepository.getAll({
      page: page ? page : 0,
      perPage: perPage ? perPage : 0,
    });
  }

  async getOneById(eventId: number) {
    return await this.eventRepository.getOneById(eventId);
  }
}
