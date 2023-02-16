import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("events")
export class Event {
  @PrimaryColumn()
  id: number;

  @Column({ name: "user_id", nullable: false, type: "int4" })
  userId: number;

  @Column({
    name: "name",
    nullable: false,
    type: "varchar",
  })
  name: string;

  @Column({
    name: "description",
    nullable: false,
    type: "varchar",
  })
  description: string;

  @Column({
    name: "amount_tickets",
    nullable: false,
    type: "int",
  })
  amountTickets: number;

  @Column({
    name: "online",
    nullable: false,
    type: "boolean",
  })
  online: boolean;

  @Column({
    name: "started_at",
    nullable: false,
    type: "timestamptz",
  })
  startedAt: Date;

  @Column({
    name: "finish_at",
    nullable: false,
    type: "timestamptz",
  })
  finishAt: Date;

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
