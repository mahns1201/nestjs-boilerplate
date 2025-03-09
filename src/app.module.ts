import { Module } from '@nestjs/common';
import { UserModule } from './api/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeormConfig } from './config/db/typeorm.config';
import { PostModule } from './api/post/post.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./.env`,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeormConfig,
    }),
    UserModule,
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
