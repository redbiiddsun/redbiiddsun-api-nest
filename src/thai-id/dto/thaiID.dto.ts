import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CheckThaiCitizenDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  id: string;
}
