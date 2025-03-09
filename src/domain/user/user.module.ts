import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserMysqlRepository } from './repository/user.mysql.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.mysql.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, UserMysqlRepository],
})
export class UserModule {}
