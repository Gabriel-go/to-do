import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tasks extends BaseSchema {
  protected tableName = 'tasks'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('user_Id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
