import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryColumn()
  id: number;

  @Column({
    name: "email",
    nullable: false,
    type: "varchar",
  })
  email: string;

  @Column({
    name: "password",
    nullable: false,
    type: "varchar",
  })
  password: string;

  @Column({
    name: "phone",
    nullable: false,
    type: "varchar",
  })
  phone: string;

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
