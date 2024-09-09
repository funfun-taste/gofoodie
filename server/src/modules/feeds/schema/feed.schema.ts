import { COLLECTIONS, ConnectionNames } from '@database/database.config';
import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({ collection: COLLECTIONS.FEEDS, versionKey: false })
export class Feed {
  @Prop({ type: String })
  content: string;

  @Prop({ type: Date, default: new Date(), required: false })
  createdDate: Date;

  @Prop({ type: Date })
  updatedDate: Date;

  @Prop({ type: Boolean, default: false })
  isDeleted: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: COLLECTIONS.USERS })
  userId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: COLLECTIONS.SHOP })
  shopId: string;

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: COLLECTIONS.FILES_FEED_THUMBNAIL,
  })
  feedFileIds: string[];
}

export const FeedSchema = SchemaFactory.createForClass(Feed);

FeedSchema.index({ userId: 1, isDeleted: 1 });

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
