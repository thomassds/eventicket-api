import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class createForeginKeys1676560502453 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKeys("user_permissions", [
      new TableForeignKey({
        name: "FK_user_id",
        columnNames: ["user_id"],
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        onDelete: "restrict",
      }),
      new TableForeignKey({
        name: "FK_permissions_id",
        columnNames: ["permission_id"],
        referencedTableName: "permissions",
        referencedColumnNames: ["id"],
        onDelete: "restrict",
      }),
    ]);
    await queryRunner.createForeignKey(
      "sessions",
      new TableForeignKey({
        name: "FK_user_id",
        columnNames: ["user_id"],
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        onDelete: "restrict",
      })
    );
    await queryRunner.createForeignKey(
      "profiles",
      new TableForeignKey({
        name: "FK_user_id",
        columnNames: ["user_id"],
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        onDelete: "restrict",
      })
    );
    await queryRunner.createForeignKey(
      "adresses",
      new TableForeignKey({
        name: "FK_user_id",
        columnNames: ["user_id"],
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        onDelete: "restrict",
      })
    );
    await queryRunner.createForeignKey(
      "events",
      new TableForeignKey({
        name: "FK_user_id",
        columnNames: ["user_id"],
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        onDelete: "restrict",
      })
    );
    await queryRunner.createForeignKey(
      "purchase_orders",
      new TableForeignKey({
        name: "FK_user_id",
        columnNames: ["user_id"],
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        onDelete: "restrict",
      })
    );
    await queryRunner.createForeignKey(
      "tickets",
      new TableForeignKey({
        name: "FK_user_id",
        columnNames: ["user_id"],
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        onDelete: "restrict",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("user_permissions", "FK_user_id");
    await queryRunner.dropForeignKey("user_permissions", "FK_permissions_id");
    await queryRunner.dropForeignKey("sessions", "FK_user_id");
    await queryRunner.dropForeignKey("profiles", "FK_user_id");
    await queryRunner.dropForeignKey("adresses", "FK_user_id");
    await queryRunner.dropForeignKey("events", "FK_user_id");
    await queryRunner.dropForeignKey("purchase_orders", "FK_user_id");
    await queryRunner.dropForeignKey("tickets", "FK_user_id");
  }
}
