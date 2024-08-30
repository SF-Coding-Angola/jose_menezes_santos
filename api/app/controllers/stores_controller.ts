import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'
import StoreRepository from '../repository/StoreRepository.js';
import { HttpStatus } from '#exceptions/httpStatus';
import { StoreValidator } from '#validators/store';

@inject()
export default class StoresController {

  constructor(protected storeRepository: StoreRepository) {}

  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const stores = await this.storeRepository.find()
    response.status(HttpStatus.OK).json(stores)
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.body();
    const validated = await StoreValidator.validate(data);

    const store = await this.storeRepository.save(validated);

    return response.status(HttpStatus.CREATED).json(store)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}