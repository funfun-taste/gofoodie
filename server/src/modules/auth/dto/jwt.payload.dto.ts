import { IsNumber, IsObject } from 'class-validator';
import { Type } from 'class-transformer';
import { UserPayloadDto } from '@modules/users/dto/user.payload.dto';

export class JwtPayloadDto {
  @IsObject()
  @Type(() => UserPayloadDto)
  payload: UserPayloadDto;
  @IsNumber()
  iat: number;
  @IsNumber()
  exp: number;
}
