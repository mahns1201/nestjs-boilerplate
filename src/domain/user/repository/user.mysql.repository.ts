import { Repository } from 'typeorm';
import { UserMysqlEntity } from '../entity/user.mysql.entity';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';

export class UserMysqlRepository extends UserRepository<UserMysqlEntity> {
  constructor(
    @InjectRepository(UserMysqlEntity)
    private readonly userMysqlRepository: Repository<UserMysqlEntity>,
  ) {
    super();
  }

  async findById(id: number): Promise<UserMysqlEntity | null> {
    return this.userMysqlRepository.findOne({
      where: { id },
    });
  }
}
