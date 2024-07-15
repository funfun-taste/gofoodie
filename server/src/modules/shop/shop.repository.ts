import { ConnectionNames } from '@database/database.config';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Shop, ShopDocument } from './schema/shop.schema';
import { Model, FilterQuery } from 'mongoose';
import { Projection } from '@lib/type/projection.type';
import { CreateShopDto } from './dto/create.shop.dto';

@Injectable()
export class ShopRepository {
  constructor(
    @InjectModel(Shop.name, ConnectionNames.GO_FOODIE)
    private readonly shopModel: Model<ShopDocument>,
  ) {}

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
