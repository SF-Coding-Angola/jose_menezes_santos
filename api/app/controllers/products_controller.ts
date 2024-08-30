import { HttpStatus } from '#exceptions/httpStatus';
import Product from '#models/product';
import { ProductValidator } from '#validators/product';
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app';
import db from '@adonisjs/lucid/services/db'
import { ProductDto } from '../dto/ProductDto.js';

export default class ProductsController {


  
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const product = await db.from('products');

    return response.status(HttpStatus.OK).json(product);
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, auth }: HttpContext) {

    const file = request.file('photo',  {
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg']
    })
    


    
    const data = request.body()
    const validated: ProductDto = await ProductValidator.validate(data)
    await file?.move(app.makePath('storage/uploads'))

    const product = await Product.create({
      name: validated.name,
      categor: validated.category,
      price: validated.price,
      quantity: validated.quantity,
      photo: file?.clientName,
      storeId: validated.store
    })

    return product
    
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