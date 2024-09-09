import { IsArray, IsDate, IsNumber, IsObject, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { FeedUserDto } from '@modules/feeds/dto/feed.list.dto';

export class Comments {
  @IsObject()
  @Type(() => FeedUserDto)
  user: FeedUserDto;
  @IsString()
  comment: string;
  @IsDate()
  createdDate: Date;
  @IsNumber()
  like: number;
  @IsArray({ each: true })
  @IsString()
  userPick: string[];
}
