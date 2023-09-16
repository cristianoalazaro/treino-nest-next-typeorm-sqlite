import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { randomUUID } from 'crypto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>) {}
    
  async createUser(createUserInput: CreateUserInput) {
    const newUser = new UserEntity();
    newUser.id = randomUUID();
    newUser.name = createUserInput.name;

    return await this.userRepository.save(newUser);
  }

  async getUsers() {
    return await this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
