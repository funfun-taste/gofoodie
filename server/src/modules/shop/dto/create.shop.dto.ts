import { Type } from 'class-transformer';
import { IsObject, IsString } from 'class-validator';

export class Address {
  @IsString()
  name: string;

  @IsString()
  sigungu: string;

  @IsString()
  sido: string;

  @IsString()
  x: string;

  @IsString()
  y: string;
}

export class ShopDto {
  @IsString()
  title: string;

  @IsString()
  category: string;

  @IsObject()
  @Type(() => Address)
  address: Address;
}

export class CreateShopDto {
  @IsString()
  userId: string;

  @IsString()
  title: string;

  @IsString()
  category: string;

  @IsString()
  fullAddress: string;

  @IsString()
  sigungu: string;

  @IsString()
  sido: string;

  @IsString()
  x: string;

  @IsString()
  y: string;
}
