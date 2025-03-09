import { Injectable, NotFoundException } from '@nestjs/common';
import { GetUserByIdDto } from './dto/request/get-user-by-id.dto';
import { UserResponseDto } from './dto/response/user-response.dto';
import { UserMysqlRepository } from './repository/user.mysql.repository';

@Injectable()
export class UserService {
  constructor(private readonly userMysqlRepository: UserMysqlRepository) {}

  async getUser(getUserByIdDto: GetUserByIdDto): Promise<UserResponseDto> {
    const user = await this.userMysqlRepository.findById(getUserByIdDto.id);

    if (!user) {
      throw new NotFoundException(`User: ${getUserByIdDto.id} not found`);
    }

    return new UserResponseDto(user);
  }
}
