import {IsEnum, IsString} from 'class-validator';

export class UserPayloadDto {
  @IsString()
  username: string;
}
