import { Controller, Get, Query } from '@nestjs/common';
import { MapService } from './map.service';

@Controller({
  path: 'map',
})
export class MapController {
  constructor(private readonly mapSerivce: MapService) {}

  @Get('/marker')
  async drawShopMarker(@Query('creatorId') creatorId: string) {
    return this.mapSerivce.drawMapMarker(creatorId);
  }
}
