import { Controller, Get, Query } from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller({
  path: 'shop',
})
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get('/marker')
  async drawShopMarker(@Query('creatorId') creatorId: string) {
    return this.shopService.drawShopMarker(creatorId);
  }
}
