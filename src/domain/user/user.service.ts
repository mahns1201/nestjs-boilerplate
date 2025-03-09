import { Injectable } from '@nestjs/common';
import { GetUserByIdDto } from './dto/request/get-user-by-id.dto';
import { UserResponseDto } from './dto/response/user-response.dto';

@Injectable()
export class UserService {
  constructor() {}

  getUser(getUserByIdDto: GetUserByIdDto): UserResponseDto {
    return new UserResponseDto({ id: getUserByIdDto.id, name: 'John Doe' });
  }
}
