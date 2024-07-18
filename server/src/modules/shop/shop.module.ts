import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { ShopRepository } from './shop.repository';
import { ShopFeature } from './schema/shop.schema';
import { UserModule } from "@modules/users/user.module";

@Module({
  imports: [ShopFeature, UserModule],
  providers: [ShopService, ShopRepository],
  controllers: [ShopController],
  exports: [ShopService],
})
export class ShopModule {}
