import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Store from './store.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'product_name'})
  declare name: string

  @column()
  declare categor: string

  @column()
  declare price: number

  @column()
  declare quantity: number

  @column()
  declare photo: string

  @column()
  declare storeId: number
  
  @belongsTo(() => Store)
  declare store: BelongsTo<typeof Store>;
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}