import { Injectable, NotFoundException } from '@nestjs/common';
import { GetUserByIdDto } from './dto/request/get-user-by-id.dto';
import { UserResponseDto } from './dto/response/user-response.dto';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { CreateUserDto } from './dto/request/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.create(createUserDto.toEntity());
  }

  async getUser(getUserByIdDto: GetUserByIdDto): Promise<UserResponseDto> {
    const user = await this.userRepository.findById(getUserByIdDto.id);

    if (!user) {
      throw new NotFoundException(`User: ${getUserByIdDto.id} not found`);
    }

    return new UserResponseDto(user);
  }
}
