import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '@modules/auth/guards/jwt.guard';
import { ProfileUpdateDto } from './dto/profile.update.dto';
import { UserObject } from './decorators/user-info.decorator';
import { JwtPayloadDto } from '@modules/auth/dto/jwt.payload.dto';
import { SignInDto, UserDto } from './dto/sign-in.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/auth')
  async userCheck(@Body() user: UserDto): Promise<SignInDto> {
    return this.userService.userVerify(user);
  }

  @Patch('/profile')
  @UseGuards(JwtAuthGuard)
  async profileUpdate(
    @Body() body: ProfileUpdateDto,
    @UserObject() user: JwtPayloadDto,
  ) {
    return this.userService.profileUpdate(body, user);
  }

  @Get('/profile/:id')
  async findUserProfile(@Param('id') id: string) {
    return this.userService.findOneByCreatorId(id);
  }
}
