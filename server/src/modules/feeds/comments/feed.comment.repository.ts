import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  FeedComment,
  FeedCommentDocument,
} from '@modules/feeds/comments/schema/feed.comment.schema';
import { ConnectionNames } from '@database/database.config';
import { Model } from 'mongoose';

@Injectable()
export class FeedCommentRepository {
  constructor(
    @InjectModel(FeedComment.name, ConnectionNames.GO_FOODIE)
    private readonly feedCommentModel: Model<FeedCommentDocument>,
  ) {}
}
