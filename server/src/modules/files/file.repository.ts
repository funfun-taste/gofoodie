import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import {
  FilesFeedThumbnail,
  FilesFeedThumbnailDocument,
} from '@modules/files/schema/files.feed.thumbnail.schema';
import { InjectModel } from '@nestjs/mongoose';
import { ConnectionNames } from '@database/database.config';

@Injectable()
export class FileRepository {
  constructor(
    @InjectModel(FilesFeedThumbnail.name, ConnectionNames.GO_FOODIE)
    private readonly filesFeedThumbnailModel: Model<FilesFeedThumbnailDocument>,
  ) {}
}
