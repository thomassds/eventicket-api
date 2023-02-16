import Container, { Service } from "typedi";
import { ProductInterface } from "../interfaces";
import { SearchParams } from "../interfaces";
import { ProductRepository } from "../repositories";

@Service()
export class ProductLogic {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = Container.get(ProductRepository);
  }

  async store({
    amountTickets,
    description,
    eventId,
    value,
  }: ProductInterface) {
    return await this.productRepository.store({
      amountTickets,
      description,
      eventId,
      value,
    });
  }

  async update({
    id,
    amountTickets,
    description,
    eventId,
    value,
  }: ProductInterface) {
    return await this.productRepository.update({
      id,
      amountTickets,
      description,
      eventId,
      value,
    });
  }

  async getAll(eventId: number, { page, perPage }: SearchParams = {}) {
    return await this.productRepository.getAll(eventId, {
      page: page ? page : 0,
      perPage: perPage ? perPage : 0,
    });
  }

  async getOneById(productId: number) {
    return await this.productRepository.getOneById(productId);
  }
}
