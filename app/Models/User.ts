import Task from 'App/Models/Task'
import { DateTime } from 'luxon'
import { BaseModel, column,hasMany,HasMany } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: String;

  @column()
  public email: String;

  @column()
  public senha: String;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
 
 


}
