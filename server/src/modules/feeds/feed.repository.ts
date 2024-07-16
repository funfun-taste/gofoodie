import { Injectable } from '@nestjs/common';
import { Feed, FeedDocument } from './schema/feed.schema';
import { InjectModel } from '@nestjs/mongoose';
import { COLLECTIONS, ConnectionNames } from '@database/database.config';
import { FilterQuery, Model } from 'mongoose';
import { CreateFeedPayloadDto } from './dto/create.feed.dto';
import { Projection } from '@lib/type/projection.type';
import { ObjectId } from 'mongodb';

@Injectable()
export class FeedRepository {
  constructor(
    @InjectModel(Feed.name, ConnectionNames.GO_FOODIE)
    private readonly feedModel: Model<FeedDocument>,
  ) {}

  async findOne(
    $filter: FilterQuery<FeedDocument>,
    $projection?: Projection<FeedDocument>,
  ) {
    return this.feedModel.findOne({ ...$filter }, { ...$projection }).lean();
  }

  async saveFeed(createFeed: CreateFeedPayloadDto): Promise<FeedDocument> {
    const model = new this.feedModel(createFeed);
    return model.save();
  }

  async findFeedDetailById(_id: ObjectId) {
    return this.feedModel
      .aggregate([
        {
          $match: { _id, isDeleted: false },
        },
        {
          $lookup: {
            from: 'shop',
            let: { shopId: { $toString: '$shopId' } },
            pipeline: [
              {
                $match: {
                  $expr: { $eq: ['$_id', { $toObjectId: '$$shopId' }] },
                },
              },
            ],
            as: 'shop',
          },
        },
        {
          $unwind: '$shop',
        },
        {
          $lookup: {
            from: 'files_feed_thumbnail',
            let: { feedFileIds: '$feedFileIds' },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $in: [
                      '$_id',
                      {
                        $map: {
                          input: '$$feedFileIds',
                          as: 'id',
                          in: { $toObjectId: '$$id' },
                        },
                      },
                    ],
                  },
                },
              },
              { $project: { path1: 1, _id: 0 } },
            ],
            as: 'filePaths',
          },
        },
      ])
      .exec();
  }

  async findOneFeedDetail(_id: ObjectId) {
    return this.feedModel
      .findOne({ _id, isDeleted: false })
      .populate({
        path: 'shopId',
        model: COLLECTIONS.SHOP,
      })
      .populate({
        path: 'feedFileIds',
        model: COLLECTIONS.FILES_FEED_THUMBNAIL,
        select: 'path1',
      })
      .exec();
  }

  async findFeedLists(
    region: string,
    $skip: number,
    $limit: number,
  ): Promise<FeedDocument[]> {
    return this.feedModel
      .aggregate([
        {
          $match: { isDeleted: false },
        },
        {
          $lookup: {
            from: COLLECTIONS.SHOP,
            let: { shopId: { $toString: '$shopId' } },
            pipeline: [
              {
                $match: {
                  $expr: { $eq: ['$_id', { $toObjectId: '$$shopId' }] },
                },
              },
              { $match: { sido: region } },
            ],
            as: 'shop',
          },
        },
        {
          $unwind: '$shop',
        },
        {
          $lookup: {
            from: COLLECTIONS.FILES_FEED_THUMBNAIL,
            let: { feedFileIds: '$feedFileIds' },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $in: [
                      '$_id',
                      {
                        $map: {
                          input: '$$feedFileIds',
                          as: 'id',
                          in: { $toObjectId: '$$id' },
                        },
                      },
                    ],
                  },
                },
              },
              { $project: { path1: 1, _id: 0 } },
            ],
            as: 'filePaths',
          },
        },
        {
          $skip: $skip,
        },
        {
          $limit: $limit,
        },
      ])
      .exec();
  }

  async findMyFeedLists(userId: string, $skip: number, $limit: number) {
    return this.feedModel
      .aggregate([
        { $match: { userId, isDeleted: false } },
        {
          $lookup: {
            from: COLLECTIONS.SHOP,
            localField: 'shopId',
            foreignField: '_id',
            as: 'shop',
          },
        },
        {
          $unwind: '$shop',
        },
        {
          $lookup: {
            from: COLLECTIONS.FILES_FEED_THUMBNAIL,
            localField: 'feedFileIds',
            foreignField: '_id',
            as: 'files',
          },
        },
      ])
      .exec();
  }

  async findRecentlyFeed(userId: ObjectId) {
    return this.feedModel
      .aggregate([
        { $match: { userId, isDeleted: false } },
        {
          $lookup: {
            from: COLLECTIONS.SHOP,
            localField: 'shopId',
            foreignField: '_id',
            as: 'shop',
          },
        },
        {
          $unwind: '$shop',
        },
        {
          $lookup: {
            from: COLLECTIONS.FILES_FEED_THUMBNAIL,
            localField: 'feedFileIds',
            foreignField: '_id',
            as: 'files',
          },
        },
        {
          $sort: { createdDate: -1 },
        },
        {
          $limit: 10,
        },
      ])
      .exec();
  }
}
