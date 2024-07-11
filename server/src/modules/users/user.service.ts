import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from '@modules/users/user.repository';
import { ProfileUpdateDto } from './dto/profile.update.dto';
import { JwtPayloadDto } from '@modules/auth/dto/jwt.payload.dto';
import { AuthService } from '@modules/auth/auth.service';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    private readonly authService: AuthService,
    private readonly userRepository: UserRepository,
  ) {}

  async createUser(user: UserDto) {
    const userData = {};
    return this.userRepository.createUser(userData);
  }

  //todo 타입 미정
  async userVerify(user: any) {
    this.logger.log(`${user}, 'user Data'`);
    const { id, name } = user;
    const findUser = await this.findOneByCreatorId(id);
    if (!findUser) {
      const data = {
        username: name,
        id,
      };
      await this.createUser(data);
    }

    const token = await this.authService.createToken({
      id,
      username: name,
      profile: findUser.profileImage,
    });
    return {
      token,
      profile: findUser.profileImage,
    };
  }

  async findOneByCreatorId(creatorId: string) {
    return this.userRepository.findOne({ creatorId });
  }

  async profileUpdate(body: ProfileUpdateDto, user: JwtPayloadDto) {
    this.logger.log('profile update');
  }
}
