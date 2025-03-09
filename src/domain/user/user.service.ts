import { Injectable } from '@nestjs/common';
import { GetUserByIdDto } from './dto/request/get-user-by-id.dto';

@Injectable()
export class UserService {
  constructor() {}

  getUser(getUserByIdDto: GetUserByIdDto) {
    return { id: getUserByIdDto.id, name: 'John Doe' };
  }
}
