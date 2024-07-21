import { Module } from '@nestjs/common';

import configuration from './config/configuration';
import { ConfigModule } from '@nestjs/config';
import { ThaiIdModule } from './thai-id/thai-id.module';

@Module({
  imports: [
    // ConfigModule.forRoot() is a global module that loads environment variables from a configuration file
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ThaiIdModule,
  ],
})
export class AppModule {}
