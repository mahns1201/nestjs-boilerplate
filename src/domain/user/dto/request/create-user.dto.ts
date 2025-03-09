import { IsNotEmpty, IsString } from 'class-validator';
import { User } from '../../entity/user.mysql.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  toEntity(): User {
    const user = new User();

    user.name = this.name;

    return user;
  }
}
