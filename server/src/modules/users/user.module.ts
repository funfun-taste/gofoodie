import { Module } from '@nestjs/common';
import { UserController } from '@modules/users/user.controller';
import { UserService } from '@modules/users/user.service';
import { UserFeature } from '@modules/users/schema/user.schema';
import { AuthModule } from '@modules/auth/auth.module';
import { UserRepository } from './user.repository';

@Module({
  imports: [UserFeature, AuthModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
