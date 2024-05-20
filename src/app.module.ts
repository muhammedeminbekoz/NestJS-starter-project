import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmOptions } from './config/typeorm.config';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UserModule, TypeOrmModule.forRoot(typeOrmOptions)],
})
export class AppModule {}
