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
  tableName : "animals"
})
export class Animal extends Model<Animal> {
  @Unique
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @Column(DataType.STRING)
  title: string;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  phone: string;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  gender: string;

  @Column(DataType.STRING)
  type: string;

  @Column(DataType.STRING)
  color?: string;

  @Column(DataType.STRING)
  age: string;

  @Column(DataType.TEXT)
  description?: string;

  @Column(DataType.STRING)
  breed?: string;

  @Column(DataType.STRING)
  size: string;

  @Column(DataType.BOOLEAN)
  is_adopted: boolean;

  @Column(DataType.BOOLEAN)
  is_vaccinated: boolean;

  @Column(DataType.TEXT)
  image_url?: string;
}
