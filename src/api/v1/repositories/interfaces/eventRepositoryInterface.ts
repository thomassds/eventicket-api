import { Event } from "../../../database/entities";
import { EventInterface, SearchParams } from "../../interfaces";
import { PaginatedResponse } from "./paginatedResponse";

export interface EventRepositoryInterface {
  store({
    userId,
    name,
    description,
    amountTickets,
    online,
    finishAt,
    startedAt,
  }: EventInterface): Promise<Event>;
  update({
    userId,
    name,
    description,
    amountTickets,
    online,
    finishAt,
    startedAt,
  }: EventInterface): Promise<void>;
  getAll(searchParams: SearchParams): Promise<PaginatedResponse<Event>>;
  getOneById(eventId: number): Promise<Event | undefined>;
}
