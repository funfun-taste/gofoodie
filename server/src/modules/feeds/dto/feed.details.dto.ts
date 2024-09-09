import { FeedListDto } from '@modules/feeds/dto/feed.list.dto';
import { Comments } from '@modules/feeds/comments/dto/comments.dto';
import { IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class FeedDetailsDto {
  @IsArray({ each: true })
  @Type(() => Comments)
  comments: Comments[];

  @Type(() => FeedListDto)
  feed: FeedListDto;
}
