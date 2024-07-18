import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from '@modules/users/user.repository';
import { ProfileUpdateDto } from './dto/profile.update.dto';
import { JwtPayloadDto } from '@modules/auth/dto/jwt.payload.dto';
import { AuthService } from '@modules/auth/auth.service';
import { SignInDto, UserDto } from './dto/sign-in.dto';
import { CreateUserDto } from './dto/create.user.dto';
import { createUuid } from '@lib/uuid';
import { UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    private readonly authService: AuthService,
    private readonly userRepository: UserRepository,
  ) {}

  async createUser(user: UserDto): Promise<UserDocument> {
    const { name, id, image } = user;
    const userData: CreateUserDto = {
      username: name,
      creatorId: id,
      uniqueId: createUuid(),
      profileImage: image || 'default.png',
    };
    return this.userRepository.createUser(userData);
  }

  async randomRecommendUser(creatorId: string) {
    return this.userRepository.randomRecommendUser(creatorId);
  }

  async userVerify(user: UserDto): Promise<SignInDto> {
    const { id, name } = user;
    let userData = null;
    const findUser = await this.findOneByCreatorId(id);
    if (!findUser) {
      userData = await this.createUser(user);
    } else userData = findUser;

    const token = await this.authService.createToken({
      id,
      username: name,
      profile: userData.profileImage,
    });
    return {
      token,
      profile: userData.profileImage,
    };
  }

  async findOneByCreatorId(creatorId: string) {
    return this.userRepository.findOne({ creatorId });
  }

  async profileUpdate(body: ProfileUpdateDto, user: JwtPayloadDto) {
    this.logger.log('profile update');
  }
}
