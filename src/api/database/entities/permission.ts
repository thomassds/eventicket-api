import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user";

@Entity("permissions")
export class Permission {
  @PrimaryColumn()
  id: number;

  @Column({
    name: "description",
    nullable: false,
    type: "varchar",
  })
  description: string;

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

  @ManyToMany(() => User, (user) => user.permissions)
  users: User[];
}
