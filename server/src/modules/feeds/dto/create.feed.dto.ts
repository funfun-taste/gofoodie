import { ShopDto } from '@modules/shop/dto/create.shop.dto';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateFeedDto {
  @IsString()
  content: string;

  @IsArray()
  @IsOptional()
  files: [];

  @IsOptional()
  @Type(() => ShopDto)
  @IsObject()
  item: ShopDto;

  @IsBoolean()
  mapCheck: boolean;
}

export class CreateFeedPayloadDto {
  @IsString()
  content: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsObject()
  @IsOptional()
  shopId?: string;
}
