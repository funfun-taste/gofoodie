import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMapDto {
  @IsString()
  @IsNotEmpty()
  x: string;

  @IsString()
  @IsNotEmpty()
  y: string;

  @IsString()
  @IsNotEmpty()
  marker: string; // enum

  @IsString()
  @IsNotEmpty()
  userId: string; // userId

  @IsString()
  @IsNotEmpty()
  feedId: string; // feedId
}
