import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UserPayloadDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsOptional()
  profile: string;
}
