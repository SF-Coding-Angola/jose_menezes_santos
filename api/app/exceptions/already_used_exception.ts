import { Exception } from '@adonisjs/core/exceptions'
import { HttpStatus } from './httpStatus.js'
import { HttpContext } from '@adonisjs/core/http'

export default class AlreadyUsedException extends Exception {
  static status = HttpStatus.CONFLICT

  async handle(error: unknown, ctx: HttpContext) {
    ctx.response.status(HttpStatus.CONFLICT).send({
      status: HttpStatus.CONFLICT,
      message: 'Username just used'
    })
  }
}