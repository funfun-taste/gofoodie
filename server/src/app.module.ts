import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { HttpExceptionFilter } from '@common/filters/http-exception.filter';
import { UserModule } from '@modules/users/user.module';
import { DatabaseModule } from '@database/database.module';
import {FeedModule} from "@modules/feeds/feed.module";
import {FileModule} from "@modules/files/file.module";
import {ShopModule} from "@modules/shop/shop.module";

const envFilePath = ['.env'];

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 1000,
        limit: 50,
      },
    ]),
    UserModule,
    FeedModule,
    ShopModule,
    FileModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
