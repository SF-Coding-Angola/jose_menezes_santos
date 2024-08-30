import { HttpStatus } from '#exceptions/httpStatus';
import { AuthService } from '#services/AuthService';
import { CreateUserValidator, LoginValidator } from '#validators/user'
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AuthController {

    constructor(protected authService: AuthService) {}

    public async register({request, response}: HttpContext) {
        const data = request.body()
        const validated = await CreateUserValidator.validate(data);
        const token = await this.authService.Register(validated);


        return response.status(HttpStatus.CREATED).json(token)
    }

    public async login({ request, response }: HttpContext) {
        const data = request.only(['username', 'password'])
        const validated = await LoginValidator.validate(data)

        const token = await this.authService.login(data);

        return response.status(HttpStatus.OK).json(token)
    }
}