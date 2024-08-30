import { Exception } from '@adonisjs/core/exceptions'
import { HttpContext } from '@adonisjs/core/http'
import { HttpStatus } from './httpStatus.js'

export default class UnauthorizedException extends Exception {
  static status = 401

  async handle(error: unknown, ctx: HttpContext) {
    ctx.response.status(HttpStatus.UNAUTHORIZED).send({
      status: HttpStatus.UNAUTHORIZED,
      message: 'Unauthorized'
    })
  }
}