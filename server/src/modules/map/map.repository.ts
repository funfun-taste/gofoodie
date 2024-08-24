import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Map, MapDocument } from './schema/map.schema';
import { ConnectionNames } from '@database/database.config';
import { Model } from 'mongoose';

@Injectable()
export class MapRespository {
  constructor(
    @InjectModel(Map.name, ConnectionNames.GO_FOODIE)
    private readonly mapModel: Model<MapDocument>,
  ) {}
}
