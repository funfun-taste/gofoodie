import { COLLECTIONS, ConnectionNames } from '@database/database.config';
import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({ collection: COLLECTIONS.FEEDS_COMMENT, versionKey: false })
export class FeedComment {
  @Prop({ type: String })
  comment: string;

  @Prop({ type: Number })
  likeCount: number;

  @Prop({ type: Array })
  userPick: string[]; // userId []

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: COLLECTIONS.USERS })
  userId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: COLLECTIONS.FEEDS })
  feedId: mongoose.ObjectId;

  @Prop({ type: Boolean, default: false })
  isDeleted: boolean;

  @Prop({ type: Date, default: new Date(), required: false })
  createdDate: Date;

  @Prop({ type: Date, required: false })
  updatedDate: Date;

  @Prop({ type: Date, required: false })
  deletedDate: Date;
}

export const FeedCommentSchema = SchemaFactory.createForClass(FeedComment);

FeedCommentSchema.index({ feedId: 1 });

export type FeedCommentDocument = HydratedDocument<FeedComment>;

export const FeedCommentFeature = MongooseModule.forFeature(
  [
    {
      name: FeedComment.name,
      schema: FeedCommentSchema,
    },
  ],
  ConnectionNames.GO_FOODIE,
);
