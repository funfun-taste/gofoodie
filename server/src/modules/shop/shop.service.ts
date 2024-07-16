import { Injectable } from '@nestjs/common';
import { ShopRepository } from './shop.repository';
import { ShopDocument } from './schema/shop.schema';
import { CreateShopDto, ShopDto } from './dto/create.shop.dto';

@Injectable()
export class ShopService {
  constructor(private readonly shopRespository: ShopRepository) {}

  // x,y 좌표로 shop 조회
  async findOneByXy(x: string, y: string): Promise<ShopDocument> {
    return this.shopRespository.findOneShop({ x, y });
  }

  async createShop(userId: string, shop: ShopDto): Promise<ShopDocument> {
    const { address } = shop;
    const payload: CreateShopDto = {
      userId,
      ...shop,
      fullAddress: address.name,
      sigungu: address.sigungu,
      sido: address.sido,
      x: address.x,
      y: address.y,
    };
    return this.shopRespository.saveShop(payload);
  }
}
