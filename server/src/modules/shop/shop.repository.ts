import { ConnectionNames } from '@database/database.config';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Shop, ShopDocument } from './schema/shop.schema';
import { FilterQuery, Model } from 'mongoose';
import { Projection } from '@lib/type/projection.type';
import { CreateShopDto } from './dto/create.shop.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class ShopRepository {
  constructor(
    @InjectModel(Shop.name, ConnectionNames.GO_FOODIE)
    private readonly shopModel: Model<ShopDocument>,
  ) {}

  async findShopCoordinateByUserId(userId: ObjectId): Promise<ShopDocument[]> {
    return this.shopModel
      .aggregate([
        {
          $match: {
            userId,
          },
        },
      ])
      .exec();
  }

  async saveShop(payload: CreateShopDto): Promise<ShopDocument> {
    const model = new this.shopModel(payload);
    return model.save();
  }

  async findOneShop(
    $filter: FilterQuery<ShopDocument>,
    $projection?: Projection<ShopDocument>,
  ): Promise<ShopDocument> {
    return this.shopModel.findOne({ ...$filter }, { ...$projection }).lean();
  }
}
