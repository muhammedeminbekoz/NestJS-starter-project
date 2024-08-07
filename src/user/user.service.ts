import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { IsNull, Not, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

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

  async getUserById(param: string) {
    const user = await this.userRepository.findOne({ where: { id: param } });
    return user;
  }

  async getDeletedUsers() {
    const users = await this.userRepository.find({
      withDeleted: true,
      where: { deletedAt: Not(IsNull()) },
    });
    return users;
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }

  async deleteUser(id: string) {
    const user = await this.userRepository.findOneBy({ id });
    if (user) {
      return await this.userRepository.softRemove(user);
    } else {
      return { success: false, message: 'bulunamadı', statusCode: 400 };
    }
  }
}
