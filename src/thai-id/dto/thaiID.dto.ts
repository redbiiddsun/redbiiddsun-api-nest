import { ApiProperty } from '@nestjs/swagger';
import { $Enums, User } from '@prisma/client';
import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CheckThaiCitizenDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  id: string;
}
