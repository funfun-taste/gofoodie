import {Module} from "@nestjs/common";
import {UserController} from "@modules/users/user.controller";
import {UserService} from "@modules/users/user.service";
import {UserFeature} from "@modules/users/schema/user.schema";

@Module({
  imports: [UserFeature],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}