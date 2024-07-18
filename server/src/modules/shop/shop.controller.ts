import {Controller, Get, Query, UseGuards} from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller({
  path: 'shop'
})
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get('/marker')
  async drawShopMarker(@Query() creatorId: string){
    return this.shopService.drawShopMarker(creatorId);
  }

}
