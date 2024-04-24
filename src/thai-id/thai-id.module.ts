import { Module } from '@nestjs/common';
import { ThaiIdService } from './thai-id.service';
import { ThaiIdController } from './thai-id.controller';

@Module({
  controllers: [ThaiIdController],
  providers: [ThaiIdService],
})
export class ThaiIdModule {}
