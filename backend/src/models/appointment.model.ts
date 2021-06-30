import {
  AfterDelete,
  AutoIncrement, BeforeCreate, BelongsTo, BelongsToMany,
  Column,
  DataType, Default, ForeignKey, HasMany, HasOne,
  Model,
  PrimaryKey,
  Table,
  Unique
} from "sequelize-typescript";
import { User } from "./user.model";
import { isNullOrUndefined } from "util";
import { CompactProduct } from "./compact-product.model";

@Table({
  timestamps: true,
  paranoid  : false,
  tableName : "appointments"
})
export class Appointment extends Model<Appointment> {
  @Unique
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  phone: string;

  @Column(DataType.TEXT)
  comments: string;

  @Column(DataType.STRING)
  datetime: string;

  @Column(DataType.STRING)
  category: string;

  @Column(DataType.STRING)
  service_type: string;
}
