import { ApiProperty } from '@nestjs/swagger';
import { $Enums, User } from '@prisma/client';

export class UserEntity implements User {
  @ApiProperty()
  user_id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  role: $Enums.Role;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  password: string;
}
