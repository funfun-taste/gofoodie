import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserPayloadDto } from '../dto/user.payload.dto';

export const UserObject = createParamDecorator(
  (data, ctx: ExecutionContext): UserPayloadDto => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
