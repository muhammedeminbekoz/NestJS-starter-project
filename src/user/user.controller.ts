import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('deleted')
  getDeletedUsers() {
    return this.userService.getDeletedUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: any) {
    return this.userService.deleteUser(id);
  }
}
