import { Injectable } from '@nestjs/common';
import { MapRespository } from './map.repository';
import { CreateMapDto } from './dto/create.map.dto';
import { UserService } from '@modules/users/user.service';

@Injectable()
export class MapService {
  constructor(
    private readonly mapRespository: MapRespository,
    private readonly userService: UserService,
  ) {}

  async createMapData(body: CreateMapDto) {
    return this.mapRespository.saveMapData(body);
  }

  async drawMapMarker(creatorId: string) {
    const findUser = await this.userService.findOneByCreatorId(creatorId);
    if (findUser) return this.mapRespository.findMapCoordinate(findUser._id);
  }
}
