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
  tableName : "queries"
})
export class Query extends Model<Query> {
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

  @ForeignKey(() => Animal)
  @Column(DataType.BIGINT)
  animal_id: number;

  @BelongsTo(() => Animal)
  animal: Animal;
}
