import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const data = this.userRepository.create(createUserDto);
    return await this.userRepository.save(data);
  }

  async getUsers() {
    const users = await this.userRepository.find();
    return users;
  }

  async deleteUser(param: string) {
    const user = await this.userRepository.findOneBy({ id: param });
    if (user) {
      return await this.userRepository.remove(user);
    } else {
      return { success: false, message: 'bulunamadı', statusCode: 400 };
    }
  }
}
