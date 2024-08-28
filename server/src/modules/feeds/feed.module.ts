import { Module } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';
import { FeedRepository } from './feed.repository';
import { FeedFeature } from './schema/feed.schema';
import { UserModule } from '@modules/users/user.module';
import { ShopModule } from '@modules/shop/shop.module';
import { MapModule } from '@modules/map/map.module';

@Module({
  imports: [FeedFeature, UserModule, ShopModule, MapModule],
  controllers: [FeedController],
  providers: [FeedService, FeedRepository],
  exports: [FeedService],
})
export class FeedModule {}
