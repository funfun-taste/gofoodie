import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { COLLECTIONS, ConnectionNames } from '@database/database.config';
import { HydratedDocument } from 'mongoose';

@Schema({ collection: COLLECTIONS.USERS, versionKey: false })
export class User {
  @Prop({ type: String })
  username: string;

  @Prop({ type: String })
  creatorId: string;

  @Prop({ type: String, unique: true, required: true })
  uniqueId: string; // 고유값

  @Prop({ type: Date, default: new Date(), required: false })
  createdDate: Date;

  @Prop({ type: String, default: 'default.png' })
  profileImage: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.index({ uniqueId: 1 }, { unique: true });

export type UserDocument = HydratedDocument<User>;

export const UserFeature = MongooseModule.forFeature(
  [{ name: User.name, schema: UserSchema }],
  ConnectionNames.GO_FOODIE,
);
