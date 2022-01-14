import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tasks extends BaseSchema {
  protected tableName = 'tasks'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('usersId')
      .unsigned()
      .references('users.id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
