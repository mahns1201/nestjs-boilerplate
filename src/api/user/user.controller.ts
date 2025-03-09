import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { GetUserByIdDto } from './dto/request/get-user-by-id.dto';
import { UserResponseDto } from './dto/response/user-response.dto';
import { CreateUserDto } from './dto/request/create-user.dto';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(ClassSerializerInterceptor)
  getUser(@Param() getUserByIdDto: GetUserByIdDto): Promise<UserResponseDto> {
    return this.userService.getUser(getUserByIdDto);
  }
}
