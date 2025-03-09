import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TypeormConfig implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.configService.get('MYSQL_HOST', 'localhost'),
      port: +this.configService.get('MYSQL_PORT', '3306'),
      database: this.configService.get('MYSQL_DATABASE', ''),
      username: this.configService.get('MYSQL_USERNAME', ''),
      password: this.configService.get('MYSQL_PASSWORD', ''),
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production',
    };
  }
}
