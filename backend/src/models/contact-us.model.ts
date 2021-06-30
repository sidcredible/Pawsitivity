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
import { Animal } from "./animal.model";

@Table({
  timestamps: true,
  paranoid  : false,
  tableName : "contact_us"
})
export class ContactUs extends Model<ContactUs> {
  @Unique
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @Column(DataType.STRING)
  subject: string;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  phone: string;

  @Column(DataType.STRING)
  message: string;

}
