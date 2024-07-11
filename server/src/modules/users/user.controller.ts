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
import { User } from './decorators/user-info.decorator';
import { JwtPayloadDto } from '@modules/auth/dto/jwt.payload.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/auth')
  async userCheck(@Body() user: any) {
    return this.userService.userVerify(user);
  }

  @Patch('/profile')
  @UseGuards(JwtAuthGuard)
  async profileUpdate(
    @Body() body: ProfileUpdateDto,
    @User() user: JwtPayloadDto,
  ) {
    return this.userService.profileUpdate(body, user);
  }

  @Get('/profile/:id')
  async findUserProfile(@Param('id') id: string) {
    return this.userService.findOneByCreatorId(id);
  }
}
