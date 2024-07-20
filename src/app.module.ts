import { Module } from '@nestjs/common';

import configuration from './config/configuration';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PrismaModule } from 'nestjs-prisma';
import { ThaiIdModule } from './thai-id/thai-id.module';

@Module({
  imports: [
    // ConfigModule.forRoot() is a global module that loads environment variables from a configuration file
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),

    // PrismaModule.forRoot() is a global module that connects to the Prisma client
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        explicitConnect: true,
        prismaOptions: {
          log: [
            {
              emit: 'event',
              level: 'query',
            },
          ],
        },
      },
    }),

    UserModule,

    ThaiIdModule,
  ],
})
export class AppModule {}
