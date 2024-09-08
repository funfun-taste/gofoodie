import { Module } from '@nestjs/common';
import { MapController } from './map.controller';
import { MapService } from './map.service';
import { MapRespository } from './map.repository';
import { MapFeature } from './schema/map.schema';
import { UserModule } from '@modules/users/user.module';

@Module({
  imports: [MapFeature, UserModule],
  controllers: [MapController],
  providers: [MapService, MapRespository],
  exports: [MapService],
})
export class MapModule {}
