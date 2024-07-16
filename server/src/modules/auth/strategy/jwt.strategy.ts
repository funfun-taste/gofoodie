import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '@modules/auth/auth.service';
import { JwtPayloadDto } from '@modules/auth/dto/jwt.payload.dto';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request?.cookies[this.configService.get('COOKIE_SECRET')];
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  /**
   * @description: jwt guard validate
   * @param payload
   */
  async validate(payload: JwtPayloadDto): Promise<JwtPayloadDto> {
    return { ...payload };
  }
}
