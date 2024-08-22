import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { FeedRepository } from './feed.repository';
import { CreateFeedDto, CreateFeedPayloadDto } from './dto/create.feed.dto';
import { UserPayloadDto } from '@modules/users/dto/user.payload.dto';
import { FilterDto } from './dto/filter.dto';
import { UserService } from '@modules/users/user.service';
import { ShopService } from '@modules/shop/shop.service';
import { ShopDocument } from '@modules/shop/schema/shop.schema';
import { ShopDto } from '@modules/shop/dto/create.shop.dto';
import { ObjectId } from 'mongodb';
import { FeedDocument } from '@modules/feeds/schema/feed.schema';
import { objectIdToString, stringToObjectId } from '@lib/converter';
import { FeedListDto } from '@modules/feeds/dto/feed.list.dto';

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
        createFeed.shopId = objectIdToString(shop._id);
      }
      return this.feedRepository.saveFeed(createFeed);
    } catch (e) {}
  }

  // 피드 리스트 조회
  async findFeedLists(filters: FilterDto): Promise<FeedListDto[]> {
    const { region, page: filterPage } = filters;
    let page = +filterPage;
    if (isNaN(page)) page = 1;
    const $limit = 20;
    const $skip = $limit * (page - 1);
    const result = await this.feedRepository.findFeedLists(
      region,
      $skip,
      $limit,
    );
    return result.map((feedModel: any) => {
      const { _id, content, createdDate, shop, files, user } = feedModel;
      const feedId = objectIdToString(_id);

      const obj: FeedListDto = {
        feedId,
        content,
        createdDate,
        user: {
          username: user.username,
          profileImage: user.profileImage,
        },
      };

      if (shop) {
        obj.shop = {
          title: shop.title,
          category: shop.category,
          fullAddress: shop.fullAddress,
        };
      }

      if (files && files.length > 0) {
        obj.files = files.map((file) => file.path1);
      }

      return obj;
    });
  }

  async getMyFeedLists(creatorId: string, page: number) {
    if (isNaN(page)) page = 1;
    const $limit = 20;
    const $skip = $limit * (page - 1);

    const findUser = await this.userService.findOneByCreatorId(creatorId);
    if (!findUser)
      throw new UnauthorizedException('로그인 정보가 유효하지 않습니다.');

    return this.feedRepository.findMyFeedLists(findUser._id, $skip, $limit);
  }

  // 피드 상세 조회
  async findOneFeedByFeedId(feedId: string): Promise<FeedDocument> {
    const _id: ObjectId = stringToObjectId(feedId);
    const feed = await this.feedRepository.findOneFeedDetail(_id);
    if (!feed) throw new NotFoundException('게시물이 존재하지 않습니다.');
    return feed;
  }

  // 최근 피드 조회
  async findRecentlyFeed(creatorId: string) {
    const findUser = await this.userService.findOneByCreatorId(creatorId);
    if (!findUser)
      throw new UnauthorizedException('로그인 정보가 유효하지 않습니다.');
    return this.feedRepository.findRecentlyFeed(findUser._id);
  }

  async findMyFeedList(user: UserPayloadDto, page: number): Promise<FeedDocument[]> {
    const findUser = await this.userService.findOneByCreatorId(user.id);
    if (!findUser)
      throw new UnauthorizedException('로그인 정보가 유효하지 않습니다.');

    if (isNaN(page)) page = 1;
    const $limit = 20;
    const $skip = $limit * (page - 1);
    return this.feedRepository.findMyFeedLists(findUser._id, $skip, $limit);
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
}
