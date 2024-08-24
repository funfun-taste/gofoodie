import { Injectable } from '@nestjs/common';
import { MapRespository } from './map.repository';

@Injectable()
export class MapService {
  constructor(private readonly mapRespository: MapRespository) {}
}
