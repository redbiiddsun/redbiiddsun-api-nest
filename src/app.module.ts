import { Module } from '@nestjs/common';
import 'dotenv/config';

import { ConfigModule } from '@nestjs/config';
import { ThaiIdModule } from './thai-id/thai-id.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { mysqlConfiguration } from 'typeorm-config';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      useFactory() {
        return { ...mysqlConfiguration, autoLoadEntities: true };
      },
      dataSourceFactory(mysqlConfiguration) {
        return Promise.resolve(new DataSource(mysqlConfiguration));
      },
    }),

    ThaiIdModule,
  ],
})
export class AppModule {}
