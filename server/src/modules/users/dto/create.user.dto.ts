import { IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;
  @IsString()
  creatorId: string;
  @IsString()
  uniqueId: string;
  @IsString()
  @IsOptional()
  profileImage: string;
}
