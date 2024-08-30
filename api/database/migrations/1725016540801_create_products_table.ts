import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('product_name')
      table.decimal('price')
      table.text('description')
      table
      .integer('store_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('stores')
      .onDelete('CASCADE')
      table.integer('quantity')
      table.enum('categor', ['A', 'E', 'C', 'HG', 'HB'])
      table.string('photo')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}