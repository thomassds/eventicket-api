import { User } from "../../../database/entities";
import { UserInterface } from "../../interfaces";

export interface UserRepositoryInterface {
  store({ email, phone, password }: UserInterface): Promise<User>;
  findByEmailOrPhone({
    email,
    phone,
  }: UserInterface): Promise<User | undefined>;
}
