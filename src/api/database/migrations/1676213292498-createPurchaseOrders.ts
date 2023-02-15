import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPurchaseOrders1676213292498 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "purchase_orders",
        columns: [
          {
            name: "id",
            type: "serial",
            isPrimary: true,
          },
          {
            name: "user_id",
            type: "int",
            isNullable: false,
          },
          {
            name: "event_id",
            type: "int",
            isNullable: false,
          },
          {
            name: "description",
            type: "int",
            isNullable: true,
          },
          {
            name: "value",
            type: "float",
            isNullable: false,
          },
          {
            name: "discount",
            type: "float",
            isNullable: false,
          },
          {
            name: "total_value",
            type: "float",
            isNullable: false,
          },
          {
            name: "execute",
            type: "float",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamptz",
            isNullable: false,
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamptz",
            isNullable: false,
            default: "now()",
          },
          {
            name: "deleted_at",
            type: "timestamptz",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("purchase_orders");
  }
}
