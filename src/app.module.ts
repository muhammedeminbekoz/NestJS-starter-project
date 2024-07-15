import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmOptions } from './config/typeorm.config';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(typeOrmOptions)],
})
export class AppModule {}
