import { User } from "../entities/Use";

export interface IUsersRepository{
    findByEmail(email: string):Promise<User>;
    save(user: User): Promise<void>;
}