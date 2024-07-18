import {IsArray, IsDate, IsNotEmpty, IsObject, IsOptional, IsString} from "class-validator";
import {Type} from "class-transformer";

export class FeedUserDto {
  @IsString()
  username: string;
  @IsString()
  profileImage: string;
}

/**@description 파일 정보*/
export class FeedFilesDto {
  @IsString()
  name: string;
  @IsString()
  path: string;
}

/**@description shop 정보*/
export class FeedShopDto {
  @IsString()
  category: string;
  @IsString()
  fullAddress: string;
  @IsString()
  title: string;
}

/**
 * @description 피드 리스트 데이터 가공
 */
export class FeedListDto {
  @IsString()
  @IsNotEmpty()
  feedId: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsDate()
  createdDate: Date;

  @IsObject()
  @IsOptional()
  @Type(() => FeedShopDto)
  shop?: FeedShopDto;

  @IsArray()
  @IsOptional()
  @Type(() => FeedFilesDto)
  files?: FeedFilesDto[];

  @IsObject()
  @Type(() => FeedUserDto)
  user: FeedUserDto;
}