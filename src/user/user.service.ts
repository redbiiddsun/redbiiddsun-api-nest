import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { prismaExclude } from 'src/util/exclude';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {}

  // Create a new user
  async create(createUserDto: CreateUserDto): Promise<Omit<User, 'password'>> {
    const SALT_ROUNDS = this.configService.get('salt_rounds');

    const hashedPassword: string = await bcrypt.hash(
      createUserDto.password,
      SALT_ROUNDS,
    );
    createUserDto.password = hashedPassword;

    return this.prisma.user.create({
      data: createUserDto,
      select: prismaExclude('User', ['password']),
    });
  }

  async findAll(): Promise<Omit<User, 'password'>[]> {
    return this.prisma.user.findMany({
      select: prismaExclude('User', ['password']),
    });
  }

  async findOne(user_id: string): Promise<Omit<User, 'password'> | null> {
    return this.prisma.user.findUnique({
      where: {
        user_id,
      },
      select: prismaExclude('User', ['password']),
    });
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<Omit<User, 'password'>> {
    return this.prisma.user.update({
      data: updateUserDto,
      where: { user_id: id },
      select: prismaExclude('User', ['password']),
    });
  }

  async remove(user_id: string): Promise<Omit<User, 'password'>> {
    return this.prisma.user.delete({ where: { user_id } });
  }
}
