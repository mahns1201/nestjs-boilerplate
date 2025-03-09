import { Module } from '@nestjs/common';
import { UserModule } from './api/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeormConfig } from './config/db/typeorm.config';
import { ArticleModule } from './api/article/article.module';

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
    ArticleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
