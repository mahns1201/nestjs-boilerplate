import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { GetUserByIdDto } from './dto/request/get-user-by-id.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getUser(@Param() getUserByIdDto: GetUserByIdDto) {
    return this.userService.getUser(getUserByIdDto);
  }
}
