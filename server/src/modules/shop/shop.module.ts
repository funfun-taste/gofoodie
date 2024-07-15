import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { ShopRepository } from './shop.repository';
import { ShopFeature } from './schema/shop.schema';

@Module({
  imports: [ShopFeature],
  providers: [ShopService, ShopRepository],
  controllers: [ShopController],
  exports: [ShopService],
})
export class ShopModule {}
