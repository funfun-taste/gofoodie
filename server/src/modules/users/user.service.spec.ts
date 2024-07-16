import { UserService } from '@modules/users/user.service';
import { Test, TestingModule } from '@nestjs/testing';
import { UserRepository } from '@modules/users/user.repository';

describe('User Service', () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserRepository],
    }).compile();

    userService = await module.get<UserService>(UserService);

    test('userService be defined', () => {
      expect(userService).toBeDefined();
    });
  });
});
