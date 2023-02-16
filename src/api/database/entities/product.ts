import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("products")
export class Product {
  @PrimaryColumn()
  id: number;

  @Column({ name: "event_id", nullable: false, type: "int4" })
  eventId: number;

  @Column({
    name: "description",
    nullable: false,
    type: "varchar",
  })
  description: string;

  @Column({
    name: "value",
    nullable: false,
    type: "float",
  })
  value: number;

  @Column({
    name: "amount_tickets",
    nullable: false,
    type: "int",
  })
  amountTickets: number;

  @CreateDateColumn({
    name: "created_at",
    nullable: false,
    type: "timestamptz",
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: "updated_at",
    nullable: false,
    type: "timestamptz",
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: "deleted_at",
    nullable: false,
    type: "timestamptz",
  })
  deletedAt: Date;
}
