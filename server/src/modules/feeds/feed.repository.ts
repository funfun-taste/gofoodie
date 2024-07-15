import { Injectable } from '@nestjs/common';
import { Feed, FeedDocument } from './schema/feed.schema';
import { InjectModel } from '@nestjs/mongoose';
import { ConnectionNames } from '@database/database.config';
import { Model } from 'mongoose';
import { CreateFeedPayloadDto } from './dto/create.feed.dto';

@Injectable()
export class FeedRepository {
  constructor(
    @InjectModel(Feed.name, ConnectionNames.GO_FOODIE)
    private readonly feedModel: Model<FeedDocument>,
  ) {}

  async saveFeed(createFeed: CreateFeedPayloadDto): Promise<FeedDocument> {
    const model = new this.feedModel(createFeed);
    return model.save();
  }
}
