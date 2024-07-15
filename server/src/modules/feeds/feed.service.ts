import { Injectable, NotFoundException } from '@nestjs/common';
import { FeedRepository } from './feed.repository';
import { CreateFeedDto, CreateFeedPayloadDto } from './dto/create.feed.dto';
import { UserPayloadDto } from '@modules/users/dto/user.payload.dto';
import { FilterDto } from './dto/filter';
import { UserService } from '@modules/users/user.service';
import { ShopService } from '@modules/shop/shop.service';
import { ShopDocument } from '@modules/shop/schema/shop.schema';
import { ShopDto } from '@modules/shop/dto/create.shop.dto';

@Injectable()
export class FeedService {
  constructor(
    private readonly userService: UserService,
    private readonly shopService: ShopService,
    private readonly feedRepository: FeedRepository,
  ) {}

  // 피드 생성
  async createFeed(body: CreateFeedDto, user: UserPayloadDto) {
    try {
      const findUser = await this.userService.findOneByCreatorId(user.id);

      if (!findUser)
        throw new NotFoundException('사용자 정보가 존재하지 않습니다.');

      const userId = String(findUser._id);

      const createFeed: CreateFeedPayloadDto = {
        content: body.content,
        userId: userId,
      };

      if (this.addressItemCheck(body.item)) {
        const { item } = body;
        const { address } = item;

        let shop: ShopDocument = await this.shopService.findOneByXy(
          address.x,
          address.y,
        );
        // 없으면 추가
        if (!shop) {
          shop = await this.shopService.createShop(userId, item);
        }

        createFeed.ShopId = String(shop._id);
        return this.feedRepository.saveFeed(createFeed);
      }
    } catch (e) {}
  }

  private addressItemCheck(item: ShopDto): boolean {
    for (const key in item) {
      if (typeof item[key] === 'object') {
        for (const innerKey in item[key]) {
          if (item[key][innerKey] === '') return false;
        }
      } else {
        if (item[key] === '') return false;
      }
    }
    return true;
  }

  // 피드 리스트 조회
  async findFeedLists(filters: FilterDto) {}

  // 피드 상세 조회
  async findOneFeedByFeedId(feedId: string) {}

  // 최근 피드 조회
  async findRecentlyFeed(creatorId: string) {}

  async findMyFeedList(user: UserPayloadDto, page: number) {}
}
