import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import {ConnectionNames, DbNames} from "@database/database.config";

const mongooseModule = (connectionName: ConnectionNames, dbName: DbNames) => {
  return MongooseModule.forRootAsync({
    imports: [ConfigModule],
    connectionName,
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get<string>('MONGO_URI'),
      dbName,
    }),
    inject: [ConfigService],
  });
};

@Module({
  imports: [
    mongooseModule(ConnectionNames.GO_FOODIE, DbNames.GO_FOODIE),
  ],
})
export class DatabaseModule {}
