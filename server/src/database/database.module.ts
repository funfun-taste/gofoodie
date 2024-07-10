import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ConnectionNames, DbNames } from '@src/config/database/database.config';

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
    mongooseModule(ConnectionNames.BIZCHAT, DbNames.BIZCHAT),
    mongooseModule(ConnectionNames.PMI_API, DbNames.PMI_API),
  ],
})
export class DatabaseModule {}
