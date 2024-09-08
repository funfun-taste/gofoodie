import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMapDto {
  @IsString()
  @IsNotEmpty()
  x: string;

  @IsString()
  @IsNotEmpty()
  y: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  marker: string; // enum

  @IsString()
  @IsNotEmpty()
  userId: string; // userId

  @IsString()
  @IsNotEmpty()
  feedId: string; // feedId

  @IsString()
  @IsNotEmpty()
  shopId: string;
}
