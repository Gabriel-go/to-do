import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Client from './Client';

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public titulo: String;

  @column()
  public descricao: String;

  @column()
  public status: Number;

  @column()
  public user_id: Number;

  @column()
  public client_id: Number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User,{
    foreignKey: 'user_id'
  })
  public user: BelongsTo<typeof User>

  @belongsTo(() => Client,{
    foreignKey: 'client_id'
  })
  public client: BelongsTo<typeof Client>

}
