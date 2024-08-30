import User from "#models/user";
import hash from "@adonisjs/core/services/hash";
import { LoginDto } from "../dto/LoginDto.js";
import { RegisterDto } from "../dto/registerDto.js";
import UnauthorizedException from "#exceptions/unauthorized_exception";
import { inject } from "@adonisjs/core";
import { UserRepositoryImplementation } from "../repository/Implementation/UserRepositoryImplementaion.js";
import AlreadyUsedException from "#exceptions/already_used_exception";


@inject()
export class AuthService{

    constructor(protected userRepository: UserRepositoryImplementation) {}

    async login(data: LoginDto) {
        const user = await this.userRepository.findByUsername(data.username)

        if(!user) {
            throw new UnauthorizedException()
        }

        const passwordIsTrue = await hash.verify(user!.password, data.password)

        if(!passwordIsTrue) {
            throw new UnauthorizedException()
        }

        return this.generateToken(user!);

    }

    public async Register(data: RegisterDto) {
        const existUser = await this.userRepository.findByUsername(data.username)

        if(existUser) {
            throw new AlreadyUsedException()
        }


        const user = await this.userRepository.save(data)

        return this.generateToken(user);
           
    }


    public async generateToken(user: User) {
        const token = await User.accessTokens.create(user);

        return {
            user: user.fullName,
            token: token.value!.release()
        }
    }


    
}