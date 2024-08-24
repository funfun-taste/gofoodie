import { Module } from '@nestjs/common';
import { MapController } from './map.controller';
import { MapService } from './map.service';
import { MapRespository } from './map.repository';
import { MapFeature } from './schema/map.schema';

@Module({
  imports: [MapFeature],
  controllers: [MapController],
  providers: [MapService, MapRespository],
  exports: [MapService],
})
export class MapModule {}
