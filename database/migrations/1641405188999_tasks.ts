import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tasks extends BaseSchema {
  protected tableName = 'tasks'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('client_id')
      .unsigned()
      .references('clients.id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
