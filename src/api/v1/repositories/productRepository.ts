import { Service } from "typedi";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { DatabaseError } from "../../../config/exceptions/databaseError";
import { Product } from "../../database/entities";
import { ProductInterface, SearchParams } from "../interfaces";
import { PaginatedResponse } from "./interfaces";
import { ProductRepositoryInterface } from "./interfaces/productRepositoryInterface";

@Service()
@EntityRepository(Product)
export class ProductRepository implements ProductRepositoryInterface {
  private readonly repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  async store({
    amountTickets,
    eventId,
    description,
    value,
  }: ProductInterface): Promise<Product> {
    try {
      const response = await this.repository.save({
        amountTickets,
        eventId,
        description,
        value,
      });

      return response;
    } catch (error) {
      console.log(error);
      throw new DatabaseError("Falha ao tentar cadastrar este produto.");
    }
  }

  async update({
    id,
    amountTickets,
    description,
    eventId,
    value,
  }: ProductInterface): Promise<void> {
    try {
      await this.repository.update(
        { id },
        {
          amountTickets,
          description,
          eventId,
          value,
        }
      );

      return;
    } catch (error) {
      throw new DatabaseError("Falha ao tentar atualizar este produto.");
    }
  }

  async getAll(
    eventId: number,
    searchParams: SearchParams
  ): Promise<PaginatedResponse<Product>> {
    try {
      const data = await this.repository.find({
        where: { eventId },
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
      throw new DatabaseError("Falha ao tentar buscar estes produto.");
    }
  }

  async getOneById(productId: number): Promise<Product | undefined> {
    try {
      const response = await this.repository.findOne({
        where: { id: productId },
      });

      return response;
    } catch (error) {
      throw new DatabaseError("Falha ao tentar buscar este produto");
    }
  }
}
