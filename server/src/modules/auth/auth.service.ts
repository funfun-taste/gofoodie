import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserPayloadDto } from '@modules/users/dto/user.payload.dto';
import { Request } from 'express';

@Injectable()
export class AuthService {
  secret = '';

  constructor(
    private configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {
    this.secret = configService.get<string>('JWT_SECRET');
  }

  async createToken(payload: UserPayloadDto): Promise<string> {
    return this.jwtService.sign(
      { ...payload },
      {
        secret: this.secret,
      },
    );
  }

  async verify(token: string) {
    return this.jwtService.verify(token, {
      secret: this.secret,
    });
  }

  async decodeToken(token: string) {
    return this.jwtService.decode(token);
  }

  async removeBearerPrefix(request: Request): Promise<string> {
    const bearerToken = request.header('authorization');
    const prefix = 'Bearer ';
    if (bearerToken.startsWith(prefix)) {
      return bearerToken.slice(prefix.length);
    }
    return bearerToken;
  }
}
