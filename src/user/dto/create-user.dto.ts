import { ApiProperty } from '@nestjs/swagger';
import { $Enums, User } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto
  implements Omit<User, 'user_id' | 'created_at' | 'updated_at'>
{
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({ required: true })
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  last_name: string;

  @IsEnum($Enums.Role)
  @IsOptional()
  @ApiProperty({ required: false, default: 'USER' })
  role: $Enums.Role;
}
