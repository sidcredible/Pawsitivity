import {
  AutoIncrement, BelongsTo, BelongsToMany,
  Column,
  DataType, Default, ForeignKey, HasMany, HasOne,
  Model,
  PrimaryKey,
  Table,
  Unique
} from "sequelize-typescript";
import { City } from "./address/city.model";
import { Location } from "./address/location.model";
import { Area } from "./address/area.model";

@Table({
  timestamps: true,
  paranoid  : true,
  tableName : "users"
})
export class User extends Model<User> {
  @Unique
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @Column(DataType.STRING)
  name?: string;

  @Unique
  @Column(DataType.STRING)
  email?: string;

  @Unique
  @Column(DataType.STRING)
  mobile_no: string;

  @Unique
  @Column(DataType.STRING)
  alternate_no?: string;

  @Column(DataType.FLOAT)
  wallet?: number;

  @Column(DataType.FLOAT)
  secondary_wallet?: number;

  @Column(DataType.FLOAT)
  subscription_wallet?: number;

  @Column(DataType.STRING)
  address?: string;

  @Column(DataType.STRING)
  landmark?: string;

  @Column(DataType.STRING)
  state?: string;

  @ForeignKey(() => City)
  @Column(DataType.BIGINT)
  city_id?: number;

  @ForeignKey(() => Location)
  @Column(DataType.BIGINT)
  location_id?: number;

  @ForeignKey(() => Area)
  @Column(DataType.BIGINT)
  area_id?: number;

  @Column(DataType.STRING)
  pincode?: string;

  @Default(true)
  @Column(DataType.BOOLEAN)
  is_active: boolean;

  @Default(0)
  @Column(DataType.BOOLEAN)
  earned_referral: boolean;

  @Column(DataType.STRING)
  referral_code: string;

  @Column(DataType.BIGINT)
  referred_by?: number;

  @BelongsTo(() => City)
  city: City;

  @BelongsTo(() => Location)
  location: Location;

  @BelongsTo(() => Area)
  area: Area;
}
