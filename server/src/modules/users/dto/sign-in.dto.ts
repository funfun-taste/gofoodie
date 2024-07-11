import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @IsString()
  profile: string;

  @IsString()
  @IsNotEmpty()
  token: string;
}

export class UserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  image: string;
}
