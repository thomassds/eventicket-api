import { Product } from "../../../database/entities";
import {
  EventInterface,
  ProductInterface,
  SearchParams,
} from "../../interfaces";
import { PaginatedResponse } from "./paginatedResponse";

export interface ProductRepositoryInterface {
  store({
    amountTickets,
    description,
    eventId,
    value,
  }: ProductInterface): Promise<Product>;
  update({
    id,
    amountTickets,
    description,
    eventId,
    value,
  }: ProductInterface): Promise<void>;
  getAll(
    eventId: number,
    searchParams: SearchParams
  ): Promise<PaginatedResponse<Product>>;
  getOneById(productId: number): Promise<Product | undefined>;
}
