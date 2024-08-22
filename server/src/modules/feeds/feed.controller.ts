import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { FeedService } from './feed.service';
import { JwtAuthGuard } from '@modules/auth/guards/jwt.guard';
import { CreateFeedDto } from './dto/create.feed.dto';
import { UserObject } from '@modules/users/decorators/user-info.decorator';
import { UserPayloadDto } from '@modules/users/dto/user.payload.dto';
import { FilterDto } from './dto/filter.dto';

@Controller({
  path: 'feeds',
})
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createFeed(
    @Body() body: CreateFeedDto,
    @UserObject() user: UserPayloadDto,
  ) {
    return this.feedService.createFeed(body, user);
  }

  @Get('/lists')
  async getFeedLists(@Query() filters: FilterDto) {
    return this.feedService.findFeedLists(filters);
  }

  @Get("/my/lists")
  @UseGuards(JwtAuthGuard)
  async getMyFeedLists(
    @UserObject() user: UserPayloadDto,
    @Query('page') page: number) {
    const {id} = user;
    return this.feedService.getMyFeedLists(id, page);
  }

  @Get('/recently/:creatorId')
  async findRecentlyFeed(@Param('creatorId') creatorId: string) {
    return this.feedService.findRecentlyFeed(creatorId);
  }

  @Get('/detail/with-comment/:feedId')
  async feedDetailWithComment(@Param('feedId') feedId: string) {
    return this.feedService.findOneFeedByFeedId(feedId);
  }

  @Get('/detail/:feedId')
  async feedDetail(@Param('feedId') feedId: string) {
    return this.feedService.findOneFeedByFeedId(feedId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/my-list')
  async myFeedList(
    @UserObject() user: UserPayloadDto,
    @Query('page') page: number,
  ) {
    return this.feedService.findMyFeedList(user, page);
  }
}
