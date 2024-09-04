import { Injectable } from '@nestjs/common';
import { MapRespository } from './map.repository';
import { CreateMapDto } from './dto/create.map.dto';

@Injectable()
export class MapService {
  constructor(private readonly mapRespository: MapRespository) {}

  async createMapData(body: CreateMapDto) {
    return this.mapRespository.saveMapData(body);
  }
}
