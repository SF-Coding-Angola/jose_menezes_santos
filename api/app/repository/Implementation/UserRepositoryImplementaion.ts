import User from "#models/user";
import { RegisterDto } from "../../dto/registerDto.js";
import AbstractUserRepository from "../AbstractUserRepository.js";

export class UserRepositoryImplementation implements AbstractUserRepository {

    findByUsername(email: string): Promise<User | null> {
        return User.findBy('username', email);
    }


    save(data: RegisterDto): Promise<User> {
        return User.create({
            fullName: data.fullName,
            username: data.username,
            password: data.password
        })
    }
    findAll(): Promise<any> {
        return User.all();
    }

}