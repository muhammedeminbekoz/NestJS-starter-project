import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  activeUsers() {
    return [
      { id: 1, name: 'Muhammed' },
      { id: 2, name: 'Muhammed' },
    ];
  }

  create(createUserDto: CreateUserDto) {
    return { message: 'saved', createUserDto };
  }
}
