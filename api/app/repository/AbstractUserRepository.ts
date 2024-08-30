import User from "#models/user";
import { RegisterDto } from "../dto/registerDto.js";

export default abstract class AbstractUserRepository{
    abstract findAll(): Promise<User>;
    abstract findByUsername(email: string):Promise<User | null>;
    abstract save(data: RegisterDto): Promise<User>
}