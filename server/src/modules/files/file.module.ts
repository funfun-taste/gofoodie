import { Module } from '@nestjs/common';
import { FilesFeedThumbnailFeature } from '@modules/files/schema/files.feed.thumbnail.schema';
import { FileController } from '@modules/files/file.controller';
import { FileService } from '@modules/files/file.service';
import { FileRepository } from '@modules/files/file.repository';

@Module({
  imports: [FilesFeedThumbnailFeature],
  controllers: [FileController],
  providers: [FileService, FileRepository],
  exports: [FileService],
})
export class FileModule {}
