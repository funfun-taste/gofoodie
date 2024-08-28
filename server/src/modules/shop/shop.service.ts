import { Injectable } from '@nestjs/common';
import { ShopRepository } from './shop.repository';
import { ShopDocument } from './schema/shop.schema';
import { CreateShopDto, ShopDto } from './dto/create.shop.dto';
import { UserService } from '@modules/users/user.service';

@Injectable()
export class ShopService {
  constructor(
    private readonly userService: UserService,
    private readonly shopRepository: ShopRepository,
  ) {}

  async drawShopMarker(creatorId: string) {
    const findUser = await this.userService.findOneByCreatorId(creatorId);
    if (findUser)
      return this.shopRepository.findShopCoordinateByUserId(findUser._id);
  }

  // x,y 좌표로 shop 조회
  async findOneByXy(x: string, y: string): Promise<ShopDocument> {
    return this.shopRepository.findOneShop({ x, y });
  }

  async createShopData(userId: string, shop: ShopDto): Promise<ShopDocument> {
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
    return this.shopRepository.saveShop(payload);
  }
}
