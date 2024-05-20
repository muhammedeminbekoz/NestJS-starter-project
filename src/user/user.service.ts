import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './dto/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  activeUsers() {
    return [
      { id: 1, name: 'Muhammed' },
      { id: 2, name: 'Muhammed' },
    ];
  }

  createUser(createUserDto: CreateUserDto) {
    const user: User = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;

    return this.userRepository.save(user);
  }
}
