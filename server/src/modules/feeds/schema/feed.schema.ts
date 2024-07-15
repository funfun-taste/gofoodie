import { COLLECTIONS, ConnectionNames } from '@database/database.config';
import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ collection: COLLECTIONS.FEEDS, versionKey: false })
export class Feed {
  @Prop({ type: String })
  content: string;

  @Prop({ type: String })
  userId: string;

  @Prop({ type: String })
  shopId: string;

  @Prop({ type: Array })
  feedFileIds: string[];

  @Prop({ type: Date, default: new Date(), required: false })
  createdDate: Date;

  @Prop({ type: Date })
  updatedDate: Date;

  @Prop({ type: Boolean, dafault: false })
  isDeleted: boolean;
}

export const FeedSchema = SchemaFactory.createForClass(Feed);

export type FeedDocument = HydratedDocument<Feed>;

export const FeedFeature = MongooseModule.forFeature(
  [
    {
      name: Feed.name,
      schema: FeedSchema,
    },
  ],
  ConnectionNames.GO_FOODIE,
);
