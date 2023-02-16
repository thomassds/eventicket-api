import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user";

@Entity("sessions")
export class Session {
  @PrimaryColumn()
  id: number;

  @Column({ name: "user_id", nullable: false, type: "int4" })
  userId: number;

  @Column({
    name: "revoke",
    nullable: false,
    type: "boolean",
  })
  revoke: boolean;

  @Column({
    name: "token",
    nullable: false,
    type: "varchar",
  })
  token: string;

  @Column({
    name: "expire_in",
    nullable: false,
    type: "timestamptz",
  })
  expireIn: Date;

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

  @OneToOne(() => User, (user) => user.sessions)
  user: User;
}
