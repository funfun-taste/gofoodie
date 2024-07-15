import { COLLECTIONS, ConnectionNames } from '@database/database.config';
import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ collection: COLLECTIONS.SHOP, versionKey: false })
export class Shop {
  @Prop({ type: String })
  title: string;

  @Prop({ type: String, required: false })
  description: string;

  @Prop({ type: String, required: false })
  salesHours: string;

  @Prop({ type: String, required: false })
  dayOff: string;

  @Prop({ type: String, required: false })
  fullAddress: string;

  @Prop({ type: String, required: false })
  sigungu: string;

  @Prop({ type: String, required: false })
  sido: string;

  @Prop({ type: String, required: false })
  x: string;

  @Prop({ type: String, required: false })
  y: string;

  @Prop({ type: String })
  category: string;

  @Prop({ type: Date, default: new Date(), required: false })
  createdDate: Date;

  @Prop({ type: Date, required: false })
  updatedDate: Date;

  @Prop({ type: Date, required: false })
  deletedDate: Date;

  @Prop({ type: Boolean, dafault: false })
  isDeleted: boolean;

  @Prop({ type: String })
  userId: string;
}

export const ShopSchema = SchemaFactory.createForClass(Shop);

export type ShopDocument = HydratedDocument<Shop>;

export const ShopFeature = MongooseModule.forFeature(
  [{ name: Shop.name, schema: ShopSchema }],
  ConnectionNames.GO_FOODIE,
);
