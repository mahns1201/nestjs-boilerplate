import { Repository } from 'typeorm';
import { User } from '../entity/user.mysql.entity';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';

export class UserMysqlRepository extends UserRepository<User> {
  constructor(
    @InjectRepository(User)
    private readonly userMysqlRepository: Repository<User>,
  ) {
    super();
  }

  async findById(id: number): Promise<User | null> {
    return this.userMysqlRepository.findOne({
      where: { id },
    });
  }
}
