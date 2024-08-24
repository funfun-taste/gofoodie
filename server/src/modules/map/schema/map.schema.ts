import { COLLECTIONS, ConnectionNames } from '@database/database.config';
import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ collection: COLLECTIONS.MAP, versionKey: false })
export class Map {
  @Prop({ type: String, required: false })
  x: string;

  @Prop({ type: String, required: false })
  y: string;

  @Prop({ type: String, required: false })
  marker: string;

  @Prop({ type: Date, default: new Date(), required: false })
  createdDate: Date;

  @Prop({ type: Date, required: false })
  updatedDate: Date;

  @Prop({ type: Date, required: false })
  deletedDate: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: COLLECTIONS.USERS })
  userId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: COLLECTIONS.FEEDS })
  feedId: string;
}

export const MapSchema = SchemaFactory.createForClass(Map);
export type MapDocument = HydratedDocument<Map>;

export const MapFeature = MongooseModule.forFeature(
  [{ name: Map.name, schema: MapSchema }],
  ConnectionNames.GO_FOODIE,
);
