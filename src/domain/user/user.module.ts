import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserMysqlRepository } from './repository/user.mysql.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMysqlEntity } from './entity/user.mysql.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserMysqlEntity])],
  controllers: [UserController],
  providers: [UserService, UserMysqlRepository],
})
export class UserModule {}
