import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { GetUserByIdDto } from './dto/request/get-user-by-id.dto';
import { UserResponseDto } from './dto/response/user-response.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  getUser(@Param() getUserByIdDto: GetUserByIdDto): Promise<UserResponseDto> {
    return this.userService.getUser(getUserByIdDto);
  }
}
